import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { once } from "node:events";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
 try {
  const writableStream = createWriteStream(__filename, { encoding: "utf8" });
  stdin.pipe(writableStream);
  await once(writableStream, "finish");
 } catch (err) {
  console.log(err);
 }
};

await write();
