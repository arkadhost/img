
  function hideModel() {
    document.querySelector('.sa3').setAttribute("style", "display:none");
    document.querySelector('.sa1').setAttribute("style", "display:flex");
  }
  
  
   function showModel() {
          if(document.getElementById('user_input').value.length < 2 ){
            document.querySelector('.sa1').setAttribute("style", "display:none");
            document.querySelector('.sa3').setAttribute("style", "display:flex");
          }
          else{
              document.getElementById('u_name').innerHTML = document.getElementById('user_input').value;
              document.querySelector('.sa1').setAttribute("style", "display:none");
              document.querySelector('.sa2').setAttribute("style", "display:flex");
              document.getElementById('confetti').setAttribute("style", "display:block");
      }
  
      }		
