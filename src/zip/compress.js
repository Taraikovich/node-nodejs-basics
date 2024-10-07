import { createReadStream, createWriteStream } from 'node:fs';
import { unlink, stat } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { join } from 'node:path';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __dirname = import.meta.dirname;
  const input = join(__dirname, 'files', 'fileToCompress.txt');
  const output = join(__dirname, 'files', 'archive.gz');

  try {
    await stat(input);
    await pipeline(
      createReadStream(input),
      createGzip(),
      createWriteStream(output)
    );
    await unlink(input);
  } catch (error) {
    if ((error.code = 'ENOENT')) console.error('fileToCompress.txt not found');
    else console.error(error);
  }
};

await compress();
