document.addEventListener("DOMContentLoaded", () => {
  // Element references
  const changeBgBtn = document.getElementById("change-bg");
  const appendTextBtn = document.getElementById("append-text");
  const showBubbleBtn = document.getElementById("show-bubble");
  const showImageBtn = document.getElementById("showImage");
  const introSection = document.getElementById("intro");
  const bubbleContainer = document.getElementById("bubble-container");
  const userInput = document.getElementById("user-input");
  const inputCallback = document.getElementById("input-callback");
  const inputCallbackBtn = document.getElementById("input-callback-btn");

  // Ensure required elements exist
  [
    ["change-bg", changeBgBtn],
    ["append-text", appendTextBtn],
    ["show-bubble", showBubbleBtn],
    ["showImage", showImageBtn],
    ["intro", introSection],
    ["bubble-container", bubbleContainer],
    ["user-input", userInput],
    ["input-callback", inputCallback],
    ["input-callback-btn", inputCallbackBtn],
  ].forEach(([name, el]) => {
    if (!el) {
      console.error(`Missing required element: "${name}"`);
    }
  });
  if (
    !changeBgBtn ||
    !appendTextBtn ||
    !showBubbleBtn ||
    !showImageBtn ||
    !introSection ||
    !bubbleContainer ||
    !userInput ||
    !inputCallbackBtn
  ) {
    console.error("One or more DOM elements are missing. Aborting script.");
    return;
  }

  // Helper: Random hex color
  function getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }

  // Append static paragraph
  appendTextBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "This text was appended dynamically via JavaScript!";
    introSection.appendChild(p);
  });

  // Toggle bg-image visibility
  const bgImage = document.getElementById("bg-image");
  let imageVisible = false;
  // Remove the nested event listener since it's already inside DOMContentLoaded
  // and fix the function syntax
  // imageVisible = true;
  bgImage.style.display = "none";
  showImageBtn.addEventListener("click", () => {
    imageVisible = !imageVisible;
    bgImage.style.display = imageVisible ? "block" : "none";
    showImageBtn.textContent = imageVisible ? "Hide Image" : "Show Image";
  });
  // Bubble letters configuration
  const wordToDisplay = "Bubbles";
  const letterColors = [
    "hsl(0, 100%, 63%)",
    "hsl(40, 100%, 60%)",
    "hsl(75, 100%, 40%)",
    "hsl(196, 77%, 55%)",
    "hsl(280, 50%, 60%)",
  ];

  // Render bubble letters
  showBubbleBtn.addEventListener("click", () => {
    bubbleContainer.innerHTML = "";
    [...wordToDisplay].forEach((char, idx) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.margin = "0 4px";
      span.style.padding = "12px";
      span.style.borderRadius = "50%";
      span.style.backgroundColor = letterColors[idx % letterColors.length];
      span.style.color = "#fff";
      span.style.fontWeight = "bold";
      span.style.fontSize = "1.2rem";
      bubbleContainer.appendChild(span);
    });
  });

  // Change background color
  changeBgBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });

  const row = document.getElementById("row");
  const column = document.getElementById("column");
  const nav = document.getElementsByTagName("nav");
  let toggle;
  if (
    row.addEventListener("click", () => {
      column.innerHTML = "";
      nav.innerHTML = "column";
      document.body.display = "webkit-writing-mode";
      ("vertical-lr");
      row.appendChild(column);
      console.log(column);
    })
  );
  else
    column.addEventListener("click", () => {
      row.innnerHTML = "";
      nav.innerHTML = "row";
      document.body.display = "webkit-writing-mode";
      ("horizontal-tb");
      column.appendChild(row);
      console.log(row);
    });

  // Handle user input callback
  inputCallbackBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    inputCallback.textContent = text;
    userInput.value = "";
  });
});
