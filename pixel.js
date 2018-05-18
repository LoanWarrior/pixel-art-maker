document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM is on');

  let color = document.getElementsByClassName("container")[0];
  let pixel = document.getElementsByClassName("grid-container")[0];


  pixel.addEventListener("click", function(e){
    console.log("clicked pix");
    e.target.style.backgroundColor = color

  });


  color.addEventListener("click", function(e){
    console.log(e.target.id);
    color = e.target.id;
  });
});
