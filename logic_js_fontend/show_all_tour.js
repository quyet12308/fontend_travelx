url = "http://localhost:8010/api/show_all_tour"

let detailed_information_about_the_tour = async (name_tour)=>{
    sessionStorage.setItem("tourist_destination_name",name_tour)
    window.location.href = "detailed_information_about_the_tour.html"
}



document.addEventListener('DOMContentLoaded', async function() {
    let my_booking_tour_container = document.querySelector("#my_booking_tour_container")

    data_response_from_server = await get_data_from_server(url)
    if (data_response_from_server.status){
        data_response = data_response_from_server.message

        let id_list = data_response.id_list
        let tourist_destination_name_list = data_response.tourist_destination_name_list
        let img_base64_list = data_response.img_base64_list
        let price_list = data_response.price_list
        let the_right_time_to_go_list = data_response.the_right_time_to_go_list
        let number_of_stars_list = data_response.number_of_stars_list
        let tourist_destination_describe_list = data_response.tourist_destination_describe_list
        let tourist_destination_location_list = data_response.tourist_destination_location_list
        let number_of_travel_days_list = data_response.number_of_travel_days_list
        let hotel_info_list = data_response.hotel_info_list
                     
        console.log(tourist_destination_name_list)
        let html_text = ""
        for (let i = 0 ; i< tourist_destination_name_list.length;i++){
            html_text += `
            <div class="tour_container">
              <img src="data:image/png;base64,${img_base64_list[i]}" alt="">
              <h3>${tourist_destination_name_list[i]}</h3>
              <h4> ${number_of_stars_list[i]} star</h4>
              <p>Gía ${price_list[i]} $ USD</p>
              <p>Thời lượng tour ${number_of_travel_days_list[i]} days</p>
              <p>Thời gian thích hợp để đi ${the_right_time_to_go_list[i]}</p>
              
              
              <div class="button_container">
                <button class="see_more" onclick="detailed_information_about_the_tour('${tourist_destination_name_list[i]}')">See more</button>
            </div>
          </div>
            `
        }
        my_booking_tour_container.innerHTML = `
        <h1>Những tour du lịch tốt nhất của chúng tôi </h1>
        <p>Trên khắp thế giới , hợp tác với những đối tác hàng đầu , sứ mệnh của chúng tôi là mang đến cho các bạn những tour du lịch chất lượng nhất</p>
        <div id="tour_containers">${html_text}</div>
        
    `
    }

    
})

let get_data_from_server = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(typeof data);
      return data.response;
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến máy chủ:", error);
      throw error;
    }
  };