export const asyncToPromise = (asyncFunc, params) => {
  return new Promise((resolve, reject) => {
    asyncFunc(params, (error, sources) => {
      if (error) {
        reject(error)
      }
      resolve(sources);
    });
  });
};
