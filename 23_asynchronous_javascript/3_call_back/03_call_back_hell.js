// Call back function

// Video
// https://youtu.be/NOlOw03qBfw?si=VFjF1eUuPxogVf1a
// https://youtu.be/bx9xYPt2tdc

function function1(callback) {
  setTimeout(function () {
    console.log("First function executed.");
    callback();
  }, 1000);
}

function function2(callback) {
  setTimeout(function () {
    console.log("Second function executed.");
    callback();
  }, 3000);
}

function function3(callback) {
  setTimeout(function () {
    console.log("Third function executed.");
    callback();
  }, 2000);
}

// Callback Hell
function1(function () {
  function2(function () {
    function3(function () {
      console.log("All functions executed.");
    });
  });
});
