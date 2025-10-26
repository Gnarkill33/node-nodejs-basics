import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "archive.gz");
const __destDir = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
 const gunzip = createGunzip();
 const source = createReadStream(__filename);
 const destination = createWriteStream(__destDir);

 try {
  source.pipe(gunzip).pipe(destination);
 } catch (err) {
  console.error("An error occurred:", err);
 }
};

await decompress();
