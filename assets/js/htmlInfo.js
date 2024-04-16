// localStorage.clear();

// youtube api random video modified from cmurphy's guide (check readme)
const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
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