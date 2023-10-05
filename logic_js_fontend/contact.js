url_contact_basic = "http://localhost:8080/api/contact_basic"

document.addEventListener('DOMContentLoaded', function() {

    // session
      let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
      let login_username = sessionStorage.getItem('user_name_login')
      let login_email = sessionStorage.getItem('email_login')
    //element
  
      
      let nameInput_contact_screen = document.querySelector('#nameInput_contact_screen');
      let emailInput_contact_screen = document.querySelector('#emailInput_contact_screen');
      let subjectInput_contact_screen = document.querySelector('#subjectInput_contact_screen');
      let messageInput_contact_screen = document.querySelector('#messageInput_contact_screen');
      let btn_form_contact_screen = document.querySelector("#btn_form_contact_screen");
      let contact_input_error = document.querySelector("#contact_input_error")
  
      let isLogined = false;
      if (login_session_token){
          console.log("có token")
          
          isLogined = true;
  
      }
      else{
          console.log("ko có token")
          
      }
  
      if(isLogined){
        nameInput_contact_screen.value = login_username;
        emailInput_contact_screen.value = login_email;
      }

      btn_form_contact_screen.addEventListener("click",async ()=>{
        if (nameInput_contact_screen.value.length < 6) {
          contact_input_error.innerText = 'Tên phải có ít nhất 6 ký tự.';
          return;
        }
    
        if (!/\S+@\S+\.\S+/.test(emailInput_contact_screen.value)) {
          contact_input_error.innerText = 'Vui lòng nhập đúng định dạng email.';
          return;
        }
        // || !/\d/.test(password) || !/[a-zA-Z]/.test(password)
        if (subjectInput_contact_screen.value.length < 6 ) {
          contact_input_error.innerText = 'subject phải có ít nhất 6 ký tự ';
          return;
        }
  
        if (messageInput_contact_screen.value.length < 10 ) {
          contact_input_error.innerText = 'message phải có ít nhất 10 ký tự ';
          return;
        }
  
        contact_input_error.innerText = ''; // Xóa thông báo nếu điều kiện đúng

        let data = {
          name: nameInput_contact_screen.value,
          subject: subjectInput_contact_screen.value,
          email: emailInput_contact_screen.value,
          message: messageInput_contact_screen.value
        }
        let datacovertojson = createDataObject(data)
        a = await send_data_to_server_contact_basic(datacovertojson)

        if(a.status){
          alert(a.message)
        }
        
      });

      


  
      function createDataObject(data) {

  
        return JSON.stringify(data);
      }
    
      let send_data_to_server_contact_basic = async (data) => {
        // Ngăn chặn hành vi mặc định của form submit
        // event.preventDefault();
      
        // Tạo các tùy chọn cho yêu cầu POST
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data 
        };
      
        // Gửi yêu cầu POST đến backend
        return fetch(url_contact_basic, requestOptions)
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
        }
      
  });
  