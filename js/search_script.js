//////////////// VARIABLES ///////////////////////////////////////////////////////////////////////////////
var search_box= document.getElementsByClassName('search-box');
var box = search_box[0];
var search_btn= document.getElementsByClassName('search-btn');
var search = search_btn[0];
var input = document.getElementById("q");
var cancel_btn =document.getElementsByClassName('cancel-btn');
var cancel = cancel_btn[0];  
search.addEventListener('click',add_animation())   ;
cancel.addEventListener('click',remove_animation());
function add_animation(){
   return function(){
        search_action=setTimeout(()=>{
           box.style.width="350px";
           box.style.transition= "1s";
           input.style.opacity= 1;
           input.style.direction= "rtl";
           input.style.transition= "1s";
           search.style.height= "50px";
           search.style.width= "50px";
           search.style.background= "#3c90ff";
           search.style.color= "#fff";
           search.style.transition= "1s";
           cancel.style.right= "-50px";
           cancel.style.opacity= 1;
           cancel.style.color= "red"
           cancel.style.transition= "1s";
           
       },0);
    }
    clearInterval(search_action);
    
}
function remove_animation(){
    return function(){
        search_deaction=setTimeout(()=>{
           box.style.width="0";
           box.style.transition= "1s";
           input.style.opacity= 0;
           input.style.direction= "rtl";
           input.style.transition= "1s";
           search.style.height= "50px";
           search.style.width= "50px";
           search.style.background= "#3c90ff";
           search.style.color= "#fff";
           search.style.transition= "1s";
           cancel.style.right= "0";
           cancel.style.opacity=0;
           cancel.style.color= "red"
           cancel.style.transition= "1s";
           
       },0);
    }
    clearInterval(search_deaction);
    
}
///////////////////////////////////////////////////////////////////////////////////////
// async function bestFetch() {
//     try {
//         const first = await fetch('file:// ../json/foods.json'); //<-- wait for the fetch to finish and return the resolved value. 
//         console.log("correct")
//        let json = await first.json(); //<-- use the const first, not first_name
//        console.log(first);
//      }
//      catch(e) {
//        console.log('Error!', e);
//      }
//     }
// input.onkeyup = function(event){
//     var target =input.value;
//     loadData();
//     if(event.keyCode == 13){
//         show_result();
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////
// function loadData() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "../json/foods.json",true);
//     console.log(xhttp)
//     console.log(xhttp.readyState)

//     xhttp.onreadystatechange = function() {
//         console.log(xhttp.readyState)
//         console.log(xhttp.status)
//         console.log(xhttp.responseText)
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             var mydata = JSON.parse(xhttp.responseText);
           
//         }
//     };

//     xhttp.send();
// }
// loadData();
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// async function loadJSON (url) {
//     const res = await fetch(url);
//     return await res.json();
//   }
//   loadJSON('../json/foods.json').then(data => {
//     console.log(data[0].name);
//   });
//////////////////////////////////////////////////////////////////////////////////////////////////
// async function getData(){
//     try{
//       const response =  await import('../json/foods.json')
//       console.log(response)

