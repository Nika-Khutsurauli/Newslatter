
    const email = document.querySelector('#email');
    const button = document.querySelector('#validate');
    const error = document.querySelector('#error');
    const form_fields = document.querySelector('#form_fields');
    const success = document.querySelector('#success');
    const dismiss = document.querySelector('#dismiss');

    button.addEventListener("click", (e) => {
        e.preventDefault();
        if(validateEmail(email.value)){
            form_fields.classList.remove('d-block');
            form_fields.classList.add('d-none');
            success.classList.remove('d-none');
            success.classList.add('d-block');
        }  
        else{
            error.style.color = "red";
            error.innerText = "Valid email required";
            email.style.borderColor = "red";
        }
    })
    const validateEmail= (email) => {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    function animation() {
        
        success.classList.add("animate");

        setTimeout(function() {
          success.classList.remove("animate");
        }, 3000); // 500 is the same time as the CSS animation
        
      }
     
    function animationDissmis() {
        
        dismiss.classList.add("active");
        dismiss.classList.remove("button-dismiss");
        success.classList.add("animate");
       
        setTimeout(function() {
            success.classList.remove("animate");
        }, 3000); // 500 is the same time as the CSS animation
        
      }