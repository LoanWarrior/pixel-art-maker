document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM is on');

  let color = document.getElementsByClassName("container")[0];
  let pixel = document.getElementsByClassName("grid-container")[0];


  pixel.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.style.backgroundColor === "blue" || e.target.style.backgroundColor === "red" || e.target.style.backgroundColor === "pink"
    || e.target.style.backgroundColor === "black" || e.target.style.backgroundColor === "orange" || e.target.style.backgroundColor === "purple"){
      e.target.style.backgroundColor = "white"
    }
    else{
    e.target.style.backgroundColor = color
  }
  });


  color.addEventListener("click", function(e){
    e.preventDefault()
    console.log(e.target.id);
    color = e.target.id;
  });
});
