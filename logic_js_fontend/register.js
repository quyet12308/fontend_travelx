url_register_basic = "http://localhost:8080/api/register_basic"
url_register_confirm = "http://localhost:8080/api/register_confirm_code_email"


document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('register-form');
    var registerError = document.getElementById('register-error');
    let login_link = document.querySelector("#login-link");

    //chuyển trang login
    login_link.addEventListener("click",()=>{
      window.location.href = "login.html"
    })

    // xử lý logic đăng ký
    registerForm.addEventListener('submit',async function(event)  {
        event.preventDefault();
    
        var username = document.getElementById('username1').value;
        var email = document.getElementById('email1').value;
        var password = document.getElementById('password1').value;
        var password2 = document.getElementById('password2').value;
    
        if (username.length < 6) {
          registerError.innerText = 'Tên đăng ký phải có ít nhất 6 ký tự.';
          return;
        }
    
        if (!/\S+@\S+\.\S+/.test(email)) {
          registerError.innerText = 'Vui lòng nhập đúng định dạng email.';
          return;
        }
    
        if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
          registerError.innerText = 'Mật khẩu phải có ít nhất 6 ký tự và bao gồm cả chữ và số.';
          return;
        }
        if(password != password2){
          registerError.innerText = 'Mật khẩu nhập lại không đúng';
          return;
        }
    
        registerError.innerText = ''; // Xóa thông báo nếu điều kiện đúng
        // Tiếp tục xử lý đăng k
        let data = {
          name: username,
          pass: password,
          email:email
        }
        let datacovertojson = createDataObject(data)
        // alert("register")
      console.log(datacovertojson)
      console.log(typeof datacovertojson)
      a = await send_data_to_server_register(datacovertojson,url_register_basic)
      // console.log(a.status)
      console.log(a)
      if (a.status){
        alert(a.message)
        let code = prompt("Vui lòng nhập code đã được gửi đến email của bạn đã đăng ký , chú ý code chỉ có giá trị trong thời gian 3 phút")
        let data2 ={
          name: username,
          pass: password,
          email:email,
          code: code
        }
        let data2_cover_to_json = createDataObject(data2)
        let check_code_from_server = await send_data_to_server_register(data2_cover_to_json,url_register_confirm)
        if(check_code_from_server.status){
          alert("Bạn đăng ký thành công")
          window.location.href = "/pages/login.html"
        }
        else{
          alert("Bạn chưa đăng ký thành công")
        }
      }
      else{
        alert(a.message)
      }
    });
})

function createDataObject(data) {
  return JSON.stringify(data);
}
async function send_data_to_server_register (data,url) {
      // Ngăn chặn hành vi mặc định của form submit
      // event.preventDefault();// thằng này gây ra lỗi ko hoạt động của post thứ 2
    
      // Tạo các tùy chọn cho yêu cầu POST
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data 
      };
    
      // Gửi yêu cầu POST đến backend
      return fetch(url, requestOptions)// test thử xem nó có trả về lỗi undefined
        .then(response => response.text())
        .then(data =>  {
          // Xử lý kết quả trả về từ server
          try {
            const parsedData = JSON.parse(data);
            // return parsedData;
            a = parsedData.response;
            console.log(a)
            console.log(typeof a)
            // console.log(a);
            // console.log(typeof(a))
            // console.log(a.message)
            return  a
            // Thực hiện các xử lý khác với dữ liệu ở đây
          } catch (error) {
            console.error("Lỗi khi phân tích dữ liệu JSON: ", error);
          }
        })
        .catch(error => {
          console.error("Lỗi khi gửi yêu cầu: ", error);
        });
}