import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = join(__dirname, "files", "fileToCompress.txt");
const __destDir = join(__dirname, "files", "archive.gz");

const compress = async () => {
 const gzip = createGzip();
 const source = createReadStream(__filename);
 const destination = createWriteStream(__destDir);

 try {
  source.pipe(gzip).pipe(destination);
 } catch (err) {
  console.error("An error occurred:", err);
 }
};

await compress();
