"use strict";
// WE CAN SELECT, CREATE AND DELETE ELEMENTS IN THE DOCUMENT USING JS.

// SELECTING ELEMENTS:
// IT SELECTS ALL THE ELEMENTS INSIDE THE DOCUMENT
console.log(document.documentElement);
// SELECTING HEAD ELEMENT
console.log(document.head);
// SELECTING BODY
console.log(document.body);

// SELECTING AN ELEMENT USING QUERY SELECTOR
const header = document.querySelector(".header");

// SELECTING ALL THE SECTION CLASS ELEMENTS
const allSections = document.querySelectorAll(".section");
// IT CREATES A NODE LIST OF ELEMENTS , WHICH CAN'T BE UPDATED BY ITSELF WHEN DELETING SOME ELEMENT, THE NODELIST IS STORED INSIDE THE ALLSECTION VARIABLE.
console.log(allSections);

// SELECTING ELEMENT BY ID
console.log(document.getElementById("section--1"));

// SELECTING ALL BUTTONS BY THE TAG NAME, IT CREATES AN HTML COLLECTION , WHICH IS UPDATED WHEN REMOVE OR ADD SOMETHING.
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
// IT ALSO CREATES AN HTML COLLECTION.
console.log(document.getElementsByClassName("btn"));

// CREATING AND INSERTING ELEMENTS:

// CREATES ELEMENT AND STORE IT IN THE VARIABLE.
const message = document.createElement("div");
// ADDING CLASS NAME TO THE ELEMENT.
message.classList.add("message1");

// WRITING TEXT INSIDE THE DIV
message.textContent =
  "we use cookied for improved functionality and analytics.";

// WRITING A STRING AND CREATING A BUTTON AS WELL .
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class = "btn"> Got it! </button>';

header.style.width = "300px";
header.style.height = "400px";
header.style.backgroundColor = "yellow";
// INSERTING THE CHILD ELEMENT AT FIRST PLACE.
// PREPEND IS ALSO CREATING AN HTML COLLECTION , SO IT UPDATED WHEN CHANGED
header.prepend(message);
// INSERTING THE CHILD ELEMENT AT LAST, THE CHILD ELEMENT WILL MOVE TO THE LAST PLACE.
header.append(message);

// WE CAN ALSO MAKE COPIES OF THE CHILD ELEMENT:
// IT WILL INSERT THE COPY OF CHILD IN THE FIRST PALCE.
// header.append(message.cloneNode(true));

// IT INSERTS THE ELEMENT BEFORE THE PARENT ELEMENT AS SIBLING
// header.before(message);
// IT ALSO WORKS SAME , UPDATES WHEN CHANGED.
// IT INSERTS AFTER THE PARENT ELEMENT
// header.after(message);

// DELETE ELEMENTS:
// THIS EVENT WILL REMOVE THE ELEMENT , WHEN CLICKED
document.querySelector(".header").addEventListener("click", function () {
  // THE MODERN WAY
  message.remove();
  //   THE OLD WAY
  //   THIS ALSO CALLED TRAVERSING.
  //   message.parentElement.removeChild(message);
});
// SO , THIS IS ALL ABOUT , HOW WE CREATE ADD AND REMOVE ELEMENTS,
// LET'S MOVE TO THE NEXT TOPIC , WHICH IS STYLES , ATTRIBUTES ETC.
