const pause = (seconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
};

export { pause };
