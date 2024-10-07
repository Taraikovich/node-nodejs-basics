import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().trim().split('').reverse().join('') + '\n'
      );
    },
  });

  pipeline(process.stdin, transformStream, process.stdout, (err) => {
    console.error(err);
  });
};

await transform();
