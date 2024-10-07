import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const read = async () => {
  const file = join(import.meta.dirname, 'files', 'fileToRead.txt');

  try {
    const data = await readFile(file, {
      encoding: 'utf-8',
    });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
