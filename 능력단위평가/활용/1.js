class User{ // User클래스 생성
    constructor(name, age, email){ // 기본 틀
        this.name= name;
        this.age= age;
        this.email= email;
    }
    printProduct(){
        console.log(`이름: ${this.name}\n나이:${this.age}\n이메일:${this.email}`);
    }
}

class Product{ // Product 클래스 생성
    constructor(name, price) { // 기본 틀
        this.name= name;
        this.price= price;
    }
    printProduct(){
        console.log(`상품명: ${this.name}, 상품가격: ${this.price}`);
    }
}

class Order{ //Order 클래스 생성
    constructor(user, product, quantity) {
        this.user=user;
        this.product=product;
        this.quantity= quantity;
    }
    printOrderSummary(){    //주문 요약 출력
        console.log('===주문 정보===');
        console.log(`주문하신 고객 명: ${this.user.name}`);
        console.log(`주문하신 상품: ${this.product.name} X ${this.quantity}`);
        console.log(`총 가격: ${this.product.price*this.quantity}`);
    }
}
let user0= new User('Gwon',20,'korea123@naver.com');    //새로운 User 객체 생성
let product0= new Product('SQLD_BOOK', '14000');    // 새로운 Product 객체 생성
let order0= new Order(user0, product0, 57);  // 새로운 Order 객체 생성
order0.printOrderSummary(); // 요약 출력