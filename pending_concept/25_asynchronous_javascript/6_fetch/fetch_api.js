const url = "https://dummyjson.com/products/1";

fetch(url)
  .then((result) => result.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
 