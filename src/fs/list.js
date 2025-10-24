import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access, readdir } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __foldername = join(__dirname, "files");

const list = async () => {
 try {
  await access(__foldername);

  const filesToShow = await readdir(__foldername);

  console.log(await Promise.all(filesToShow));
 } catch (err) {
  if (err.code === "ENOENT") {
   throw new Error("FS operation failed");
  }
  throw err;
 }
};

await list();
