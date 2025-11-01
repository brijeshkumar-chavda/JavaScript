// Call back function

// Video
// https://youtu.be/NOlOw03qBfw?si=VFjF1eUuPxogVf1a
// https://youtu.be/bx9xYPt2tdc

https: function firstFunction(callback) {
  setTimeout(function () {
    console.log("First function executed.");
    callback();
  }, 1000);
}

function secondFunction(callback) {
  setTimeout(function () {
    console.log("Second function executed.");
    callback();
  }, 3000);
}

function thirdFunction(callback) {
  setTimeout(function () {
    console.log("Third function executed.");
    callback();
  }, 2000);
}

// Callback Hell
firstFunction(function () {
  secondFunction(function () {
    thirdFunction(function () {
      console.log("All functions executed.");
    });
  });
});
