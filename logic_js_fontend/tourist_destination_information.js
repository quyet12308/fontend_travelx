url_get_data = "http://localhost:8080/api/get_tourist_destination_information"

function containsPage(str) {
  return str.includes("pages");
}

function check_login(name_){

  let currentURL = window.location.href;
    alert(name_)
    sessionStorage.setItem("tourist_destination_name",name_)
    if(containsPage(currentURL)){
      window.location.href = "detailed_information_about_the_tour.html"
    }
    else{
      window.location.href = "pages/detailed_information_about_the_tour.html"
    }
  // let login_session_token =  sessionStorage.getItem('tokek_for_login_session')
  // if (login_session_token){
  //   alert(name_)
  //   sessionStorage.setItem("tourist_destination_name",name_)
  //   let currentURL = window.location.href;
  //   if(containsPage(currentURL)){
  //     window.location.href = "detailed_information_about_the_tour.html"
  //   }
  //   else{
  //     window.location.href = "pages/detailed_information_about_the_tour.html"
  //   }
  // }else{
  //   alert("Bạn cần đăng nhập để xem chi tiết")
  //   let currentURL = window.location.href;
  //   if(containsPage(currentURL)){
  //     window.location.href = "login.html"
  //   }
  //   else{
  //     window.location.href = "pages/login.html"
  //   }
    
  // }
}



document.addEventListener('DOMContentLoaded', async ()=> {
  
    // ....
    response_from_server = await get_data_from_server(url_get_data)
    // console.log(response_from_server)

    
    
    if(response_from_server)  {
        let tourist_destination_information_tour = document.querySelector("#tourist_destination_information_tour")
        let tourist_destination_name_arr =  response_from_server.tourist_destination_name_arr
        let img_base64_arr = response_from_server.img_base64_arr
        let price_arr = response_from_server.price_arr
        let the_right_time_to_go_arr =  response_from_server.the_right_time_to_go_arr
        let tourist_destination_describe_arr =  response_from_server.tourist_destination_describe_arr
        let tourist_destination_location_arr =  response_from_server.tourist_destination_location_arr
        let number_of_stars_arr =  response_from_server.number_of_stars_arr
        let number_of_travel_days_arr =  response_from_server.number_of_travel_days_arr
        let type_file_arr =  response_from_server.type_file_arr 

        // console.log(tourist_destination_name_arr)
        let id_name_tour0 = tourist_destination_name_arr[0].toString()
        let id_name_tour1 = tourist_destination_name_arr[1].toString()
        let id_name_tour2 = tourist_destination_name_arr[2].toString()
        let id_name_tours = [id_name_tour0,id_name_tour1,id_name_tour2]
        console.log("abc")   
        for(let i = 0; i< 3;i ++) {
        let integerPart = Math.trunc(number_of_stars_arr[i])
        if(integerPart == 3){
          star_html = `
          <div class="item_rating"> 
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <h4 > ${number_of_stars_arr[i]}</h4>
                    </div>
          `

        }
        else if (integerPart == 4){
          star_html = `
          <div class="item_rating"> 
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="far fa-star"></i>
                      <h4 > ${number_of_stars_arr[i]}</h4>
                    </div>
          `
        }
        else if (integerPart == 5){
          star_html = `
          <div class="item_rating"> 
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <h4 > ${number_of_stars_arr[i]}</h4>
                    </div>
          `
        }
          // console.log(id_name_tours[i])
          // console.log(typeof id_name_tours[i])
        tourist_destination_information_tour.innerHTML += 
        `
        <div class="col l-4 m-12 c-12">
              <div class="tour__container__item">
                <div class="item__overlay"></div>
                <div class="item__background" style="
                      background-image: url('data:image/png;base64,${img_base64_arr[i]}');
                    "></div>
                <div class="item__content">
                  <span class="item_date">${the_right_time_to_go_arr[i]}</span>
                  <div class="item_center">
                    <h2>${tourist_destination_name_arr[i]}</h2>
                    <div class="item_price">From ${price_arr[i]}$</div>
                    ${star_html}
                    <div class="tour__item--btn">
                      <div class="tour__btn__bgc"></div>
                      <div id="id_tourist_destination_information_tour0"  onclick="check_login('${tourist_destination_name_arr[i]}')"><h5>See more</h5>
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
        
        
    }else{
        console.log("chua co data")
    }

});



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
