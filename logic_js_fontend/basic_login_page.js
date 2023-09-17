

// // check login or register
// document.addEventListener('DOMContentLoaded', function() {
//     var urlParams = new URLSearchParams(window.location.search);
//     var mode = urlParams.get('mode');

//     // var loginForm = document.getElementById('login-form');
//     // var registerForm = document.getElementById('register-form');
//     var registerContainer = document.querySelector('.register-container');
//     var loginContainer = document.querySelector('.login-container');
    

//     if (mode === 'login') {
//         loginContainer.classList.remove('hidden');
//         registerContainer.classList.add('hidden');
//     } else if (mode === 'register') {
//         loginContainer.classList.add('hidden');
//         registerContainer.classList.remove('hidden');
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var registerLink = document.getElementById('register-link');
//     var loginLink = document.getElementById('login-link');
//     var loginLink2 = document.getElementById('login-link2');
//     var fogotLink = document.querySelector("#forgot-link");
//     var password2 = document.querySelector("#password2-form");
//     var code = document.querySelector("#code-form");
//     var registerContainer = document.querySelector('.register-container');
//     var loginContainer = document.querySelector('.login-container');

//     var fogotpassword = document.querySelector(".fogotpassword-container")

//     // ẩn cái forgot password
//     fogotpassword.classList.add("hidden");
//     // ẩn cái password
//     // password2.classList.add("hidden")
//     // code.classList.add("hidden")
//     // registerContainer.classList.add('hidden');
  

//     fogotLink.addEventListener("click",()=>{
//       fogotpassword.classList.remove("hidden");
//       registerContainer.classList.add('hidden');
//       loginContainer.classList.add('hidden');
//     })
//     registerLink.addEventListener('click', function() {
//       registerContainer.classList.remove('hidden');
//       loginContainer.classList.add('hidden');
//       fogotpassword.classList.add("hidden");
//     });
  
//     loginLink.addEventListener('click', function() {
      
//     fogotpassword.classList.add("hidden");
//     registerContainer.classList.add('hidden');
//       loginContainer.classList.remove('hidden');
//     });
//     loginLink2.addEventListener('click', function() {
      
//       fogotpassword.classList.add("hidden");
//       registerContainer.classList.add('hidden');
//         loginContainer.classList.remove('hidden');
//       });
//   });

  

