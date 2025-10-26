import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
 const hash = createHash("sha256");
 const readableStream = createReadStream(__filename);

 readableStream.on("data", (chunk) => {
  hash.update(chunk);
 });

 readableStream.on("end", () => {
  const hexHash = hash.digest("hex");
  console.log(hexHash);
 });
};

await calculateHash();
