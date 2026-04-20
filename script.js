const places = [
    // ===== ที่เที่ยว =====
    { name: "วัดพระแก้ว กรุงเทพ", type: "place", img: "images/วัดพระแก้ว กรุงเทพ.jpg", link: "https://travel.kapook.com/view1024.html" },
    { name: "พระบรมมหาราชวัง", type: "place", img: "images/พระบรมมหาราชวัง.jpg", link: "https://travel.kapook.com/view159632.html" },
    { name: "วัดอรุณราชวราราม", type: "place", img: "images/วัดอรุณราชวราราม.jpg", link: "https://travel.kapook.com/view177489.html" },
    { name: "ตลาดน้ำดำเนินสะดวก", type: "place", img: "images/ตลาดน้ำดำเนินสะดวก.jpg", link: "https://travel.kapook.com/view280313.html" },
    { name: "เกาะพีพี กระบี่", type: "place", img: "images/เกาะพีพี กระบี่.jpg", link: "https://travel.kapook.com/view332.html" },
    { name: "อ่าวมาหยา", type: "place", img: "images/อ่าวมาหยา.jpg", link: "https://travel.kapook.com/view250880.html" },
    { name: "ทะเลภูเก็ต", type: "place", img: "images/ทะเลภูเก็ต.jpg", link: "https://travel.kapook.com/view1009.html" },
    { name: "หาดป่าตอง", type: "place", img: "images/หาดป่าตอง.jpg", link: "https://travel.kapook.com/view20254.html" },
    { name: "เกาะสมุย", type: "place", img: "images/เกาะสมุย.jpg", link: "https://travel.kapook.com/view252516.html" },
    { name: "เกาะเต่า", type: "place", img: "images/เกาะเต่า.jpg", link: "https://travel.kapook.com/view279629.html" },

    { name: "ดอยอินทนนท์", type: "place", img: "images/ดอยอินทนนท์.jpg", link: "https://travel.kapook.com/view149618.html" },
    { name: "ดอยสุเทพ", type: "place", img: "images/ดอยสุเทพ.jpg", link: "https://th.tripadvisor.com/" },
    { name: "ม่อนแจ่ม", type: "place", img: "images/ม่อนแจ่ม.jpg", link: "https://travel.kapook.com/view215656.html" },
    { name: "เชียงใหม่ไนท์บาซาร์", type: "place", img: "images/เชียงใหม่ไนท์บาซาร์.jpg", link: "https://travel.kapook.com/view288563.html" },
    { name: "ดอยอ่างขาง", type: "place", img: "images/ดอยอ่างขาง.jpg", link: "https://travel.kapook.com/view230780.html" },
    { name: "ปาย แม่ฮ่องสอน", type: "place", img: "images/ปาย แม่ฮ่องสอน.jpg", link: "https://travel.kapook.com/view17645.html" },
    { name: "สะพานประวัติศาสตร์ปาย", type: "place", img: "images/สะพานประวัติศาสตร์ปาย.jpg", link: "https://travel.kapook.com/view126687.html" },
    { name: "ภูทับเบิก", type: "place", img: "images/ภูทับเบิก.jpg", link: "https://travel.kapook.com/view130190.html" },
    { name: "เขาค้อ", type: "place", img: "images/เขาค้อ.jpg", link: "https://travel.kapook.com/view181467.html" },
    { name: "อุทยานแห่งชาติเขาใหญ่", type: "place", img: "images/อุทยานแห่งชาติเขาใหญ่.jpg", link: "https://travel.kapook.com/view628.html" },

    { name: "น้ำตกเอราวัณ", type: "place", img: "images/น้ำตกเอราวัณ.jpg", link: "https://travel.kapook.com/view13783.html" },
    { name: "สะพานข้ามแม่น้ำแคว", type: "place", img: "images/สะพานข้ามแม่น้ำแคว.jpg", link: "https://travel.kapook.com/view122270.html" },
    { name: "เกาะเสม็ด", type: "place", img: "images/เกาะเสม็ด.jpg", link: "https://travel.kapook.com/view333.html" },
    { name: "พัทยา", type: "place", img: "images/พัทยา.jpg", link: "https://travel.kapook.com/view180444.html" },
    { name: "เขาชีจรรย์", type: "place", img: "images/เขาชีจรรย์.jpg", link: "https://travel.kapook.com/view198356.html" },

    { name: "หัวหิน", type: "place", img: "images/หัวหิน.jpg", link: "https://travel.kapook.com/view70999.html" },
    { name: "ตลาดน้ำหัวหิน", type: "place", img: "images/ตลาดน้ำหัวหิน.jpg", link: "https://travel.kapook.com/view38282.html" },
    { name: "เกาะช้าง", type: "place", img: "images/เกาะช้าง.jpg", link: "https://travel.kapook.com/view347.html" },
    { name: "เกาะกูด", type: "place", img: "images/เกาะกูด.jpg", link: "https://travel.kapook.com/view286120.html" },
    { name: "เกาะหมาก", type: "place", img: "images/เกาะหมาก.jpg", link: "https://travel.kapook.com/view157049.html" },

    { name: "สามพันโบก", type: "place", img: "images/สามพันโบก.jpg", link: "https://travel.kapook.com/view41074.html" },
    { name: "ผาชะนะได", type: "place", img: "images/ผาชะนะได.jpg", link: "https://travel.kapook.com/view58717.html" },
    { name: "วัดร่องขุ่น", type: "place", img: "images/วัดร่องขุ่น.jpg", link: "https://travel.kapook.com/view1522.html" },
    { name: "วัดร่องเสือเต้น", type: "place", img: "images/วัดร่องเสือเต้น.jpg", link: "https://travel.kapook.com/view158383.html" },
    { name: "ภูชี้ฟ้า", type: "place", img: "images/ภูชี้ฟ้า.jpg", link: "https://travel.kapook.com/view675.html" },

    { name: "ทะเลบัวแดง อุดรธานี", type: "place", img: "images/ทะเลบัวแดง อุดรธานี.jpg", link: "https://travel.kapook.com/view297647.html" },
    { name: "หินสามวาฬ", type: "place", img: "images/หินสามวาฬ.jpg", link: "https://travel.kapook.com/view148976.html" },
    { name: "วัดพระธาตุพนม", type: "place", img: "images/วัดพระธาตุพนม.jpg", link: "https://travel.kapook.com/view268578.html" },
    { name: "อุทยานแห่งชาติภูกระดึง", type: "place", img: "images/อุทยานแห่งชาติภูกระดึง.jpg", link: "https://travel.kapook.com/view477.html" },
    { name: "แก่งกระจาน", type: "place", img: "images/แก่งกระจาน.jpg", link: "https://travel.kapook.com/view275800.html" },

    { name: "เกาะหลีเป๊ะ", type: "place", img: "images/เกาะหลีเป๊ะ.jpg", link: "https://travel.kapook.com/view154070.html" },
    { name: "ตรัง ทะเลแหวก", type: "place", img: "images/ตรัง ทะเลแหวก.jpg", link: "https://travel.kapook.com/view257926.html" },
    { name: "ถ้ำมรกต", type: "place", img: "images/ถ้ำมรกต.jpg", link: "https://travel.kapook.com/view25008.html" },
    { name: "เกาะตาชัย", type: "place", img: "images/เกาะตาชัย.jpg", link: "https://travel.kapook.com/view21754.html" },
    { name: "หมู่เกาะสิมิลัน", type: "place", img: "images/หมู่เกาะสิมิลัน.jpg", link: "https://travel.kapook.com/view668.html" },

    { name: "ถนนคนเดินเชียงใหม่", type: "place", img: "images/ถนนคนเดินเชียงใหม่.jpg", link: "https://travel.kapook.com/view221014.html" },
    { name: "เยาวราช กรุงเทพ", type: "place", img: "images/เยาวราช กรุงเทพ.jpg", link: "https://travel.kapook.com/view282430.html" },
    { name: "เอเชียทีค", type: "place", img: "images/เอเชียทีค.jpg", link: "https://travel.kapook.com/view40323.html" },
    { name: "ไอคอนสยาม", type: "place", img: "images/ไอคอนสยาม.jpg", link: "https://travel.kapook.com/view202033.html" },
    { name: "เซ็นทรัลเวิลด์", type: "place", img: "images/เซ็นทรัลเวิลด์.jpg", link: "https://travel.kapook.com/view286299.html" },

    // ===== ร้านอาหาร =====
    { name: "เจ๊ไฝ กรุงเทพ", type: "food", img: "images/เจ๊ไฝ กรุงเทพ.jpg", link: "https://hilight.kapook.com/view/164755" },
    { name: "เจ๊โอว ข้าวต้มเป็ด", type: "food", img: "images/เจ๊โอว ข้าวต้มเป็ด.jpg", link: "https://th.tripadvisor.com/" },
    { name: "After You Dessert Cafe", type: "food", img: "images/After You Dessert Cafe.jpg", link: "https://travel.kapook.com/view14288.html/" },
    { name: "Greyhound Cafe", type: "food", img: "images/Greyhound Cafe.jpg", link: "https://www.facebook.com/coundsheckjourney/" },
    { name: "Somtam Nua", type: "food", img: "images/Somtam Nua.jpg", link: "https://www.instagram.com/somtamnua/" },
    { name: "Krua Apsorn", type: "food", img: "images/Krua Apsorn.jpg", link: "https://www.instagram.com/kruaapsorn/?hl=th" },
    { name: "ThongSmith", type: "food", img: "images/thongsmith.jpg", link: "https://www.wongnai.com/reviews/dad0efdb979749cfb625ad715a3d634e" },
    { name: "P'Aor Tom Yum", type: "food", img: "images/Pee Aor Tom Yum Goong.jpg", link: "https://www.tripadvisor.com/Restaurant_Review-g293916-d3703958-Reviews-Pee_Aor_Tom_Yum_Goong-Bangkok.html" },

    { name: "Surf & Turf Pattaya", type: "food", img: "images/Surf & Turf Pattaya.jpg", link: "https://www.facebook.com/Surfandturf.pattaya/" },
    { name: "The Glass House Pattaya", type: "food", img: "images/The Glass House Pattaya.jpg", link: "https://www.facebook.com/NineBaTieww/posts/the-glass-house-%E0%B8%93-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%8A%E0%B8%B4%E0%B8%A5-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B5-%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B9%82%E0%B8%94%E0%B8%99%E0%B8%9E%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B9%82%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%9E%E0%B8%B1/1760899980662179/" },
    { name: "Rimpa Lapin", type: "food", img: "images/Rimpa Lapin.jpg", link: "https://th.trip.com/moments/detail/nakhon-ratchasima-1447065-13779675/" },
    { name: "Blue Elephant", type: "food", img: "images/Blue Elephant.jpg", link: "https://th.trip.com/moments/detail/phuket-364-16620682/" },
    { name: "Bo.lan", type: "food", img: "images/Bo.lan.jpg", link: "https://www.instagram.com/bo.lan_essentially_thai/" },
    { name: "Nahm", type: "food", img: "images/Nahm.jpg", link: "https://www.facebook.com/nahmbangkok/?locale=th_TH" },
    { name: "Eat Me Restaurant", type: "food", img: "images/Eat Me Restaurant.jpg", link: "https://eatmerestaurant.com/" },
    { name: "Cafe del Mar Phuket", type: "food", img: "images/Cafe del Mar Phuket.jpg", link: "https://phuket.cafedelmar.com/" },
    { name: "Kan Eang @ Pier", type: "food", img: "images/Kan Eang @ Pier.jpg", link: "https://kaneang-pier.com/" },

    // ===== โรงแรม =====
    { name: "Mandarin Oriental Bangkok", type: "hotel", img: "images/Mandarin Oriental Bangkok.jpg", link: "https://www.mandarinoriental.com/en/bangkok/chao-phraya-river/offers?src=ps.brand.mobkk.ggl&gclsrc=aw.ds&gad_source=1&gad_campaignid=22456704376&gbraid=0AAAAApftVKk8ytLSaENfdwK-kuGA216P5&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzFFgDFCsMOUNRzTr-NQ3rFha4TqYPHtYpOxaT4dR2gE6JNGvSpdukhoCyN4QAvD_BwE" },
    { name: "The Siam Hotel", type: "hotel", img: "images/The Siam Hotel.jpg", link: "https://www.facebook.com/thesiambangkok/?locale=th_TH" },
    { name: "Banyan Tree Bangkok", type: "hotel", img: "images/Banyan Tree Bangkok.jpg", link: "https://www.facebook.com/banyantreebangkok/?locale=th_TH" },
    { name: "Lebua at State Tower", type: "hotel", img: "images/Lebua at State Tower.jpg", link: "https://lebua.com/hotels/lebua-at-state-tower/" },
    { name: "Centara Grand", type: "hotel", img: "images/Centara Grand.jpg", link: "https://th.tripadvisor.com/Hotel_Review-g293916-d850401-Reviews-Centara_Grand_at_CentralWorld-Bangkok.html" },

    { name: "Hilton Pattaya", type: "hotel", img: "images/Hilton Pattaya.jpg", link: "https://www.hilton.com/en/hotels/bkkhphi-hilton-pattaya/?WT.mc_id=zPADA0TH1HI2PSH3paid_ggl4DOMBPP_Apr5SiteGGL_ObjROAS_TacBPP_TarKeyword_SMTH_FrmtRSAs_CrNText_DvceAll_LPOHW6BKKHPHI7EN8acctid=7389362749-campid=16821069835-adgrpid=137930412640&&&&&gclsrc=aw.ds&gad_source=1&gad_campaignid=16821069835&gbraid=0AAAAADnjLGPR4_P_1LtE-ekhnY-eMDLlS&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzN6sED7rzcL7T70up95dJsKuSmf_MUeKCBoHvhfmaiTgH-bjNNsWfRoCux0QAvD_BwE" },
    { name: "Cape Dara Resort", type: "hotel", img: "images/Cape Dara Resort.jpg", link: "https://capedarapattaya.com/th/" },
    { name: "Dusit Thani Pattaya", type: "hotel", img: "images/Dusit Thani Pattaya.jpg", link: "https://www.dusit.com/dusitthani-pattaya/" },
    { name: "Amari Pattaya", type: "hotel", img: "images/Amari Pattaya.jpg", link: "https://www.amari.com/pattaya" },
    { name: "Hard Rock Hotel Pattaya", type: "hotel", img: "images/Hard Rock Hotel Pattaya.jpg", link: "https://hotel.hardrock.com/pattaya/?utm_campaign=shrss_hotel_hard-rock-hotel-pattaya_websitelisting&utm_medium=referral&utm_source=gmb" },

    { name: "Sri Panwa Phuket", type: "hotel", img: "images/Sri Panwa Phuket.jpg", link: "https://www.sripanwa.com/" },
    { name: "The Naka Island", type: "hotel", img: "images/The Naka Island.jpg", link: "https://www.marriott.com/en-us/hotels/pyxlc-the-naka-island-a-luxury-collection-resort-and-spa-phuket/overview/?cid=NAT_google_hotel_url" },
    { name: "Keemala Phuket", type: "hotel", img: "images/Keemala Phuket.jpg", link: "https://www.keemala.com/" },
    { name: "Katathani Phuket", type: "hotel", img: "images/Katathani Phuket.jpg", link: "https://www.katathani.com/" },
    { name: "SAii Phi Phi Island Village", type: "hotel", img: "images/SAii Phi Phi Island Village.jpg", link: "https://www.saiihotels.com/phiphiisland-village/?utm_source=google&utm_medium=organic&utm_campaign=saiiphiphiislandvillage&utm_term=gbp" },

    { name: "Four Seasons Chiang Mai", type: "hotel", img: "images/Four Seasons Chiang Mai.jpg", link: "https://www.facebook.com/photo/?fbid=1225276992968884&set=a.629671502529439" },
    { name: "Dhara Dhevi Chiang Mai", type: "hotel", img: "images/Dhara Dhevi Chiang Mai.jpg", link: "https://www.facebook.com/DharaDheviCNX/?locale=th_TH" },

];

function display(data){
    const box = document.getElementById("results");
    box.innerHTML = "";

    data.forEach(p => {
        box.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.type}</p>
            <a href="${p.link}" target="_blank">ดูเพิ่มเติม</a>
        </div>
        `;
    });
}

function searchPlace(){
    const keyword = document.getElementById("search").value;
    const result = places.filter(p => p.name.includes(keyword));
    display(result);
}

function filter(type){
    const result = places.filter(p => p.type === type);
    display(result);
}

display(places);