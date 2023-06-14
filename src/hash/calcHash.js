import crypto from "node:crypto";
import url from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const calculateHash = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const fileToCalculatePath = path.join(
    dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const fileText = await fs.readFile(fileToCalculatePath);

  const result = crypto
    .createHash("sha256")
    .update(fileText.toString())
    .digest("hex");
  console.log(result);
};

await calculateHash();
