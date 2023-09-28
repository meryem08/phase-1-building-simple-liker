document.addEventListener("DOMContentLoaded", () => {
  const emptyHeart = document.querySelector(".like-glyph");
  emptyHeart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        emptyHeart.classList.add("activated-heart");
        emptyHeart.classList.remove("like-glyph");
      })
      .catch(() => {
       errorModal.classList.remove("hidden");
       setTimeout(() => {
        errorModal.classList.add("hidden");
        }, 3000);
      });
  });
  
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("activated-heart")) {
      event.target.classList.remove("activated-heart");
      event.target.classList.add("like-glyph");
    }
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

