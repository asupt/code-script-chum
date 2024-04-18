// localStorage.clear();

const pageType = document.querySelector(".title").textContent;
let searchTerms;

// youtube api random video modified from cmurphy's guide (check readme)
// conditional to see which page we're on:
if (pageType == "HTML") {
  searchTerms = ["html%20beginner","html%20linking", "html%20header", "html%20images", "html%20images%20tags%20attributes", "html%20block%20inline", "html%20form", "html%20classes", "semantic%20html", "html%20link%20stylesheets"];
}

else if (pageType == "CSS") {
  searchTerms = ["css%20how","css%20flexbox", "css%20elements%20and%20ids", "css%20pseudo", "css%20box%20model", "css%20layout", "css%20selectors", "css%20practices", "css%20grids", "targeting%20css"];
}

else {
  searchTerms = ["javascript%20beginner","javascript%20data%20types", "javascript%20objects", "javascript%20arrays", "javascript%20logic", "javascript%20conditionals", "javascript%20functions", "javascript%20loops", "javascript%20localstorage", "javascript%20api%20beginners"];
}

const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
const YOUTUBE_API_KEY = "AIzaSyA7vm3AcQsqgmrz8NUd5H4yOMMhpOaz3fU";
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;


// declare constants
let feedback = [];
const submitButton = document.querySelector("#submitButton")
const feedbackBox = document.querySelector("#feedbackBox")

//////////////////////////////////////

if (localStorage.getItem("feedback") != null) {
    feedback = JSON.parse(localStorage.getItem("feedback"));
    console.log(JSON.parse(localStorage.getItem("feedback")));
};



// console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.items[0].id.videoId);
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});

// Log feedback form user input
submitButton.addEventListener('click', function(event) {
    event.preventDefault;
    submitFeedback();
  });

// functions
function submitFeedback() {
    feedback.push(feedbackBox.value);
    console.log(feedback);
    localStorage.setItem("feedback", JSON.stringify(feedback));
}


// Modal modified from w3schoolds (check readme)

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// click on submit button to close form
submitButton.onclick = function () {
    modal.style.display = "none";
  }