import process from "node:process";

const parseEnv = () => {
  const allENV = process.env;
  const ENVKeys = Object.entries(allENV);
  const RSSENVKEYS = ENVKeys.filter((key) => /RSS_\w*/gm.test(key[0])).map(
    (key) => `${key[0]}=${key[1]}`
  );
  process.stdout.write(RSSENVKEYS.join("; "));
};

parseEnv();
