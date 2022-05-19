// let myForm=document.querySelector(".My-form")
// let mybtn=document.querySelector(".mybtn")

// mybtn.addEventListener("click", function () {
    // let inform=document.createAttribute("p")
    // inform.innerText=myForm.value;
    // document.getElementsByClassName(".My-form").style.display = "none";
    // })
    // myForm.addEventListener('change', () => {
    //     if (myForm.value === 'yes') {
    //       document.getElementsByClassName(".My-form").style.display = "none"; 
    //     } 
        
    //   });
    function myFunction() {
        let mydiv=document.querySelector(".container")
        if (mydiv.style.display === 'none') {
            mydiv.style.display = 'block';
        } else {
            mydiv.style.display = 'none';
        }
      }
    