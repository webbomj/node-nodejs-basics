import fs from "node:fs/promises";
import url from "node:url";
import path from "node:path";

const rename = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const wrongFilePath = path.join(dirname, "files", "wrongFilename.txt");
  const newWrongFilePath = path.join(dirname, "files", "properFilename.md");

  const newError = new Error("FS operation failed");

  try {
    await fs.access(wrongFilePath);
  } catch (e) {
    throw newError;
  }

  let newFileExist = false;

  try {
    await fs.access(newWrongFilePath);
    newFileExist = true;
  } catch (e) {}

  if (newFileExist) {
    throw newError;
  }

  await fs.rename(wrongFilePath, newWrongFilePath);
};

await rename();
