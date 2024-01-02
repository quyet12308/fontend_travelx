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
            html_text += 
            // <div class="tour">
            // <div class="grid wide">
            //   <div class="tour__container">
            //     <div class="tour__container__items">
            //       <div class="row" id="tourist_destination_information_tour">
            `
                    <div class="col l-4">
                      <div class="tour__container__item">
                        <div class="item__overlay"></div>
                          <div class="item__background" style="background-image: url('data:image/png;base64,${img_base64_list[i]}');"></div>
                          <div class="item__content">
                              <span class="item_date">${the_right_time_to_go_list[i]}</span>
                            <div class="item_center">
                              <h2>${tourist_destination_name_list[i]}</h2>
                              <div class="item_price"> ${price_list[i]} $ USD</div>
                               ${number_of_stars_list[i]} star
                              <div class="tour__item--btn">
                                <div class="tour__btn__bgc"></div>
                                <div id="id_tourist_destination_information_tour0"  onclick="detailed_information_about_the_tour('${tourist_destination_name_list[i]}')"><h5>See more</h5>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    
            `
        }
        my_booking_tour_container.innerHTML = `
        
       <div class="header__show_all_tour">
            <h1>Những tour du lịch tốt nhất của chúng tôi </h1>
            <p>Trên khắp thế giới , hợp tác với những đối tác hàng đầu , sứ mệnh của chúng tôi là mang đến cho các bạn những tour du lịch chất lượng nhất</p>
        </div>
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