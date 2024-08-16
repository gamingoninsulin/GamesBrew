function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Load navbar and footer
loadHTML("navbar-container", "./data/html/navbar.html");
loadHTML("footer-container", "./data/html/footer.html");
loadHTML("navbar-container2", "../data/html/navbar2.html");
loadHTML("footer-container2", "../data/html/footer2.html");
