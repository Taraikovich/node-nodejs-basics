import { spawn } from 'node:child_process';
import { join } from 'node:path';

const spawnChildProcess = async (args) => {
  const script = join(import.meta.dirname, 'files', 'script.js');
  const child = spawn('node', [script, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
