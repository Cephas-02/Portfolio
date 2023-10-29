var aboutModal = document.getElementById("about-modal");
var skillModal = document.getElementById("skill-modal");
var projectModal = document.getElementById("project-modal");
var contactModal = document.getElementById("contact-modal");

const aboutBtn = document.getElementById("about-btn");
const skillBtn = document.getElementById("skill-btn");
const projectBtn = document.getElementById("project-btn");
const contactBtn = document.getElementById("contact-btn");



var span = document.getElementsByClassName("close")[0];
var spans = document.getElementsByClassName("closes")[0];
var spa = document.getElementsByClassName("closed")[0];
var spaning = document.getElementsByClassName("closing")[0];


aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    aboutModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == aboutModal) {
      aboutModal.style.display = "none";
    }
  }




skillBtn.onclick = function() {
    skillModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  spans.onclick = function() {
    skillModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == skillModal) {
      skillModal.style.display = "none";
    }
  }




projectBtn.onclick = function() {
    projectModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  spa.onclick = function() {
    projectModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == projectModal) {
      projectModal.style.display = "none";
    }
  }




contactBtn.onclick = function() {
    contactModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  spaning.onclick = function() {
    contactModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  }

