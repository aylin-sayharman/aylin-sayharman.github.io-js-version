//BODY STRUCTURE

var header = document.createElement("header");
var headerText = document.createTextNode("Hey, I am Aylin");
header.appendChild(headerText);
document.body.appendChild(header);


var mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);

var p1 = document.createElement("p");
var p1Text = document.createTextNode("By day, I am a frontend developer, a camper at freeCodeCamp and a challenger of 100DaysOfCode with professional experience on business analysis and software testing. By night, I become a pumpkin.");
mainDiv.appendChild(p1);
p1.appendChild(p1Text);

var p2 = document.createElement("p");
p2.innerHTML = "I also translate content from English to Turkish at <a class='innerLink' href='https://www.coursera.org/' target='_blank'>Coursera</a> and <a class='innerLink' href='https://www.ted.com/' target='_blank'>Ted Conferences</a> as a volunteer.";
mainDiv.appendChild(p2);

var h3 = document.createElement("h3");
var h3Text = document.createTextNode("Let's work together!");
mainDiv.appendChild(h3);
h3.appendChild(h3Text);

var footer = document.createElement("footer");
document.body.appendChild(footer);

var a1 = document.createElement("a");
a1.href = "https://www.linkedin.com/in/aylin-sayharman/";
a1.setAttribute("target", "_blank");
a1.setAttribute("class", "contact-details");
footer.appendChild(a1);

var img1 = document.createElement("img");
img1.src = "linkedin.png";
img1.setAttribute("width", "22");
img1.setAttribute("height", "20");
a1.appendChild(img1);

var a2 = document.createElement("a");
a2.href = "https://github.com/aylin-sayharman";
a2.setAttribute("target", "_blank");
a2.setAttribute("class", "contact-details");
footer.appendChild(a2);

var img2 = document.createElement("img");
img2.src = "github.png";
img2.setAttribute("width", "22");
img2.setAttribute("height", "20");
a2.appendChild(img2);

var a3 = document.createElement("a");
a3.href = "https://twitter.com/disi_dev";
a3.setAttribute("target", "_blank");
a3.setAttribute("class", "contact-details");
footer.appendChild(a3);

var img3 = document.createElement("img");
img3.src = "twitter.png";
img3.setAttribute("width", "22");
img3.setAttribute("height", "20");
a3.appendChild(img3);

var a4 = document.createElement("a");
a4.href = "https://medium.com/@aylin.sayharman";
a4.setAttribute("target", "_blank");
a4.setAttribute("class", "contact-details");
footer.appendChild(a4);

var img4 = document.createElement("img");
img4.src = "medium.png";
img4.setAttribute("width", "22");
img4.setAttribute("height", "20");
a4.appendChild(img4);

//STYLING

document.body.style = "background: url('/pawel-czerwinski.jpg'); background-repeat: no-repeat;background-size: cover; color: #333; font-family: 'Roboto Mono', monospace; text-align:center; text-decoration: none";

header.style = "font-size: 38px; margin-top: 140px; font-weight: bold";

mainDiv.style = "font-size: 25px; width: 70%; margin: 50px auto 20px; color: #333; line-height: 1.5; text-align: center";

footer.style = "display: flex; justify-content: center";

var arr = [a1, a2, a3, a4];
for (let i = 0; i < arr.length; i++) {
    arr[i].style = "background-color: rgba(0, 0, 0, .4); width: 50px; height: 50px; border-radius: 50%; text-decoration: none; margin: 50px; display: flex; justify-content: center;align-items: center"
};

for (let j = 0; j < arr.length; j++) {
    arr[j].addEventListener("mouseenter", function() {
        arr[j].style.boxShadow = "0 0 0 10px rgba(0, 0, 0, .2)";
        arr[j].style.backgroundColor = "rgba(0, 0, 0, .6)";
    }, false);

    arr[j].addEventListener("mouseleave", function() {
        arr[j].style.boxShadow = "none";
        arr[j].style.backgroundColor = "rgba(0, 0, 0, .4)";
    }, false);
};

let pLinks = document.getElementsByClassName("innerLink");
for (let k = 0; k < pLinks.length; k++) {
    pLinks[k].style = "text-decoration: none; color: #333";
    pLinks[k].addEventListener("mouseenter", function() {
        pLinks[k].style.color = "#fff";
        pLinks[k].style.background = "#333";
        pLinks[k].style.textDecoration = "none";
    }, false);

    pLinks[k].addEventListener("mouseleave", function() {
        pLinks[k].style.color = "#333";
        pLinks[k].style.background = "none";
        pLinks[k].style.textDecoration = "none";
    }, false);
}