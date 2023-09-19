document.addEventListener('DOMContentLoaded', function() {
    let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
    let login_username = sessionStorage.getItem('user_name_login')
    let is_logined = document.querySelector("#is_logined")
    if (login_session_token){
        console.log("có token")
        is_logined.innerHTML = 
        `
        <div id="is_logined_display" style="display: flex; align-items: center;justify-content: right;cursor: pointer;">
          <img src="/assets/images/icon_persion.jpg" alt="" style="height: 20px;">
          <p style="margin-left: 10px;color: #fa9e1b;">${login_username}</p>
        </div>
        `
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
    
});
