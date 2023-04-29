let display =""; //display
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        if(e.target.innerHTML =='='){
            display = eval(display);
            document.querySelector('input').value = display;
        }
        else if(e.target.innerHTML =='AC'){
            display = ""
            document.querySelector('input').value = display;
        }
        else if(e.target.innerHTML =='DEL'){
            display =display.slice(0,-1);
            document.querySelector('input').value = display;
        }
        
        else{
            console.log(e.target)
            display = display + e.target.innerHTML;
            document.querySelector('input').value = display;
        }
    })
})
deleteButton.addEventListener('click', function() {
    // Remove the last character or element from the current input
    DEL = DEL.slice(0, -1);
    // Update the display or output with the new input
    updateDisplay(DEL);
  });
 