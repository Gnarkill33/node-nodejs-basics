import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { access, readFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
 try {
  await access(__filename);

  console.log(await readFile(__filename, { encoding: "utf8" }));
 } catch (err) {
  if (err.code === "ENOENT") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await read();
