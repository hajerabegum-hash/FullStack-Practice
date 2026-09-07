//JavaScript Day 10: The Document Object Model (DOM)

// The DOM makes your webpage interactive and dynamic!
// console.log(document); // Shows your entire HTML page

//2. The document Object

// The document object is your entry point to the DOM. It represents the entire webpage and gives you access to
// everything on it.

//Two Ways to Inspect the Document:

// Method 1: See it as HTML
// console.log(document);
// // Output: Shows HTML tags like <html>, <body>, <h1>...

// // Method 2: See it as a JavaScript object
// console.dir(document);
// Output: Shows all properties and methods you can use;

// 3. Selecting Elements by ID

// IDs are unique identifiers for HTML elements. Think of them like social security numbers—each element can
// only have one ID, and no two elements should share the same ID.

// Syntax:
// document.getElementById("id_name");

//Example 1: Select the Main Image

// let mainImage = document.getElementById("mainImg");
// console.log(mainImage);
// Output: <img src="..." id="mainImg">

// Example 2: Select the Heading

// let heading = document.getElementById("heading1");
// console.log(heading);
// Output: <h1 id="heading1">The Solar System</h1>

// Example 3: Check if Element Exists

// let element = document.getElementById("nonexistent");
// console.log(element);

//4. Selecting Elements by Class Name
// Classes are used when you want to select multiple elements that share the same styling or category.

// Syntax:

// let className = document.getElementsByClassName("class_name");

//Example 1: Select All Small Images

// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages);
// // Output: HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
// console.log(oldImages.length);
//output: 3

//Example 2: Access Individual Elements

// let oldImages = document.getElementsByClassName("old_image");
// console.log(oldImages[0]); //output:  first image
// console.log(oldImages[1]); //output: second image
// console.log(oldImages[2]); //output: third image

// Example 3: Loop Through the Collection

// let oldImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImages.length; i++) {
// console.log(oldImages[i]);
// }
// Prints each image one by one

//Example 4: Select Box Links

// let boxLinks = document.getElementsByClassName("boxLink");
// console.log(boxLinks);
// Output: HTMLCollection of all elements with class "boxLink"

//5. Selecting Elements by Tag Name

// This method selects all elements of a specific HTML tag type (like <p> , <h1> , <a> ).

// Syntax:

// document.getElementsByTagName("tag_Name");

// Example 1: Select All Paragraphs

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// Output: HTMLCollection(2) - both paragraph elements

// Example 2: Count Elements

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length);
// //output: 2

// Example 3: Select All Links

// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);
// // Output: HTMLCollection of all <a> tags on the page
// console.log(allLinks.length);
// //output: Total number of links

// Example 4: Select All Images

// let allImages = document.getElementsByTagName("img");
// console.log(allImages);
// // Output: HTMLCollection(4) - includes mainImg and 3 oldImg
// console.log(allImages.length);
// //output: Total number of images

// 6. Query Selectors (The Modern Way!)
// querySelector is the most flexible and modern way to select elements. It uses CSS selector syntax, which you
// might already know from styling!

// Two Methods:
// querySelector() - Returns the first matching element
// querySelectorAll() - Returns all matching elements (NodeList)

// Syntax Rules:
// Use # for IDs: #mainImg
// Use . for classes: .oldImg
// Use tag names directly: p , h1 , div

// Example 1: Select by ID

// let heading = document.querySelector("#heading1");
// console.log(heading);
// Output: <h1 id="heading1">The Solar System</h1>

// Example 2: Select by Class (First Match Only)

// let firstOldImage = document.querySelector(".oldImg");
// console.log(firstOldImage);
// Output: Only the FIRST image with class "oldImg";

//Example 3: Select All Elements with querySelectorAll

// let allOldImages = document.querySelectorAll(".oldImg");
// console.log(allOldImages);
// Output: NodeList(3) - all three images

//Example 4: Select by Tag

// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph);
// Output: The first <p> element

//Example 5: Complex Selectors (Links Inside a Specific Div)

// let boxLinks = document.querySelectorAll(".box a");
// console.log(boxLinks);
// // Output: NodeList  of all <a> tags INSIDE the .box div

//7. Reading and Changing Content
// Once you select an element, you'll want to read or change what's inside it. JavaScript gives you three
// properties for this.
// The Three Properties:
//1. innerText
//2. textContent
//3. innerHTML

//8. innerText
// innerText shows only the text that is visible to the user. It respects CSS properties like display: none

//Example 1: Get Visible Text

// let para = document.querySelector("#description");
// console.log(para.innerText);
// Output: "The Solar System formed from a dense region..."
// (Clean, formatted text)

// Example 2: Change Heading Text

// let heading = document.querySelector("#heading1");
// heading.innerText = "Our Amazing Solar System";
// // The heading on the page changes immediately!

// Example 3: Get Text from Multiple Elements

// let firstPara = document.querySelector("p");
// console.log(firstPara.innerText);
// Output: Clean paragraph text without HTML tags

//9. textContent
// textContent shows all text inside an element, including hidden content and extra whitespace, exactly as written
// in the HTML source.

//Example 1: Get All Text Content

// let para = document.querySelector("#description");
// console.log(para.textContent);
// Output: All text including any hidden elements and spacing

//Example 2: Change Text Content

// let heading = document.querySelector("h1");
// heading.textContent = "Welcome to Space!";
// // Updates the heading

//Example 3: Compare with innerText

// let element = document.querySelector("#description");
// console.log(element.innerText);
// //output: Formatted, visible only
// console.log(element.textContent);
// output: Raw, includes everything

//10. innerHTML
// innerHTML shows the HTML markup inside an element. This includes all tags like <b> , <a> , <span> , etc.

// let para = document.querySelector("p");
// console.log(para.innerHTML);
// Output: "<b>The Solar System</b> is the gravitationally
// bound system of the <a href='...'>Sun</a>..."

//Example 2: Add HTML Tags

// let heading = document.querySelector("#heading1");
// heading.innerHTML = "<u>The Solar System</u>";
//output: The heading is now underlined!

//Example 3: Add Complex HTML

// let heading = document.querySelector("h1");
// heading.innerHTML = "The <span style='color: gold;'>Solar</span> System";
// "Solar" will be displayed in gold color

//Example 4: Read Links from Paragraph

// let para = document.querySelector("p");
// console.log(para.innerHTML);
// You can see all the <a> tags with their href attributes
