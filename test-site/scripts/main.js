const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gudetama.png") {
    myImage.setAttribute("src", "images/gudetama2.png");
  } else {
    myImage.setAttribute("src", "images/gudetama.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myname){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Gudetama is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Gudetama is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

