import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdir, mkdir, copyFile, access } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const originalFolder = join(__dirname, "files");
const copiedFolder = join(__dirname, "files_copy");

const copy = async () => {
 try {
  await access(originalFolder);

  const originalFiles = await readdir(originalFolder);

  await mkdir(copiedFolder, { recursive: false });

  for (const file of originalFiles) {
   const originalFile = join(originalFolder, file);
   const copiedFile = join(copiedFolder, file);
   await copyFile(originalFile, copiedFile);
  }
 } catch (err) {
  if (err.code === "EEXIST" || err.code === "ENOENT") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await copy();
