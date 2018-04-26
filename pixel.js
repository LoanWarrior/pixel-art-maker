document.addEventListener("DOMContentLoaded", function() {
  let color;
  console.log('DOM is on');
  let pixel = document.getElementsByClassName("grid-container")[0];


  pixel.addEventListener("click", function(e){
    e.target.style.backgroundColor = color

  });

  let pallette = document.getElementsByClassName("pallette")[0];


  pallette.addEventListener("click", function(e){
    console.log(e.target.id);
    color = e.target.id
  })
});
