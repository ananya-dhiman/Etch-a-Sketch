container=document.querySelector(".container");
newGridBtn=document.querySelector(".new-grid-btn");
let counter=0;
function rc(){
  var letters = '0123456789ABCDEF';
  var random_color = '#';
  for (var i = 0; i < 6; i++) {
    random_color += letters[Math.floor(Math.random() * 16)];
  }
  return random_color;

}
function createGrid(no) {
  container.innerHTML="";
  container.style.display = 'flex'; // Ensures the container uses flexbox
  container.style.flexWrap = 'wrap'; // Allows items to wrap in the container
  let w=parseInt(Math.ceil(960/no));
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
 
  return square;
}
function startover(numSquaresPerSide){
  createGrid(parseInt(numSquaresPerSide));
 
  container=document.querySelector(".container");
  const on = document.getElementsByClassName('square');

  Array.from(on).forEach(square=>{
    console.log(rc());
    square.dataset.number = 0;
    let maxNumber=10;
    
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', () => {
      let n= parseInt(square.dataset.number );
      
      if(n<maxNumber){
        n=n+1;
        square.dataset.number= n;
        counter=counter+1;
        console.log(counter);
        square.style.backgroundColor=rc();
        square.style.opacity=(n*(0.1));
      }
      else if(n=>maxNumber){
        square.style.backgroundColor="black";
      };

      
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
