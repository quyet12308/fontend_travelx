


document.addEventListener('DOMContentLoaded',  function() {
    // time
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);


    let login_username = sessionStorage.getItem('user_name_login')
    let login_email = sessionStorage.getItem('email_login')
    let tourist_destination_name = sessionStorage.getItem("tourist_destination_name")

    let container_all_booking_tour_page = document.querySelector("#container_all_booking_tour_page")

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
                <option value="1">1 trẻ em</option>
                <option value="2">2 trẻ em</option>
                <option value="3">3 trẻ em</option>
                <option value="4">4 trẻ em</option>
            </select>
            </div>
            </div>
        </div>
        <div id="container_bottom_booking_form">
        <div id="container_bottom_booking_form_on_top">
        <h3>Chọn khách sạn</h3>
        <input type="button" value="Chọn khách sạn" class="btn_choose" id="choose_hotel">
        <h3>Chọn chuyến bay</h3>
        <input type="button" value="Chọn chuyến bay" class="btn_choose" id="choose_flight">
    </div>
    <div id="container_bottom_booking_form_on_mid">
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
        
    })
    

});
