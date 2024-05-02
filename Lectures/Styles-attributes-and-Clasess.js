"use strict";
// WE CAN ALSO IMPLEMENT STYLES TO OUR DOCUMENT ELEMENTS , USING JS.

const header = document.querySelector(".header");

const message = document.createElement("div");

message.classList.add("message1");

// WRITING A STRING AND CREATING A BUTTON AS WELL .
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class = "btn"> Got it! </button>';

header.prepend(message);

// ADDING STYLES
// BACKGROUND COLOR
message.style.backgroundColor = "#37383d";
// CHANGING WIDTH
message.style.width = "100%";

// CHECKING THE PROPERTIES , WHICH ARE USED INSIDE THE EXTERNAL CSS FILE FOR THIS HTML FILE.
// REMEMBER THAT , THE JAVSCRIPT STYLING IS BASICALLY INLINE STYLING , SO IT NEVER KNOW THE EXTERNAL CSS BEING USED OR LINKED TO THIS HTML FILE.
// THE COLOR DOESN'T EXISTS IN THE ELEMENT.
console.log(message.style.color);
// WE USED THE BACKGROUND COLOR , SO IT WILL SHOW THE RGB VALUE OF THAT COLOR.
console.log(message.style.backgroundColor);

// TO GET THE VLAUE WHICH IS USED INSIDE THE EXTERNAL FILE FOR THIS ELEMENT , WE USE THE GETCOMPUTED PROPERTY.
// WE DIDN'T USED ANY EXTERNAL FILE, SO IT WILL GET THE RGB VALUE 0.
console.log(getComputedStyle(message).color);
// IT WILL GET THE HEIGHT OF THE DIV IN PX
console.log(getComputedStyle(message).height);

// WE CAN ALSO CHNAGE THE HEIGHT :
message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 50 + "px";

// ATTRIBUTES:
// THE DOM ELEMENTS ARE USED IN THE PROJECT WORKSPACE.
const logo = document.querySelector(".logo");
// STANDARD ATTRIBUTES , THAT'S WHY WE CAN GET IT DIRECTLY
console.log(logo.alt);
console.log(logo.src);

// NON-STANDARD ATTRIBUTES, CAN'T GET DIRECTLY.
console.log(logo.designer);
// INSTEAD , WE CAN GET IT USING:
console.log(logo.getAttribute("designer"));
// WE CAN ALSO SET ATTRIBUTES USING:
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector("class-name");

console.log(link.href);
console.log(link.getAttribute("href"));

// DATA ATTRIBUTES
// THE DATA SET ATTRIBUTE IS VERY USEFUL , WHEN INTERCTING WITH UI . IT STORES THE DATA IN THE UI. WE WILL USE IT LATER.
console.log(logo.dataset.versionNumber);

// CLASESS
logo.classList.add("class-name");
logo.classList.remove("class-name");
logo.classList.toggle("class-name");
logo.classList.contains("class-name");

// DON'T USE , BECAUSE IT WILL CHANGES/OVERRIDE ALL THE ELEMENTS CLASESS.
logo.className = "new-class-name";
