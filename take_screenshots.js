const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    'about:blank',
  ]);

  await sleep(1500);

  const targets = await fetch('http://127.0.0.1:9222/json/list').then((r) => r.json());
  const wsUrl = targets[0]?.webSocketDebuggerUrl;
  if (!wsUrl) {
    console.error('No wsUrl found', targets);
    chrome.kill();
    return;
  }

  const ws = new WebSocket(wsUrl);
  await new Promise((resolve) => (ws.onopen = resolve));

  let reqId = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data.result);
      pending.delete(data.id);
    }
  };

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = reqId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  const viewports = [
    { width: 1440, height: 900, name: 'screenshot_1440.png' },
    { width: 1920, height: 1080, name: 'screenshot_1920.png' },
    { width: 390, height: 844, name: 'screenshot_390.png' },
  ];

  for (const vp of viewports) {
    console.log(`Setting viewport ${vp.width}x${vp.height}...`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768,
    });

    console.log(`Navigating to http://localhost:8080/ for ${vp.name}...`);
    await send('Page.navigate', { url: 'http://localhost:8080/' });

    // Wait 3.2s for preloader (1.2s counter + 0.95s curtain) and animations to finish
    await sleep(3500);

    console.log(`Capturing ${vp.name}...`);
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.resolve('D:\\pixel-perfect-capture', vp.name);
    fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    console.log(`Saved ${filePath} (${fs.statSync(filePath).size} bytes)`);
  }

  ws.close();
  chrome.kill();
  console.log('All screenshots captured successfully!');
}

capture().catch(console.error);
