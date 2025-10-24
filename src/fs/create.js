import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { writeFile } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fresh.txt");

const create = async () => {
 try {
  await writeFile(__filename, "I am fresh and young", { flag: "wx" });
 } catch (err) {
  if (err.code === "EEXIST") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await create();
