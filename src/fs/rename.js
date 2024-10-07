import { rename as rn, stat } from 'node:fs/promises';
import { join } from 'node:path';

const rename = async () => {
  const __dirname = import.meta.dirname;
  const source = join(__dirname, 'files', 'wrongFilename.txt');
  const destination = join(__dirname, 'files', 'properFilename.md');
  try {
    await stat(source);
    try {
      await stat(destination);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        await rn(source, destination);
      }
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
