const parseArgs = () => {
  console.log(
    process.argv
      .slice(2)
      .reduce(
        (acc, crr, i) => (i % 2 ? acc + ` is ${crr}, ` : acc + crr.slice(2)),
        ''
      )
      .slice(0, -2)
  );
};

parseArgs();
