url_my_booking_tour = "http://localhost:8080/api/my_booking_tour"
url_delete_my_booking_tour = "http://localhost:8080/api/delete_my_booking_tour"

let delete_my_booking_tour = async (timeCheckin,created_time)=>{
  let login_email = sessionStorage.getItem('email_login')
  data = {
    timeCheckin:timeCheckin,
    created_time:created_time,
    email:login_email
  }
  console.log(data)

  response_data = await send_data_to_server_delete_my_booking_tour(data)
  if (response_data.status){
    alert(response_data.message)
    location.reload();
  }else{
    alert(response_data.message)
    location.reload();
  }
}

document.addEventListener('DOMContentLoaded',async ()=> {

    // email
    let login_email = sessionStorage.getItem('email_login')
    let my_booking_tour_container = document.querySelector("#my_booking_tour_container")
    let data = {
        email:login_email
    }
    data_response_list = await send_data_to_server_my_booking_tour(data)
    if (data_response_list.status){
      
        data_list = data_response_list.message.data_list
        img_list = data_response_list.message.img_tours_list
        let html_text = ""
        for (let i = 0 ; i< data_list.length;i++){
            html_text += `
            <div class="tour_container">
              <img src="data:image/png;base64,${img_list[i]}" alt="">
              <h3>${data_list[i].booking_tour_name}</h3>
              <h4>Thời gian đăng ký ${data_list[i].createdTime}</h4>
              <p>Gía ${data_list[i].price} $ USD</p>
              <p>Thời lượng tour ${data_list[i].days} days</p>
              <p>Thời gian bắt đầu ${data_list[i].timeCheckin}</p>
              <p>Tên khách sạn ${data_list[i].hotel_infor}</p>
              <p>Số người lớn ${data_list[i].number_adults}</p>
              <p>Số trẻ em ${data_list[i].number_children}</p>
              <div class="button_container">
                <button class="edit_button">Chỉnh sửa</button>
                <button class="delete_button" onclick="delete_my_booking_tour('${data_list[i].timeCheckin}','${data_list[i].createdTime}')">Xóa</button>
            </div>
          </div>
            `
    
        }
        my_booking_tour_container.innerHTML = `
    <h1>Các Tour Du Lịch Đã Đăng Ký</h1>
    <h2>Các Tour Đã Đăng Ký</h2>
    <div class="tour-list" id="tour-upcoming">
        <!-- Thêm các tour đã đăng ký vào đây -->
        ${html_text}
    </div>
    `
    }
    else{
      html_text2 = `<h3>${data_response_list.message}</h3>`
      my_booking_tour_container.innerHTML = `
      <h1>Các Tour Du Lịch Đã Đăng Ký</h1>
    <h2>Các Tour Đã Đăng Ký</h2>
    <div class="tour-list" id="tour-upcoming">
        <!-- Thêm các tour đã đăng ký vào đây -->
        ${html_text2}
    </div>
      `
    }

    
})


let send_data_to_server_my_booking_tour = async (data) => {
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
    return fetch(url_my_booking_tour, requestOptions)
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

  let send_data_to_server_delete_my_booking_tour = async (data) => {
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
    return fetch(url_delete_my_booking_tour, requestOptions)
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