import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const calculateHash = async () => {
  const file = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const hashSum = createHash('sha256');

  const stream = createReadStream(file);

  stream.on('data', (chunk) => {
    hashSum.update(chunk);
  });

  stream.on('end', () => {
    const hex = hashSum.digest('hex');
    console.log(hex);
  });
};

await calculateHash();
