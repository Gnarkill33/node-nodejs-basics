import { fileURLToPath } from "url";
import { dirname, join } from "node:path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { once } from "node:events";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
 try {
  const readableStream = createReadStream(__filename, { encoding: "utf8" });
  readableStream.pipe(stdout, { end: false });
  await once(readableStream, "end");
 } catch (err) {
  console.log(err);
 }
};

await read();
