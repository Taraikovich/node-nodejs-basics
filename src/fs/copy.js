import { cp, stat } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
  const __dirname = import.meta.dirname;
  const source = join(__dirname, 'files');
  const destination = join(__dirname, 'files_copy');

  try {
    await stat(destination);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await cp(source, destination, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
