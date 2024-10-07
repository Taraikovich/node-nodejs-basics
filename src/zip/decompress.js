import { createReadStream, createWriteStream } from 'node:fs';
import { unlink, stat } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { join } from 'node:path';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const input = join(__dirname, 'files', 'archive.gz');
  const output = join(__dirname, 'files', 'fileToCompress.txt');

  try {
    await stat(input);
    await pipeline(
      createReadStream(input),
      createUnzip(),
      createWriteStream(output)
    );
    await unlink(input);
  } catch (error) {
    if ((error.code = 'ENOENT')) console.error('archive.gz not found');
    else console.error(error);
  }
};

await decompress();
