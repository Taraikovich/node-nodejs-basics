import { stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const create = async () => {
  const text = 'I am fresh and young';
  const path = join(import.meta.dirname, 'files', 'fresh.txt');

  try {
    await stat(path);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(path, text);
    } else {
      throw err;
    }
  }
};

await create();
