const PREFIX = "RSS_";

const parseEnv = () => {
 const envVarsToShow = [];

 for (let [envKey, envValue] of Object.entries(process.env)) {
  if (envKey.startsWith(PREFIX)) {
   envVarsToShow.push(`${envKey}=${envValue}`);
  }
 }

 console.log(envVarsToShow.join("; "));
};

parseEnv();