//       return response.json()
//     }catch(err){
//         console.log(err)
//       return err
//     }
// }
// getData();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
data = {
    "product_groups": [{
            "group_id": 1,
            "group_title": "ساندویچ",
            "group_image": "images/burger-7-310x260.png",
            "group_products": [{
                    "product_id": 1,
                    "product_name": "ژامبون مرغ تنوری",
                    "product_type": ["normal"],
                    "product_price": [95000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "ژامبون مرغ",
                        "قارچ",
                        "پنیر",
                        "سس مخصوص"
                    ],
                    "product_energy": 45,
                    "product_protein": 83

                },
                {
                    "product_id": 2,
                    "product_name": "هات داگ مخصوص",
                    "product_type": ["normal"],
                    "product_price": [100000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "هات داگ",
                        "قارچ",
                        "پنیر",
                        "کاهو",
                        "خیارشور",
                        "گوجه"
                    ],
                    "product_energy": 45,
                    "product_protein": 83
                },
                {
                    "product_id": 3,
                    "product_name": "چیز برگر",
                    "product_type": ["normal", "double"],
                    "product_price": [110000, 155000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "همبرگر90 درصد",
                        "پنیر گودا",
                        "سس مخصوص",
                        "گوجه"
                    ],
                    "product_energy": 45,
                    "product_protein": 83
                },
                {
                    "product_id": 4,
                    "product_name": "رویال برگر",
                    "product_type": ["normal"],
                    "product_price": [193000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "همبرگر 90 درصد",
                        "ژامبون گوشت",
                        "قارچ",
                        "پنیر"
                    ],
                    "product_energy": 45,
                    "product_protein": 83
                }
            ]
        },
        {
            "group_id": 2,
            "group_title": "پیتزا",
            "group_image": "images/pizza-7-310x260.png",
            "group_products": [{
                "product_id": 5,
                "product_name": "پیتزا فیله مرغ",
                "product_type": ["mini", "normal", "large"],
                "product_price": [110000, 145000, 210000],
                "product_image": ["images/product-01-542x448.png",
                    "images/product-02-542x448.png",
                    "images/product-05-542x448.png"
                ],
                "product_content": [
                    "فیله مرغ",
                    "قارچ",
                    "فلفل دلمه",
                    "پنیر",
                    "گوجه",
                    "ذرت"
                ],
                "product_energy": 32,
                "product_protein": 79
            }, {
                "product_id": 6,
                "product_name": "پیتزا پنجره ای مخصوص",
                "product_type": ["mini", "normal", "large"],
                "product_price": [125000, 185000, 230000],
                "product_image": ["images/product-01-542x448.png",
                    "images/product-02-542x448.png",
                    "images/product-05-542x448.png"
                ],
                "product_content": [
                    "ژامبون بره",
                    "قارچ",
                    "پنیر",
                    "گوشت چرخ کرده",
                    "فلفل دلمه"
                ],
                "product_energy": 45,
                "product_protein": 83
            }, {
                "product_id": 7,
                "product_name": "پیتزا پپرونی",
                "product_type": ["mini", "normal", "large"],
                "product_price": [105000, 135000, 190000],
                "product_image": ["images/product-01-542x448.png",
                    "images/product-02-542x448.png",
                    "images/product-05-542x448.png"
                ],
                "product_content": [
                    "کالباس پپرونی",
                    "قارچ",
                    "پنیر",
                    "فلفل دلمه"
                ],
                "product_energy": 51,
                "product_protein": 56
            }]
        },
        {
            "group_id": 3,
            "group_title": "کباب",
            "group_image": "images/barbecue-7-310x260.png",
            "group_products": [{
                    "product_id": 8,
                    "product_name": "کوبیده",
                    "product_type": ["single", "double"],
                    "product_price": [45000, 85000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "گوشت چرخ کرده",
                        "پیاز",
                        "نمک",
                        "جوش شیرین"
                    ],
                    "product_energy": 45,
                    "product_protein": 83
                },
                {
                    "product_id": 9,
                    "product_name": "برگ",
                    "product_type": ["normal"],
                    "product_price": [130000],
                    "product_image": ["images/product-01-542x448.png",
                        "images/product-02-542x448.png",
                        "images/product-05-542x448.png"
                    ],
                    "product_content": [
                        "گوشت گوسفندی",
                        "نمک",
                        "آبلیمو"
                    ],
                    "product_energy": 45,
                    "product_protein": 83
                }
            ]
        }
    ]
}
//////////////////EVENT//////////////////////////////////////////////////////////////////////
input.addEventListener('keyup',()=>{
    if(event.keyCode===13){
        var result = new Array;
        result_box.innerText="";
    }
    finder(event,result);
    table(result);
});
////////////////VARIABLE///////////////////////////////////////////////////////////////////////////////
var result_box = document.getElementById('search-result-box');
var flag = false;
var products =getallproducts();
////////////////ALL PRODUCTS///////////////////////////////////////////////////////////////////////////////
function getallproducts() {
    var products = new Array;
    for (let index = 0; index < data.product_groups.length; index++) {
        const element = data.product_groups[index];
        for (let k = 0; k < element.group_products.length; k++) {
            const element2 = element.group_products[k];
            products.push(element2)
        }
    }
    return products
}
////////////////FINDING TARGET///////////////////////////////////////////////////////////////////////////////
function finder(event,result){
    var search_target = input.value;
    if(search_target === ""){
        replace_contant()
    }else{
        for (let q = 0; q < products.length; q++) {
            const element3 = products[q];
            const element4 = products[q].product_name;
            if(element4.includes(search_target)){
                if(event.keyCode===13){
                    if(!result.includes(element3)){
                        result.push(element3);
                        flag = true;
                    }
                }
            }
        }
        if(flag === false){
            replace_contant() 
        }
    }
    return result; 
};
////////////////RETURNING RESULT VALUES///////////////////////////////////////////////////////////////////////////////
function table(result){
    var item = result;
    for (let h = 0; h < item.length; h++) {
        const picture = item[h].product_image[0];
        const name = item[h].product_name;
        const size = item[h].product_type[0];
        const price = item[h].product_price[0];
        creator(picture,name,size,price);

    }
}
////////////////MAKING TABLE///////////////////////////////////////////////////////////////////////////////
function creator(picture,name,size,price) {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var img = document.createElement('img');
    var h3 = document.createElement('h3');
    var strong1 = document.createElement('strong');
    var strong2 = document.createElement('strong');
    img.setAttribute('class','search-box-img')
    img.setAttribute('src',picture)
    div2.appendChild(img)
    h3.innerText=name
    div2.appendChild(h3)
    div2.classList.add('search-box-img-title')
    div1.appendChild(div2)
    strong1.innerText=size;
    strong2.innerText=price;
    div1.appendChild(strong1)
    div1.appendChild(strong2)
    div1.classList.add('search-box-product')
    result_box.appendChild(div1)
}
////////////////REFRESH PAGE CONTENT ///////////////////////////////////////////////////////////////////////////////
function replace_contant() {
    result_box.innerText="";
    var header = document.createElement('h1');
    header.innerText="موردی یافت نشد . " 
    result_box.appendChild(header) 
};