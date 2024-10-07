import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const list = async () => {
  const folder = join(import.meta.dirname, 'files');

  try {
    const files = await readdir(folder);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
