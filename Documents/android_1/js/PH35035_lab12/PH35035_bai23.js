const promise4 = new Promise((resolve, reject) => {
  // Thực hiện công việc promise 4
  resolve("Promise 4 completed");
});

const promise5 = new Promise((resolve, reject) => {
  // Thực hiện công việc promise 5
  reject("Promise 5 failed");
});

const promise6 = new Promise((resolve, reject) => {
  // Thực hiện công việc promise 6
  resolve("Promise 6 completed");
});

const allPromises = [promise4, promise5, promise6];

Promise.allSettled(allPromises).then((results) => {
  const successPromises = results.filter(
    (result) => result.status === "fulfilled"
  );
  console.log("Thành công:", successPromises);

  if (successPromises.length === allPromises.length) {
    console.log("Tất cả các promise hoàn thành thành công");
  } else {
    console.log("Có ít nhất một promise thất bại hoặc không hoàn thành");
  }
});
