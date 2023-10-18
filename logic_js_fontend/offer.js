url_offer = "http://localhost:8080/api/get_offer_data"

document.addEventListener('DOMContentLoaded',async ()=> {
    // price
    // price
    let price_offer = document.querySelector("#price_offer");
    let name_hotel_offer = document.querySelector("#name_hotel_offer");
    let star_offer = document.querySelector("#star_offer");
    let distance_offer = document.querySelector("#distance_offer");
    let review_offer = document.querySelector("#review_offer");
    let offers__container__items = document.querySelector("#offers__container__items_id")
    
    // let show_all_price = document.querySelector("#show_all_price");
    // let ascending_price = document.querySelector("#ascending_price");
    // let decrease_price = document.querySelector("#decrease_price");
    data1 = 
    {
        default:"yes",
        price_offer:price_offer.value,
        name_hotel_offer:name_hotel_offer.value,
        star_offer:star_offer.value,
        distance_offer:distance_offer.value,
        review_offer:review_offer.value
    }
    console.log(data1)
    response_data1 = await send_data_to_server_offer_basic(data1)
    if(response_data1.status){
        message = response_data1.message
        id_hotel = message.id_hotel
        hotel_name = message.hotel_name
        stars = message.stars
        price = message.price
        num_reviews = message.num_reviews
        avata_img = message.avata_img
        describe_hotel = message.describe_hotel
                    
        // console.log(Object.keys(response_data1.message).length)
        console.log(id_hotel.length)
        // if(){

        // }
        // console.log("hd1")
        for (let i = 0 ; i <  id_hotel.length;i++){
            let integerPart = Math.trunc(stars[i]);
            if(integerPart == 3 ){
                evaluate_word = `<h3>Great</h3>`
                star_string_html_code = `
                <div class="item_rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                `
            }
            else if(integerPart == 4 ){
                evaluate_word = `<h3>Very good</h3>`
                star_string_html_code = `
                <div class="item_rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                `
            }
            else if(integerPart == 5 ){
                evaluate_word = `<h3>Excellent</h3>`
                star_string_html_code = `
                <div class="item_rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                `
            }
            offers__container__items.innerHTML += `
            <div class="col l-12 m-12 c-12 s-12">
            <div class="offer__container__item">
                <div class="row">
                    <div class="col l-4 m-6 c-12 s-12">
                        <div class="offer__item__img--container">
                            <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                            <div class="offer__container__item-name">
                                <a href="#">${hotel_name[i]}</a>
                            </div>
                        </div>
                    </div>
                    <div class="l-8 m-6 c-12 s-12">
                        <div class="offer__container__item--content">
                            <div class="offer__container__item__review">
                                <div class="offer__container__item__review--text">
                                    ${evaluate_word}
                                    <span>${num_reviews[i]} reviews</span>
                                </div>
                                <span>${stars[i]}</span>
                            </div>
                            <div class="offers__item__price">
                                $${price[i]}
                                <span>Mỗi đêm</span>
                            </div>
                            ${star_string_html_code}
                            <p>${describe_hotel[i]}</p>
                            <div class="offer__item--icon">
                                <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                            </div>
                            <div class="offers__btn">
                                <a href="#">Book now</a>
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
        // console.log("hd2")
    }

    price_offer.addEventListener("change",async()=>{
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        data2 = {
            default:"no",
            price_offer:price_offer.value,
            name_hotel_offer:name_hotel_offer.value,
            star_offer:star_offer.value,
            distance_offer:distance_offer.value,
            review_offer:review_offer.value
        }
        response_data2 = await send_data_to_server_offer_basic(data2)
        
        if(response_data2.status){
            let message = response_data2.message
            let id_hotel = message.id_hotel
            let hotel_name = message.hotel_name
            let stars = message.stars
            let price = message.price
            let num_reviews = message.num_reviews
            let avata_img = message.avata_img
            let describe_hotel = message.describe_hotel
                        
            // console.log(Object.keys(response_data1.message).length)
            // console.log(id_hotel.length)
            // if(){
    
            // }
            // console.log("hd1")
            offers__container__items.innerHTML = ""
            for (let i = 0 ; i <  id_hotel.length;i++){
                let integerPart = Math.trunc(stars[i]);
                if(integerPart == 3 ){
                    evaluate_word = `<h3>Great</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 4 ){
                    evaluate_word = `<h3>Very good</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 5 ){
                    evaluate_word = `<h3>Excellent</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                    `
                }
                offers__container__items.innerHTML += `
                <div class="col l-12 m-12 c-12 s-12">
                <div class="offer__container__item">
                    <div class="row">
                        <div class="col l-4 m-6 c-12 s-12">
                            <div class="offer__item__img--container">
                                <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                                <div class="offer__container__item-name">
                                    <a href="#">${hotel_name[i]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="l-8 m-6 c-12 s-12">
                            <div class="offer__container__item--content">
                                <div class="offer__container__item__review">
                                    <div class="offer__container__item__review--text">
                                        ${evaluate_word}
                                        <span>${num_reviews[i]} reviews</span>
                                    </div>
                                    <span>${stars[i]}</span>
                                </div>
                                <div class="offers__item__price">
                                    $${price[i]}
                                    <span>Mỗi đêm</span>
                                </div>
                                ${star_string_html_code}
                                <p>${describe_hotel[i]}</p>
                                <div class="offer__item--icon">
                                    <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                    <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                    <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                    <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                                </div>
                                <div class="offers__btn">
                                    <a href="#">Book now</a>
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
        
        }
    })
    name_hotel_offer.addEventListener("change", async()=>{
        // console.log(name_hotel_offer.value)
        // price.value = "Hiển thị tất cả"
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        price_offer.addEventListener("change",async()=>{
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        data2 = {
            default:"no",
            price_offer:price_offer.value,
            name_hotel_offer:name_hotel_offer.value,
            star_offer:star_offer.value,
            distance_offer:distance_offer.value,
            review_offer:review_offer.value
        }
        response_data2 = await send_data_to_server_offer_basic(data2)
        
        if(response_data2.status){
            let message = response_data2.message
            let id_hotel = message.id_hotel
            let hotel_name = message.hotel_name
            let stars = message.stars
            let price = message.price
            let num_reviews = message.num_reviews
            let avata_img = message.avata_img
            let describe_hotel = message.describe_hotel
                        
            // console.log(Object.keys(response_data1.message).length)
            // console.log(id_hotel.length)
            // if(){
    
            // }
            // console.log("hd1")
            offers__container__items.innerHTML = ""
            for (let i = 0 ; i <  id_hotel.length;i++){
                let integerPart = Math.trunc(stars[i]);
                if(integerPart == 3 ){
                    evaluate_word = `<h3>Great</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 4 ){
                    evaluate_word = `<h3>Very good</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 5 ){
                    evaluate_word = `<h3>Excellent</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                    `
                }
                offers__container__items.innerHTML += `
                <div class="col l-12 m-12 c-12 s-12">
                <div class="offer__container__item">
                    <div class="row">
                        <div class="col l-4 m-6 c-12 s-12">
                            <div class="offer__item__img--container">
                                <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                                <div class="offer__container__item-name">
                                    <a href="#">${hotel_name[i]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="l-8 m-6 c-12 s-12">
                            <div class="offer__container__item--content">
                                <div class="offer__container__item__review">
                                    <div class="offer__container__item__review--text">
                                        ${evaluate_word}
                                        <span>${num_reviews[i]} reviews</span>
                                    </div>
                                    <span>${stars[i]}</span>
                                </div>
                                <div class="offers__item__price">
                                    $${price[i]}
                                    <span>Mỗi đêm</span>
                                </div>
                                ${star_string_html_code}
                                <p>${describe_hotel[i]}</p>
                                <div class="offer__item--icon">
                                    <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                    <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                    <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                    <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                                </div>
                                <div class="offers__btn">
                                    <a href="#">Book now</a>
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
        
        }
    })
    })
    star_offer.addEventListener("change",async()=>{
        // console.log(star_offer.value)
        // price.value = "Hiển thị tất cả"
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        data2 = {
            default:"no",
            price_offer:price_offer.value,
            name_hotel_offer:name_hotel_offer.value,
            star_offer:star_offer.value,
            distance_offer:distance_offer.value,
            review_offer:review_offer.value
        }
        response_data2 = await send_data_to_server_offer_basic(data2)
        
        if(response_data2.status){
            let message = response_data2.message
            let id_hotel = message.id_hotel
            let hotel_name = message.hotel_name
            let stars = message.stars
            let price = message.price
            let num_reviews = message.num_reviews
            let avata_img = message.avata_img
            let describe_hotel = message.describe_hotel
                        
            // console.log(Object.keys(response_data1.message).length)
            // console.log(id_hotel.length)
            // if(){
    
            // }
            // console.log("hd1")
            offers__container__items.innerHTML = ""
            for (let i = 0 ; i <  id_hotel.length;i++){
                let integerPart = Math.trunc(stars[i]);
                if(integerPart == 3 ){
                    evaluate_word = `<h3>Great</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 4 ){
                    evaluate_word = `<h3>Very good</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 5 ){
                    evaluate_word = `<h3>Excellent</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                    `
                }
                offers__container__items.innerHTML += `
                <div class="col l-12 m-12 c-12 s-12">
                <div class="offer__container__item">
                    <div class="row">
                        <div class="col l-4 m-6 c-12 s-12">
                            <div class="offer__item__img--container">
                                <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                                <div class="offer__container__item-name">
                                    <a href="#">${hotel_name[i]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="l-8 m-6 c-12 s-12">
                            <div class="offer__container__item--content">
                                <div class="offer__container__item__review">
                                    <div class="offer__container__item__review--text">
                                        ${evaluate_word}
                                        <span>${num_reviews[i]} reviews</span>
                                    </div>
                                    <span>${stars[i]}</span>
                                </div>
                                <div class="offers__item__price">
                                    $${price[i]}
                                    <span>Mỗi đêm</span>
                                </div>
                                ${star_string_html_code}
                                <p>${describe_hotel[i]}</p>
                                <div class="offer__item--icon">
                                    <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                    <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                    <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                    <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                                </div>
                                <div class="offers__btn">
                                    <a href="#">Book now</a>
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
        }
    })
    distance_offer.addEventListener("change",async()=>{
        // console.log(distance_offer.value)
        // price.value = "Hiển thị tất cả"
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        data2 = {
            default:"no",
            price_offer:price_offer.value,
            name_hotel_offer:name_hotel_offer.value,
            star_offer:star_offer.value,
            distance_offer:distance_offer.value,
            review_offer:review_offer.value
        }
        response_data2 = await send_data_to_server_offer_basic(data2)
        
        if(response_data2.status){
            let message = response_data2.message
            let id_hotel = message.id_hotel
            let hotel_name = message.hotel_name
            let stars = message.stars
            let price = message.price
            let num_reviews = message.num_reviews
            let avata_img = message.avata_img
            let describe_hotel = message.describe_hotel
                        
            // console.log(Object.keys(response_data1.message).length)
            // console.log(id_hotel.length)
            // if(){
    
            // }
            // console.log("hd1")
            offers__container__items.innerHTML = ""
            for (let i = 0 ; i <  id_hotel.length;i++){
                let integerPart = Math.trunc(stars[i]);
                if(integerPart == 3 ){
                    evaluate_word = `<h3>Great</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 4 ){
                    evaluate_word = `<h3>Very good</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 5 ){
                    evaluate_word = `<h3>Excellent</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                    `
                }
                offers__container__items.innerHTML += `
                <div class="col l-12 m-12 c-12 s-12">
                <div class="offer__container__item">
                    <div class="row">
                        <div class="col l-4 m-6 c-12 s-12">
                            <div class="offer__item__img--container">
                                <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                                <div class="offer__container__item-name">
                                    <a href="#">${hotel_name[i]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="l-8 m-6 c-12 s-12">
                            <div class="offer__container__item--content">
                                <div class="offer__container__item__review">
                                    <div class="offer__container__item__review--text">
                                        ${evaluate_word}
                                        <span>${num_reviews[i]} reviews</span>
                                    </div>
                                    <span>${stars[i]}</span>
                                </div>
                                <div class="offers__item__price">
                                    $${price[i]}
                                    <span>Mỗi đêm</span>
                                </div>
                                ${star_string_html_code}
                                <p>${describe_hotel[i]}</p>
                                <div class="offer__item--icon">
                                    <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                    <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                    <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                    <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                                </div>
                                <div class="offers__btn">
                                    <a href="#">Book now</a>
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
        }
    
    })
    review_offer.addEventListener("change",async()=>{
        // console.log(review_offer.value)
        // price.value = "Hiển thị tất cả"
        console.log(price_offer.value)
        console.log(name_hotel_offer.value)
        console.log(star_offer.value)
        console.log(distance_offer.value)
        console.log(review_offer.value)

        data2 = {
            default:"no",
            price_offer:price_offer.value,
            name_hotel_offer:name_hotel_offer.value,
            star_offer:star_offer.value,
            distance_offer:distance_offer.value,
            review_offer:review_offer.value
        }
        response_data2 = await send_data_to_server_offer_basic(data2)
        
        if(response_data2.status){
            let message = response_data2.message
            let id_hotel = message.id_hotel
            let hotel_name = message.hotel_name
            let stars = message.stars
            let price = message.price
            let num_reviews = message.num_reviews
            let avata_img = message.avata_img
            let describe_hotel = message.describe_hotel
                        
            // console.log(Object.keys(response_data1.message).length)
            // console.log(id_hotel.length)
            // if(){
    
            // }
            // console.log("hd1")
            offers__container__items.innerHTML = ""
            for (let i = 0 ; i <  id_hotel.length;i++){
                let integerPart = Math.trunc(stars[i]);
                if(integerPart == 3 ){
                    evaluate_word = `<h3>Great</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 4 ){
                    evaluate_word = `<h3>Very good</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    `
                }
                else if(integerPart == 5 ){
                    evaluate_word = `<h3>Excellent</h3>`
                    star_string_html_code = `
                    <div class="item_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                    `
                }
                offers__container__items.innerHTML += `
                <div class="col l-12 m-12 c-12 s-12">
                <div class="offer__container__item">
                    <div class="row">
                        <div class="col l-4 m-6 c-12 s-12">
                            <div class="offer__item__img--container">
                                <div class="offer__item__img" style="background-image:url('data:image/png;base64,${avata_img[i]}')"></div>
                                <div class="offer__container__item-name">
                                    <a href="#">${hotel_name[i]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="l-8 m-6 c-12 s-12">
                            <div class="offer__container__item--content">
                                <div class="offer__container__item__review">
                                    <div class="offer__container__item__review--text">
                                        ${evaluate_word}
                                        <span>${num_reviews[i]} reviews</span>
                                    </div>
                                    <span>${stars[i]}</span>
                                </div>
                                <div class="offers__item__price">
                                    $${price[i]}
                                    <span>Mỗi đêm</span>
                                </div>
                                ${star_string_html_code}
                                <p>${describe_hotel[i]}</p>
                                <div class="offer__item--icon">
                                    <img src="../assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp" alt="">
                                    <img src="../assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp" alt="">
                                    <img src="../assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp" alt="">
                                    <img src="../assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp" alt="">
                                </div>
                                <div class="offers__btn">
                                    <a href="#">Book now</a>
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
        }
    
    })
});



  let send_data_to_server_offer_basic = async (data) => {
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
    return fetch(url_offer, requestOptions)
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