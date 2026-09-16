// const h1 = document.querySelector("h1");

// function changeToPink(callback) {
//   let delay = Math.floor(Math.random() * 2);
//   setTimeout(() => {
//     h1.style.color = "pink";

//     callback();
//   }, delay * 1000);
// }

// function changeToBlue(callback) {
//   let delay = Math.floor(Math.random() * 2);
//   setTimeout(() => {
//     h1.style.color = "blue";

//     callback();
//   }, delay * 1000);
// }

// function changeToPurple(callback) {
//   let delay = Math.floor(Math.random() * 2);
//   setTimeout(() => {
//     h1.style.color = "purple";

//     callback(); // console.log("all colors applied...")
//   }, delay * 1000);
// }

// changeToPink(() => {
//   changeToBlue(() => {
//     changeToPurple(() => {
//       console.log("All Colors Applied...");
//     });
//   });
// });

// Example 7: Simple save messages to db functions

// function saveMsg1(callback) {
//   let delay = Math.floor(Math.random() * 5);
//   let isDBAvailable = Math.random() > 0.4;
//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Message 1 is saved successfully");
//       callback();
//     } else {
//       console.log("Message 1 was not saved, because DB is unavailable");
//     }
//   }, delay * 100);
// }
// function saveMsg2(callback) {
//   let delay = Math.floor(Math.random() * 5);
//   let isDBAvailable = Math.random() > 0.4;
//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Message 2 is saved successfully");
//       callback();
//     } else {
//       console.log("Message 2 was not saved, because DB is unavailable");
//     }
//   }, delay * 1000);
// }
// function saveMsg3(callback) {
//   let delay = Math.floor(Math.random() * 5);
//   let isDBAvailable = Math.random() > 0.4;
//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Message 3 is saved successfully");
//       callback();
//     } else {
//       console.log("Message 3 was not saved, because DB is unavailable");
//     }
//   }, delay * 1000);
// }
// saveMsg1(() => {
//   saveMsg2(() => {
//     saveMsg3(() => {
//       console.log("All Messages Saved");
//     });
//   });
// });

// sync
// console.log("js")
// for()

// async
// setTimeout()
// fetch();
// setInterval()

// Promises

// 2 steps: 1: promise creation 2: promise consumption

// handling aync operations using promises

// 1: create a promise object and return it from the async function

function aboutTrain1() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve ("Train-1 has reached to the station");
      } else {
        reject("Train-1 has crashed");
      }
    }, delay * 1000);
  });
}
function aboutTrain2() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train-2 has reached to the station");
      } else {
        reject("Train-2 has crashed");
      }
    }, delay * 1000);
  });
}
function aboutTrain3() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train-3 has reached to the station");
      } else {
        reject("Train-3 has crashed");
      }
    }, delay * 1000);
  });
}
function aboutTrain4() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train-4 has reached to the station");
      } else {
        reject("Train-4 has crashed");
      }
    }, delay * 1000);
  });
}
function aboutTrain5() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train-5 has reached to the station");
      } else {
        reject("Train-5 has crashed");
      }
    }, delay * 1000);
  });
}
aboutTrain1()
  .then((Train) => {
    console.log(Train);
    return aboutTrain2();
  })
  .then((Train) => {
    console.log(Train);
    return aboutTrain3();
  })
  .then((Train) => {
    console.log(Train);
    return aboutTrain4();
  })
  .then((Train) => {
    console.log(Train);
    return aboutTrain5();
  })
  .then((Train) => {
    console.log(Train);

  })
  .catch((Traincrashed)=>{
    console.log(Traincrashed);
  });
