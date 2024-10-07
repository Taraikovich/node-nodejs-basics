const parseEnv = () => {
  const rssVars = [];

  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('RSS')) rssVars.push(`${key}=${value}`);
  }

  console.log(rssVars.join('; '));
};

parseEnv();
