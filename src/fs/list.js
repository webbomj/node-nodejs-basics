import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const list = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const filesFolderPath = path.join(dirname, "files");

  const newError = new Error("FS operation failed");

  try {
    await fs.access(filesFolderPath);
  } catch (e) {
    throw newError;
  }

  const files = await fs.readdir(filesFolderPath);
  files.forEach((file) => {
    process.stdout.write(file + "\n");
  });
};

await list();
