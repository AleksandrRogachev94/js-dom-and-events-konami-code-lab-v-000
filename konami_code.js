const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0
  document.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail)
    if(key === code[i]){
      i++
      if(code[i] === code.length){
        alert("You did it!")
        i = 0
      }
    } else{
      i = 0
    }
  })
