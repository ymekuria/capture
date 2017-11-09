export const asyncToPromise = (asyncFunc, params) => {
  return new Promise((resolve, reject) => {
    asyncFunc(params, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data);
    });
  });
};
