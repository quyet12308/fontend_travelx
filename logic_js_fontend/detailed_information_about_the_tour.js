let url_detailed_basic = "http://localhost:8080/api/get_tourist_destination_information_by_name"

document.addEventListener('DOMContentLoaded', async ()=> {
    let container_detailed_if_tour = document.querySelector("#container_detailed_if_tour")

    let token_login = sessionStorage.getItem("tokek_for_login_session")
    let tourist_destination_name = sessionStorage.getItem("tourist_destination_name")

    let data1 = {
        name:tourist_destination_name,
        token:token_login
    }
    console.log(`data = ${data1}`)
    data1_cover = createDataObject(data1)
    console.log(`data cover = ${data1_cover}`)
    response_from_server = await send_data_to_server_detailed_basic(data1_cover)
    if(response_from_server.status){
        message = response_from_server.message
        url_img = message.img_base64
        price = message.price
        tourist_destination_describe = message.tourist_destination_describe
        tourist_destination_location = message.tourist_destination_location
        number_of_stars = message.number_of_stars
        number_of_travel_days = message.number_of_travel_days

        container_detailed_if_tour.innerHTML = `
            <div id="container__all">
            <div id="h1_text"><h1>${tourist_destination_name}</h1></div>
            
            <div id="image-with-corner">
            <img src="data:image/png;base64,${url_img}" alt="">
            <div id="corner-text">${number_of_stars} <i class="fa fa-star"></i></div>
            
            </div>
             
            <div id="price_text"><h2>Only ${price}$ for family tour ${number_of_travel_days} days </h2></div>
            <div id="weather_info_table">
            
            </div>
            <div id="text_detail"><p>${tourist_destination_describe}</p></div>
            
        </div>
        `
    }

});

function createDataObject(data) {

  
    return JSON.stringify(data);
  }

  let send_data_to_server_detailed_basic = async (data) => {
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
    return fetch(url_detailed_basic, requestOptions)
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