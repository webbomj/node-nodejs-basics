import fs from "node:fs";
import { Transform } from "node:stream";

const transform = async () => {
  const reversePipe = new Transform({
    transform: (chunk, encoding, callback) => {
      const reversedChunk =
        chunk.toString().split("").reverse().join("") + "\r\n";
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reversePipe).pipe(process.stdout);
};

await transform();
