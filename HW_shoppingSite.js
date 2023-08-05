
// 初始化變數。
let itemCart=0;  //總和購物車貨物
// 各自購物車貨物
let item1=0; 
let item2=0;
let item3=0;
let item4=0;
let item5=0;
let item6=0;
let item7=0;
let item8=0;
let item9=0;
let item10=0;
let showFlag=1;



// 獲取按鈕
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
const btn7=document.getElementById("btn7");
const btn8=document.getElementById("btn8");
const btn9=document.getElementById("btn9");
const btn10=document.getElementById("btn10");

// 加入購物車
const addtoCart=function addtoCart(event){
    btnName=event.target.id;
    // console.log("event ",event);
    // console.log("event.target ",event.target);
    // console.log("event.target.id ",event.target.id);

    let buyAmount=window.prompt("Bring to cart:","1");
    buyAmount=Number(buyAmount);
    itemCart+=buyAmount;
    cart.innerHTML=itemCart+" cute things";
    console.log(btnName);
    switch(btnName){
        case 'btn1':
            item1+=buyAmount;
            document.getElementById("toy1").innerText=toy1.substring(0,toy1.indexOf(":"))+" : "+item1;
            break;

         case 'btn2':
             item2+=buyAmount;
             document.getElementById("toy2").innerText=toy2.substring(0,toy2.indexOf(":"))+" : "+item2;
             break;
        case 'btn3':
            item3+=buyAmount;
            document.getElementById("toy3").innerText=toy3.substring(0,toy3.indexOf(":"))+" : "+item3;
            break;
            
            case 'btn4':
                item4+=buyAmount;
                document.getElementById("toy4").innerText=toy4.substring(0,toy4.indexOf(":"))+" : "+item4;
            break;
            case 'btn5':
                item5+=buyAmount;
                document.getElementById("toy5").innerText=toy5.substring(0,toy5.indexOf(":"))+" : "+item5;
            break;
            case 'btn6':
                item6+=buyAmount;
                console.log("it's here.", item6);
                document.getElementById("toy6").innerText=toy6.substring(0,toy6.indexOf(":"))+" : "+item6;
            break;
            case 'btn7':
                item7+=buyAmount;
                document.getElementById("toy7").innerText=toy7.substring(0,toy7.indexOf(":"))+" : "+item7;
            break;
            case 'btn8':
                item8+=buyAmount;
                document.getElementById("toy8").innerText=toy8.substring(0,toy8.indexOf(":"))+" : "+item8;
            break;
            case 'btn9':
                item9+=buyAmount;
                document.getElementById("toy9").innerText=toy9.substring(0,toy9.indexOf(":"))+" : "+item9;
            break;
            case 'btn10':
                item10+=buyAmount;
                document.getElementById("toy10").innerText=toy10.substring(0,toy10.indexOf(":"))+" : "+item10;
                break;
    }
   
}

// 按鈕點擊，引發事件。
btn1.onclick=addtoCart;
btn2.onclick=addtoCart;
btn3.onclick=addtoCart;
btn4.onclick=addtoCart;
btn5.onclick=addtoCart;
btn6.onclick=addtoCart;
btn7.onclick=addtoCart;
btn9.onclick=addtoCart;
btn8.onclick=addtoCart;
btn10.onclick=addtoCart;


// 
cart=document.getElementById("cart")
cart.innerHTML=itemCart+" cute things";

//存儲的是item的資料 (Volodymyr Hryshchenko : (None))。
let toy1=document.getElementById("toy1").innerText;
let toy2=document.getElementById("toy2").innerText;
let toy3=document.getElementById("toy3").innerText;
let toy4=document.getElementById("toy4").innerText;
let toy5=document.getElementById("toy5").innerText;
let toy6=document.getElementById("toy6").innerText;
let toy7=document.getElementById("toy7").innerText;
let toy8=document.getElementById("toy8").innerText;
let toy9=document.getElementById("toy9").innerText;
let toy10=document.getElementById("toy10").innerText;


//點擊clear，貨物都丟棄。
let clear=document.getElementById("clear");
clear.onclick= function() {
    if (itemCart ==0 ){
        window.alert("No items in the cart.");
    }
    else{
        itemCart=0;
        item1=0;
        item2=0;
        item3=0;
        item4=0;
        item5=0;
        item6=0;
        item7=0;
        item8=0;
        item9=0;
        item10=0;

        cart.innerHTML=itemCart+" cute things";
        // console.log(toy1) 復原到最一開始的狀態。Volodymyr Hryshchenko : (None)
        document.getElementById("toy1").innerText=toy1;
        document.getElementById("toy2").innerText=toy2;
        document.getElementById("toy3").innerText=toy3;
        document.getElementById("toy4").innerText=toy4;
        document.getElementById("toy5").innerText=toy5;
        document.getElementById("toy6").innerText=toy6;
        document.getElementById("toy7").innerText=toy7;
        document.getElementById("toy8").innerText=toy8;
        document.getElementById("toy9").innerText=toy9;
        document.getElementById("toy10").innerText=toy10;
    }
    
} 


// 顯示詳細的購物清單
const showList=function showList(){
    
    let list=document.getElementsByClassName("itemList");
    console.log(list);

//flag用來判斷原本清單是否出現。
    if (showFlag==1){
        list[0].style.color="#FFFFFF"; //白色，顯示
        list[1].style.color="#FFFFFF";
        showFlag=0;
    }
    else {
        list[0].style.color="#000000";
        list[1].style.color="#000000";
        showFlag=1; //
    }
}

// 點擊show按鈕，引發事件。
let show=document.getElementById("show")
show.onclick=showList;


let mybox=document.getAnimations

// ?17/07
// 透過JS控制CSS