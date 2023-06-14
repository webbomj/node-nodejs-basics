import fs from "node:fs";
import url from "node:url";
import path from "node:path";
import zlib from "node:zlib";

const decompress = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const fileToCompressPath = path.join(dirname, "files", "fileToCompress.txt");
  const fileCompressedPath = path.join(dirname, "files", "archive.gz");

  const writableStream = fs.createWriteStream(fileToCompressPath);
  const readbleStream = fs.createReadStream(fileCompressedPath);

  const gzipPipe = zlib.createUnzip();

  readbleStream.pipe(gzipPipe).pipe(writableStream);
};

await decompress();
