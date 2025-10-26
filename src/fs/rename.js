import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { access, rename as renameFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "wrongFilename.txt");
const correctFileName = join(__dirname, "files", "properFilename.md");

const rename = async () => {
 try {
  await access(__filename);

  await renameFile(__filename, correctFileName);
 } catch (err) {
  if (err.code === "EEXIST" || err.code === "ENOENT") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await rename();
