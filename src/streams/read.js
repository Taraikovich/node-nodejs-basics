import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const read = async () => {
  const file = join(import.meta.dirname, 'files', 'fileToRead.txt');

  const readStream = createReadStream(file);

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk.toString() + '\n');
  });
};

await read();
