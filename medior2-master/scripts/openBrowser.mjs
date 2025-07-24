import { exec } from 'child_process';
import { platform } from 'os';
// https://dwheeler.com/essays/open-files-urls.html

const help = `Open URL in default browser.

node openBrowser [[-h | --help | ?] | url]

  -h, --help, ?: Show this help.
  url: Open url in default browser. Default url is http://localhost:3000.
`

const [, , argument] = process.argv;

if (['-h', '--help', '?'].includes(argument)) {
  console.log(help);
  process.exit(0);
}

const url = argument || 'http://localhost:3000';

try {
  new URL(url);
} catch (e) {
  console.error('\x1b[31;1mArgument is not valid!\x1b[0m');
  console.log();
  console.log(help);
  process.exit(1);
}

let command;
try {
  switch (platform()) {
    case 'win32': {
      command = 'start';
      break;
    }
    case 'linux': {
      exec('xdg-open --version', (error) => {
        if (error) {
          throw new Error(`Try command xdg-open --version, it looks, that xdg-utils aren\'t installed!
        ${error}`);
        }
      });
      command = 'xdg-open';
      break;
    }
    case 'darwin': {
      command = 'open';
      break;
    }
  }
} catch (error) {
  console.error(`\x1b[31;1Error: ${error.message}.\x1b[0m`);
  process.exit(1);
}

if (!command) {
  console.error(`\x1b[31;1mUnknown command for platform ${platform()}.\x1b[0m`);
  process.exit(1);
}

exec(`${command} ${url}`, (error) => {
  if (error) {
    console.error(`\x1b[31;1mError: ${error.message}\x1b[0m`);
    process.exit(1);
  }
});

console.info(`\x1b[33;1mWebpage ${url} was opened successfully!\x1b[0m`);
