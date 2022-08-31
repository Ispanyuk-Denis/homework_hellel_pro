"use strict";

//1

const checkWorkPromise = new Promise(function (resolve, reject) {
  setTimeout(() => { 
    resolve("done");
    reject(new Error('Some Error'));
  }, 5000);
});

// checkWorkPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Promise was finished!"));

async function checkPromise() {
  try {
    const result = await checkWorkPromise;
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Promise was finished!");
  }
}

checkPromise();