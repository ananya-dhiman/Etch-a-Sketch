container=document.querySelector(".container");
newGridBtn=document.querySelector(".new-grid-btn");

function createGrid(no) {
  container.innerHTML="";
  container.style.display = 'flex'; // Ensures the container uses flexbox
  container.style.flexWrap = 'wrap'; // Allows items to wrap in the container
  let w=parseInt(960/no);
  console.log(w);
  for (let i = 0; i < no * no; i++) {
    
  
    container.appendChild(createSquare(w));
  }
}
function createSquare(w) {

  const square = document.createElement('div');
  
  square.style.width=w + "px";
  square.style.height=w + "px";
  square.classList.add('square');
  console.log("Hello");
  return square;
}
function startover(numSquaresPerSide){
  createGrid(parseInt(numSquaresPerSide));
  console.log("Hello");
  container=document.querySelector(".container");
  const on = document.getElementsByClassName('square');
  Array.from(on).forEach(square=>{
    square.style.backgroundColor = 'aqua';
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor='blue';
  
})
});
  

};
newGridBtn.addEventListener('click', function() {
  const numSquaresPerSide = prompt('Enter the number of squares per side for the new grid:');
  if (numSquaresPerSide !== null && !isNaN(numSquaresPerSide) && numSquaresPerSide > 0 && numSquaresPerSide<100) {
    startover(numSquaresPerSide);
    
  } else {
      alert('Please enter a valid number greater than 0 and less than 100.');
  }
});
