import fs, { constants } from "node:fs/promises";
import url from "node:url";
import path from "node:path";

const create = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const newFileName = dirname + "\\files" + "\\fresh.txt";

  let hasFile = false;
  try {
    await fs.access(newFileName, constants.W_OK);
    hasFile = true;
  } catch (e) {}

  if (hasFile) {
    throw new Error("FS operation failed");
  }

  await fs.writeFile(newFileName, "I am fresh and young");
};

await create();
