
function containsPageContact(str) {
  return str.includes("pages/contact");
}

function containsPage(str) {
  return str.includes("pages");
}

document.addEventListener('DOMContentLoaded', function() {

  // session
    let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
    let login_username = sessionStorage.getItem('user_name_login')
    let login_email = sessionStorage.getItem('email_login')
    let avatar_img = sessionStorage.getItem("avatar_img")
  //element

    let is_logined = document.querySelector("#is_logined")
    let nameInput_contact_screen = document.querySelector('#nameInput_contact_screen');
    let emailInput_contact_screen = document.querySelector('#emailInput_contact_screen');

    
    if(avatar_img === null){
      avatar_img = "assets/images/icon_persion.jpg"
    }


    let isLogined = false;
    if (login_session_token){
        console.log("có token")
        is_logined.innerHTML = 
        `
        <div id="is_logined_display" style="display: flex; align-items: center;justify-content: right;cursor: pointer;">
          <img src=${avatar_img} alt="" style="height: 20px;" id="avata_show">
          <p style="margin-left: 10px;color: #fa9e1b;">${login_username}</p>
          <div id="submenu_login">
          <ul >
            <li id="user_info">Thông tin người dùng</li>
            <li id="my_booked_tour">Tour của tôi</li>
            <li id="log_out">Đăng Xuất</li>
          </ul>
    </div>
        </div>
        `
        
        isLogined = true;

    }
    else{
        console.log("ko có token")
        is_logined.innerHTML = 
        `
        <a href="#" id="login_id">
        <li>Login</li>
      </a>
      <a href="#">
        <li>|</li>
      </a>
      <a href="#" id="register_id">
        <li>Register</li>
      </a>
        `
    }

    // logic in contain page 
    let currentURL = window.location.href;
    if(containsPageContact(currentURL)){
      if(isLogined){
        nameInput_contact_screen.value = login_username;
        emailInput_contact_screen.value = login_email;
      }
    }

    
    // display user
    let is_logined_display = document.querySelector("#is_logined_display");
    is_logined_display.addEventListener("click",()=>{
      // alert("show logined")
      let submenu = document.querySelector('#submenu_login');
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      
      // submenu.classList.toggle('active');
    })

    // log out
    log_out = document.querySelector("#log_out");
    log_out.addEventListener("click",()=>{
      sessionStorage.removeItem('tokek_for_login_session');
      sessionStorage.removeItem('user_name_login');
      sessionStorage.removeItem('email_login');
      sessionStorage.removeItem('avatar_img');

      location.reload();
    });

    // user info
    let user_info = document.querySelector("#user_info");
    user_info.addEventListener("click",()=>{
    let currentURL = window.location.href;
    if(containsPage(currentURL)){
      window.location.href = "user_info.html"
    }else{
      window.location.href = "pages/user_info.html"
    }
    });

    // my booked tour
    let my_booked_tour = document.querySelector("#my_booked_tour");
    my_booked_tour.addEventListener("click",()=>{
    let currentURL = window.location.href;
    if(containsPage(currentURL)){
      window.location.href = "my_booked_tour.html"
    }else{
      window.location.href = "pages/my_booked_tour.html"
    }
    });
    
});
