import url from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const copy = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const filesFolder = path.join(dirname, "files");
  const newFilesFolder = path.join(dirname, "files_copy");
  const newError = new Error("FS operation failed");

  try {
    await fs.access(filesFolder, fs.constants.R_OK);
  } catch (e) {
    throw newError;
  }

  try {
    await fs.mkdir(newFilesFolder);
  } catch (e) {
    throw newError;
  }

  const files = await fs.readdir(filesFolder);

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(filesFolder, file);
      const newFilesPath = path.join(newFilesFolder, file);
      await fs.copyFile(filePath, newFilesPath);
    })
  );
};

await copy();
