// const changeBgBtn = document.getElementById("change-bg");
const appendTextBtn = document.getElementById("input-callback-btn");

function appendText() {
  // Resolve the container element
  let parent;
  if (typeof container === "string") {
    parent = document.querySelector(container);
    if (!parent) {
      throw new Error(
        `appendText: no element found for selector "${container}"`,
      );
    }
  } else if (container instanceof HTMLElement) {
    parent = container;
  } else {
    throw new Error(
      "appendText: container must be a selector string or an HTMLElement",
    );
  }

  appendTextBtn.addEventListener("click", () => {
    // Clear any previous bubbles
    userContent.innerHTML = `${textContent}`;
  });
  appendTextBtn.addEventListener("click", () => {
    document
      .getElementById("input-callback")
      .addEventListener("click", function () {
        userContent.value = `${textContent}`;
        const q = document.createElement("input-callback");
        `${textContent}`;
        document.appendChild(q);
      });
  });
}
