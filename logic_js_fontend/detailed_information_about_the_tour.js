let url_detailed_basic = "http://localhost:8080/api/get_tourist_destination_information_by_name"

function containsPage(str) {
  return str.includes("pages");
}

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
        five_day_weather_datas = message.five_day_weather_datas

        // weather data 
        

        container_detailed_if_tour.innerHTML = `
            <div id="container__all">
            
            <div id="h1_text"><h1>${tourist_destination_name}</h1></div>
            
            <div id="image-with-corner">
            <img src="data:image/png;base64,${url_img}" alt="">
            <div id="corner-text">${number_of_stars} <i class="fa fa-star"></i></div>
            
            </div>
             
            <div id="price_text"><h2>Only ${price}$ for family tour ${number_of_travel_days} days </h2></div>
            <div class="btn_bgc"><a href="#" id="btn_book_now">BOOK NOW</a></div>
            <div id="weather_info_table">
            <div id="weather_header_text"><h2>Weather for the next 5 days</h2></div>  
            <table id="weather_table">
            <thead   style="border: #555 1px solid;">
            <tr>
            <th><h4 class="h4_weather_data_text">${five_day_weather_datas[0]["dt_txt"]}</h4></th>
            <th><h4 class="h4_weather_data_text">${five_day_weather_datas[1]["dt_txt"]}</h4></th>
            <th><h4 class="h4_weather_data_text">${five_day_weather_datas[2]["dt_txt"]}</h4></th>
            <th><h4 class="h4_weather_data_text">${five_day_weather_datas[3]["dt_txt"]}</h4></th>
            <th><h4 class="h4_weather_data_text">${five_day_weather_datas[4]["dt_txt"]}</h4></th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[0]["temp"]} C</h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[1]["temp"]} C</h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[2]["temp"]} C</h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[3]["temp"]} C</h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[4]["temp"]} C</h4></td>
              </tr>
              <tr>
              <td><img src=${five_day_weather_datas[0]["icon"]} alt=""></td>
              <td><img src=${five_day_weather_datas[1]["icon"]} alt=""></td>
              <td><img src=${five_day_weather_datas[2]["icon"]} alt=""></td>
              <td><img src=${five_day_weather_datas[3]["icon"]} alt=""></td>
              <td><img src=${five_day_weather_datas[4]["icon"]} alt=""></td>
              </tr>
              <tr>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[0]["description"]} </h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[1]["description"]} </h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[2]["description"]} </h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[3]["description"]} </h4></td>
              <td><h4 class="h4_weather_data_text">${five_day_weather_datas[4]["description"]} </h4></td>
              </tr>
              <tr>
              <td><h4 class="h4_weather_data_text">pop ${five_day_weather_datas[0]["pop"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">pop ${five_day_weather_datas[1]["pop"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">pop ${five_day_weather_datas[2]["pop"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">pop ${five_day_weather_datas[3]["pop"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">pop ${five_day_weather_datas[4]["pop"]} %</h4></td>
              </tr>
              <tr>
              <td><h4 class="h4_weather_data_text">humidity ${five_day_weather_datas[0]["humidity"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">humidity ${five_day_weather_datas[1]["humidity"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">humidity ${five_day_weather_datas[2]["humidity"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">humidity ${five_day_weather_datas[3]["humidity"]} %</h4></td>
              <td><h4 class="h4_weather_data_text">humidity ${five_day_weather_datas[4]["humidity"]} %</h4></td>
              </tr>
          </tbody>
            </table>
              
            </div>
            <div id="text_detail"><p>${tourist_destination_describe}</p></div>
            
        </div>
        `

       let btn_book_now = document.querySelector("#btn_book_now");
       btn_book_now.addEventListener("click",()=>{
        let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
        if(login_session_token){
          window.location.href = "booking_tour.html"
        }
        else{
          alert("Bạn cần đăng nhập để xem chi tiết")
          let currentURL = window.location.href;
    if(containsPage(currentURL)){
      window.location.href = "login.html"
    }
    else{
      window.location.href = "pages/login.html"
    }
        }
        
       })
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