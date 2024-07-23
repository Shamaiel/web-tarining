document.querySelector("form").addEventListener("submit", function(e){
 
e.preventDefault()
    
    let name =  document.getElementById("name").value

    let email =  document.getElementById("email").value

    let password =  document.getElementById("password").value
  
    let userArr =  JSON.parse(localStorage.getItem("users"))|| [];
   let userDetails = {
    name : name,
    email : email,
    password : password

   }
   userArr.push(userDetails)
   console.log(userDetails);
   localStorage.setItem("users", JSON.stringify(userArr));



})


//login function
document.getElementById("login-form").addEventListener("submit", function(e){
 
    e.preventDefault()
        
        let email = document.getElementById("email-login").value
        let password = document.getElementById("password-login").value

// email === email jo meri local storage meinn hia
      
      let savedData = JSON.parse(localStorage.getItem("users"))
      console.log(savedData);
     
     let isUser = savedData.find(user=> user.email === email && user.password === password);
     console.log(isUser);
     if(isUser){
        alert("Login Sucessfull")
     }else{
        alert("Something went wrong")

     }
    })
    




