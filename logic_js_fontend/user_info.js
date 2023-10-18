url_get_user_infor = "http://localhost:8080/api/get_user_infor";
url_edit_user_infor = "http://localhost:8080/api/edit_user_infor";

document.addEventListener('DOMContentLoaded', async function() {
    // time
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

    let today = new Date();
    let eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(today.getFullYear() - 18);

    let oneHundredFiftyYearsAgo = new Date();
    oneHundredFiftyYearsAgo.setFullYear(today.getFullYear() - 150);

    // session
    let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
    let login_username = sessionStorage.getItem('user_name_login')
    let login_email = sessionStorage.getItem('email_login')

    // container
    let container = document.querySelector("#container")

    data1 = {
        name:login_username,
        email:login_email
    }

    response1 = await send_data_to_server_get_user_info(data1)
    if(response1.status){
        message = response1.message
        username_ = message.username
        avatar_img_ = message.avatar_img
        birthday_ = message.birthday
        email_ = message.email
        password_ = message.password
        createdTime_ = message.createdTime


        // logic avatar
        if(avatar_img_ === null){
            avatar_img_ = "../assets/images/icon_persion.jpg"
        }
        
        container.innerHTML = `
        <div id="container_left">
            <div id="img_avata">
                <img src=${avatar_img_} alt="" id="img_avata_show">
            </div>
        
            
            <div id="change_avatar">
            
            <input type="file" id="fileInput" style="display: none;">
            <button onclick="chooseFileAndConvert()">change your avatar</button>
            </div>
        </div>

        <div id="container_right">
            <div id="email_text"><h3>Email của bạn : ${email_}</h3></div>
            <div ><h3>Tên của bạn :</h3><input type="text" id="username_text"></div>
            <div ><h3>Ngày sinh của bạn :</h3><input type="date" name="dateInput" id="birthday_text"></div>
            <div ><h3>Mật khẩu của bạn :</h3><input type="password" id="password_text"><label for="showPassword"><input type="checkbox" id="showPassword">Hiển thị mật khẩu</label></div>

            <div id="created_time_text"><h3>Bạn tạo tài khoản lúc :${createdTime_}</h3></div>
            <div id="submit_button"><input type="button" value="submit"></div>
            <div id="error_edit_user"></div>
        </div>
        
        `
        let username_text = document.querySelector("#username_text");
        username_text.value = username_;
        let birthday_text = document.querySelector("#birthday_text");
        birthday_text.value = birthday_;
        let password_text = document.querySelector("#password_text");
        password_text.value = password_;
        let showPasswordCheckbox = document.querySelector('#showPassword');
        showPasswordCheckbox.addEventListener("click", function() {
          if (password_text.type === "password") {
            password_text.type = 'text';
            // alert("abc")
            // console.log("abc")
          } else {
            password_text.type = 'password';
          }
      });

      // submit btn
      let submit_button = document.querySelector("#submit_button");
      submit_button.addEventListener("click", async ()=>{
        // alert("check ok")
        let username_text = document.querySelector("#username_text");
        let birthday_text = document.querySelector("#birthday_text");
        let password_text = document.querySelector("#password_text");
        let img_avata_show = document.querySelector("#img_avata_show")
        let error_edit_user = document.querySelector("#error_edit_user")

        if(username_text.value != username_){
          console.log("name change")
          console.log(`name = ${username_text.value}`)
          if (username_text.value.length < 6) {
            error_edit_user.innerText = 'Tên đăng nhập phải có ít nhất 6 ký tự.';
            return;
          }
        }
        if(birthday_text.value != birthday_){
          console.log("date change")
          console.log(`${birthday_text.value} vs ${birthday_}`)
          // Chuyển đổi giá trị ngày nhập vào thành đối tượng Date
          let selectedDate = new Date(birthday_text.value);
          if (selectedDate >= eighteenYearsAgo ) {
            error_edit_user.innerText = "Bạn chưa đủ tuổi ."
            return
          }
          else if(selectedDate <= oneHundredFiftyYearsAgo){
            error_edit_user.innerText = "Bạn quá già rồi ."
            return
          }
          // if (selectedDate <= tomorrow ) {
          //   // console.log("Ngày nhập vào phải là ngày trong tương lai gần");
          //   error_edit_user.innerText = "Ngày nhập vào phải là ngày trong tương lai gần"
          //   return
            
          // } else if (selectedDate >= oneYearLater) {
          //   error_edit_user.innerText = "Ngày nhập vào phải là ngày trong tương lai gần"
          //   return
          // }
        }
        if(password_text.value != password_){
          console.log("pass change")
          console.log(`password = ${password_text.value}`)
          if (password_text.value.length < 6 || !/\d/.test(password_text.value) || !/[a-zA-Z]/.test(password_text.value)) {
            error_edit_user.innerText = 'Mật khẩu phải có ít nhất 6 ký tự và bao gồm cả chữ và số.';
            return;
          }
        }
        if(img_avata_show.src != avatar_img_){
          console.log("avata change")
          console.log(`${img_avata_show.src} vs ${avatar_img_}`)
        }
        error_edit_user.innerText = ''; 

        data3 = {
          email:login_email,
          username:username_text.value,
          password:password_text.value,
          birthday:birthday_text.value,
          avatar_img:img_avata_show.src
        }
        console.log(data3)
        b = await send_data_to_server_edit_user_info(data3)
        if(b.status){
          alert(b.message)
          sessionStorage.setItem("avatar_img",img_avata_show.src)
        }else{
          alert(b.message)
        }
      })
    }

});



// change img avata
function chooseFileAndConvert() {
  var fileInput = document.getElementById('fileInput');
  fileInput.click();
  fileInput.addEventListener('change', convertAndDisplayBase64);
}

function convertAndDisplayBase64(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    var base64String = reader.result;
    // console.log("Ảnh dạng base64: " + base64String);
    let img_avata_show = document.querySelector("#img_avata_show");
    img_avata_show.src = base64String
    // Thực hiện hành động khác với chuỗi base64 ở đây
    // Ví dụ: hiển thị ảnh trên trang web
  }

  reader.readAsDataURL(file);
}

let send_data_to_server_get_user_info = async (data) => {
    // Ngăn chặn hành vi mặc định của form submit
    // event.preventDefault();
  
    // Tạo các tùy chọn cho yêu cầu POST
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    };
  
    // Gửi yêu cầu POST đến backend
    return fetch(url_get_user_infor, requestOptions)
      .then(response => response.text())
      .then(data => {
        // Xử lý kết quả trả về từ server
        try {
          const parsedData = JSON.parse(data);
          a = parsedData.response;
          console.log(a);
          console.log(typeof(a))
          console.log(a.message)
          return a

          // Thực hiện các xử lý khác với dữ liệu ở đây
        } catch (error) {
          console.error("Lỗi khi phân tích dữ liệu JSON: ", error);
        }
      })
      .catch(error => {
        console.error("Lỗi khi gửi yêu cầu: ", error);
      });
  };

  let send_data_to_server_edit_user_info = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    };
    // Gửi yêu cầu POST đến backend
    return fetch(url_edit_user_infor, requestOptions)
      .then(response => response.text())
      .then(data => {
        // Xử lý kết quả trả về từ server
        try {
          const parsedData = JSON.parse(data);
          a = parsedData.response;
          console.log(a);
          console.log(typeof(a))
          console.log(a.message)
          return a
        } catch (error) {
          console.error("Lỗi khi phân tích dữ liệu JSON: ", error);
        }
      })
      .catch(error => {
        console.error("Lỗi khi gửi yêu cầu: ", error);
      });
  };