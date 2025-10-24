import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access, readFile } from "fs/promises";

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
