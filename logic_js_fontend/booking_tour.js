let url_booking_tour = "http://localhost:8080/api/booking_tour"

let tour_price = (adults,children,price)=>{
    // Giá tour khi có 2 người lớn và 1 trẻ em (giá mặc định)
  const defaultAdults = 2;
  const defaultChildren = 1;
    let AdultsPrice = price * 3/8
    let childrenPrice = price * 1/4
  let totalPrice = (AdultsPrice * adults) + (children * childrenPrice)

    const roundedPrice = Math.floor(totalPrice);

    return roundedPrice;
}

document.addEventListener('DOMContentLoaded',  function() {
    // time
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);


    let login_username = sessionStorage.getItem('user_name_login')
    let login_email = sessionStorage.getItem('email_login')
    let tourist_destination_name = sessionStorage.getItem("tourist_destination_name")
    let hotel_info = JSON.parse(sessionStorage.getItem("hotel_info"))
    let price = sessionStorage.getItem("price")
    let number_of_travel_days = sessionStorage.getItem("number_of_travel_days")
    // console.log(typeof hotel_info) 

    let container_all_booking_tour_page = document.querySelector("#container_all_booking_tour_page")

    let some_amenities = hotel_info.some_amenities
    console.log(some_amenities.length)
    console.log(typeof some_amenities)
    let some_amenities_display = ""
    for (let i = 0;i< some_amenities.length;i++){
        some_amenities_display +=  `<span>${some_amenities[i]}</span>`
    }
    

    container_all_booking_tour_page.innerHTML = `
    
    <div id="container_top_booking_form">
            <img src="../assets/images/logo_title.ico" alt="" id="logo_booking_tour_page">
            <div id="user_infor_in_booking_tour_page">
            <div id="user_email_in_booking_tour_page"><h2 >Email cuả bạn là ${login_email}</h2></div>
            <div id="user_name_in_booking_tour_page"><h2 >Tên của bạn ${login_username}</h2></div>
            <div ><label>Tên đầy đủ của bạn :</label><input type="text" id="full_username_text_in_booking_tour_page"></div>
            </div>
        </div>
        <div id="container_mid_booking_form">
            <div id="name_tour_in_booking_tour_page"><h2>BOOKING TOUR ${tourist_destination_name}</h2></div>
            <div id="choose_infor_tour_mid_booking_form">
                <div id="choose_time_checkin_in_booking_tour_page"><h3>Ngày dự kiến bạn muốn đi :</h3><input type="date" name="dateInput" id="day_to_star_tour"></div>
            <div id="choose_adults_in_booking_tour_page">
            <h3>Chọn số người lớn</h3>
            <select id="adultsSelect_in_booking_tour_page">
                <option value="">chọn số người lớn</option>
                <option value="1">1 người lớn</option>
                <option value="2">2 người lớn</option>
                <option value="3">3 người lớn</option>
                <option value="4">4 người lớn</option>
            </select>
            </div>

            <div id="choose_children_in_booking_tour_page">
            <h3>Chọn số trẻ em</h3>
            <select id="childrenSelect_in_booking_tour_page">
                <option value="">chọn số trẻ em</option>
                <option value="0">0 trẻ em</option>
                <option value="1">1 trẻ em</option>
                <option value="2">2 trẻ em</option>
                <option value="3">3 trẻ em</option>
            </select>
            </div>
            </div>
        </div>
        <div id="container_bottom_booking_form">
        <div id="container_bottom_booking_form_on_top">
        <div id="hotel_info_booking_tour">
            <h3>${hotel_info.name}</h3>
            <img src="data:image/png;base64,${hotel_info.img}" alt="">
            <p>${hotel_info.describe}</p>
            <div id="some_amenities"> ${some_amenities_display}</div>
        </div>
        
        
    </div>
    <div id="container_bottom_booking_form_on_mid">
        <h4>Gía <span>${price}</span> $USD</h4>
        <input type="button" value="BOOK TOUR" class="btn_choose" id="book_tour">
    </div>
    <div id="error_container_all_booking_tour_page"></div>
        </div>
    `
    let full_username_text_in_booking_tour_page = document.querySelector("#full_username_text_in_booking_tour_page");
    let day_to_star_tour = document.querySelector("#day_to_star_tour");
    let adultsSelect_in_booking_tour_page = document.querySelector("#adultsSelect_in_booking_tour_page");
    let childrenSelect_in_booking_tour_page = document.querySelector("#childrenSelect_in_booking_tour_page");
    let choose_hotel = document.querySelector("#choose_hotel");
    let choose_flight = document.querySelector("#choose_flight");
    let book_tour = document.querySelector("#book_tour");
    let error_container_all_booking_tour_page = document.querySelector("#error_container_all_booking_tour_page");

    adultsSelect_in_booking_tour_page.addEventListener("change",async ()=>{
        let adultsSelect_in_booking_tour_page_value = adultsSelect_in_booking_tour_page.value
        let childrenSelect_in_booking_tour_page_value = childrenSelect_in_booking_tour_page.value
        let a = tour_price(adultsSelect_in_booking_tour_page_value,childrenSelect_in_booking_tour_page_value,price)

        let price_value = document.querySelector("#container_bottom_booking_form_on_mid h4 span")

        price_value.innerText = a
    })

    childrenSelect_in_booking_tour_page.addEventListener("change",async ()=>{
        let adultsSelect_in_booking_tour_page_value = adultsSelect_in_booking_tour_page.value
        let childrenSelect_in_booking_tour_page_value = childrenSelect_in_booking_tour_page.value
        let a = tour_price(adultsSelect_in_booking_tour_page_value,childrenSelect_in_booking_tour_page_value,price)

        let price_value = document.querySelector("#container_bottom_booking_form_on_mid h4 span")

        price_value.innerText = a
    })

    book_tour.addEventListener("click",async ()=>{

        let full_username_text_in_booking_tour_page_value = full_username_text_in_booking_tour_page.value
        let day_to_star_tour_value = day_to_star_tour.value
        let adultsSelect_in_booking_tour_page_value = adultsSelect_in_booking_tour_page.value
        let childrenSelect_in_booking_tour_page_value = childrenSelect_in_booking_tour_page.value

        if(full_username_text_in_booking_tour_page_value === ""){
            error_container_all_booking_tour_page.innerText = "Tên đầy đủ không được để chống"
            return
        }
        let selectedDate = new Date(day_to_star_tour_value);
        console.log(`time = ${day_to_star_tour_value}`)
        console.log(`type time = ${typeof day_to_star_tour_value}`)
        // chưa kiểm tra được người dùng ko nhập time
        if (day_to_star_tour_value != ""){
            if (selectedDate <= tomorrow ) {
                // console.log("Ngày nhập vào phải là ngày trong tương lai gần");
                error_container_all_booking_tour_page.innerText = "Ngày nhập vào phải là ngày trong tương lai gần"
                return
                
              } else if (selectedDate >= oneYearLater) {
                error_container_all_booking_tour_page.innerText = "Ngày nhập vào phải là ngày trong tương lai gần và nhỏ hơn 1 năm tới"
                return
              }
            
        }
        else{
            error_container_all_booking_tour_page.innerText = "Bạn chưa nhập thời gian muốn đi"
            return
        }
        
        if(adultsSelect_in_booking_tour_page_value === ""){
            error_container_all_booking_tour_page.innerText = "Bạn chưa chọn số người lớn cho tour"
            return
        }
        if(childrenSelect_in_booking_tour_page_value === ""){
            error_container_all_booking_tour_page.innerText = "Bạn chưa chọn số trẻ em cho tour"
            return
        }
        error_container_all_booking_tour_page.innerText = ""

        let price_value = document.querySelector("#container_bottom_booking_form_on_mid h4 span")
        let priceValue = price_value.innerText
        data3 = {
            full_name:full_username_text_in_booking_tour_page_value,
            email:login_email,
            num_adults : adultsSelect_in_booking_tour_page_value,
            num_children : childrenSelect_in_booking_tour_page_value,
            time:day_to_star_tour_value,
            price:priceValue,
            name_tour:tourist_destination_name,
            days:number_of_travel_days,
            name_hotel:hotel_info.name

        }
        console.log(data3)
        console.log( priceValue)
        console.log(typeof priceValue)
        response_data3 = await send_data_to_server_booking_tour(data3)

        if (response_data3.status){
            alert(response_data3.message)
        }
        else{
            alert(response_data3.message)
        }

        
    })
    

});

let send_data_to_server_booking_tour = async (data) => {
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
    return fetch(url_booking_tour, requestOptions)
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
