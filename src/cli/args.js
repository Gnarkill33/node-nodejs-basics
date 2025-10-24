const parseArgs = () => {
 const argsToShow = [];
 const [, , ...arrOfArgs] = process.argv;

 let i = 0;

 while (i < arrOfArgs.length) {
  const currentArg = arrOfArgs[i];
  if (currentArg.startsWith("--")) {
   argsToShow.push(`${currentArg.replace("--", "")} is ${arrOfArgs[i + 1]}`);
   i += 2;
  } else {
   i += 1;
  }
 }

 console.log(argsToShow.join(", "));
};

parseArgs();
