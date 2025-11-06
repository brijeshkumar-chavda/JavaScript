function abc() {
  function xyz() {
    console.log("xyz");
  }
}

abc.prototype.xyz = function () {
  console.log("xyz");
};
