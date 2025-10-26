import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";

const transform = async () => {
 const reversedStream = new Transform({
  transform(chunk, _, callback) {
   const reversedText = chunk.toString().split("").reverse("").join("");
   this.push(reversedText);
   callback();
  },
 });

 try {
  stdin.pipe(reversedStream).pipe(stdout);
 } catch {
  (err) => console.log(err);
 }
};

await transform();
