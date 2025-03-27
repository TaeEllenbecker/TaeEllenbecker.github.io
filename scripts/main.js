const myHeading = document.querySelector("h1");

myHeading.addEventListener("click", () => {
  const mytextcontent = myHeading.textContent;
  if (mytextcontent === "dang") {
    myHeading.textContent = "dangerous";
  } else{
    myHeading.textContent = "dang";
  }
});

