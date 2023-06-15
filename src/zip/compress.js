import fs from "node:fs";
import url from "node:url";
import path from "node:path";
import zlib from "node:zlib";

const compress = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const fileToCompressPath = path.join(dirname, "files", "fileToCompress.txt");
  const fileCompressedPath = path.join(dirname, "files", "archive.gz");

  const readbleStream = fs.createReadStream(fileToCompressPath);
  const writableStream = fs.createWriteStream(fileCompressedPath);

  const gzipPipe = zlib.createGzip();

  readbleStream.pipe(gzipPipe).pipe(writableStream);
};

await compress();
