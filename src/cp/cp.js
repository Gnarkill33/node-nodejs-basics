import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { spawn } from "node:child_process";
import { stdout, stdin } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __scriptpath = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
 const child = spawn("node", [__scriptpath, ...args]);

 stdin.pipe(child.stdin);
 child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["I", "can't", "do", "this", "anymore"]);
