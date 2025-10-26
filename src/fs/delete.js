import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { access, unlink } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
 try {
  await access(__filename);

  await unlink(__filename);
 } catch (err) {
  if (err.code === "ENOENT") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await remove();
