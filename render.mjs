// render.mjs — renders page.html to entry.png (1024x1024) with the headless
// Chromium on this machine. Run: node render.mjs
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join } from 'node:path';

const chrome = join(homedir(), '.cache/ms-playwright/chromium-1255/chrome-linux64/chrome');
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--screenshot=entry.png', '--window-size=1024,1024',
  `file://${process.cwd()}/page.html`,
], { stdio: 'inherit' });
