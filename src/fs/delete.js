import { unlink } from 'node:fs/promises';
import { join } from 'node:path';

const remove = async () => {
  const file = join(import.meta.dirname, 'files', 'fileToRemove.txt');
  try {
    await unlink(file);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
