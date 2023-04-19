// 변수

function Item(title, price){
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다`);
    }
    // return this
}

const item1 = new Item("인형",3000);
const item2 = new Item("지갑",4000);
const item3 = new Item("가방",5000);

item3.showPrice();