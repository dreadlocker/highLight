window.onload = function () {
  // version 2
  const allAnchors = document.querySelectorAll("a");

  function highlightMe(e) {
    this.firstElementChild.classList.add("highlight");
  }

  function makeMeNormal() {
    this.firstElementChild.classList.remove("highlight");
  }

  allAnchors.forEach(anchor => {
    anchor.addEventListener("mouseenter", highlightMe);
    anchor.addEventListener("mouseleave", makeMeNormal);
  });

  // // version 1
  // const allAnchors = document.querySelectorAll("a");

  // const highlight = document.createElement("span");
  // highlight.classList.add("highlight");
  // document.body.append(highlight);

  // function highlightMe() {
  //   const linkCoords = this.getBoundingClientRect();
  //   const coords = {
  //     width: linkCoords.width,
  //     height: linkCoords.height,
  //     top: linkCoords.top + window.scrollY,
  //     left: linkCoords.left + window.scrollX
  //   };

  //   highlight.style.width = `${coords.width}px`;
  //   highlight.style.height = `${coords.height}px`;
  //   highlight.style.top = `${coords.top}px`;
  //   highlight.style.left = `${coords.left}px`;
  // }

  // allAnchors.forEach(anchor => {
  //   anchor.addEventListener("mouseenter", highlightMe);
  // });
}