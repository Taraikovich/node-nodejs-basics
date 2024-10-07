import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const write = async () => {
  const file = join(import.meta.dirname, 'files', 'fileToWrite.txt');

  const writeStream = createWriteStream(file);

  process.stdin.pipe(writeStream);
};

await write();
