// Document Object Model (DOM)

// What
// - Your HTML file is parsed by the browser and converted into a Document Object Model (DOM).
// - The DOM is a tree-like structure that represents the structure and content of the HTML document.
// - It allows you to access and manipulate the elements, attributes, and relationships within the document.
// - It create a object representation of the HTML document and its elements so that you can interact with them using JavaScript.

console.log(document);

// alert("Connected");

// Example: 1
const hold = document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    const paragraph = document.getElementById("myParagraph");
    // console.log(paragraph.textContent);
    paragraph.textContent = "This paragraph has been changed";
  });

// Example: 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    const citiesList = document
      .getElementById("citiesList")
      .firstElementChild.classList.add("highlight");
  });

// Example: 3
const coffeeType = document
  .getElementById("changeOrder")
  .addEventListener("click", function () {
    const coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
  });

// Example: 4
const addNewItem = document
  .getElementById("addNewItem")
  .addEventListener("click", function () {
    // Creation of element
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    // Inserting element
    // - appendChild() needs node as a parameter.
    // - Element is created but it's a virtual node that will be insert in the DOM.
    // - Each element is refer as a node in the DOM.
    document.getElementById("shoppingList").appendChild(newItem);
  });

// Example: 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    const taskList = document
      .getElementById("taskList")
      .lastElementChild.remove();
  });

// Example: 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("double click");
  });

// Example: 7
document.getElementById("teaList").addEventListener("click", function (event) {
  //   console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected " + event.target.textContent);
  }
});

// Example: 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    // Default behavior of HTML form is to submit the form.
    // By using the preventDefault() method, we can prevent the form from submitting.
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback: ${feedback}`;
  });

// Example: 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example: 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    const descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
