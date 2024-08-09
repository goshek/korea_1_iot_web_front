/*
    ! 도서관 관리 시스템
    각 도서관의 책 관리 시스템을 구현

    # 프로젝트 기능 정의
    1) 도서관(객체)
    -속성: 책들
    -기능: 책을 추가, 도서목록을 출력, (특정) 도서를 대여, (특정)도서를 반납

    2) 책(객체)
    -속성: 책 고유의 Id, 책의 제목, 책의 저자, 책의 대여 가능 여부

    # 프로젝트 객체 예시
*/
let exampleLibrary={
    books: [], // 도서관의 책 목록을 저장하는 배열
    //대양한 메서드 정의
}
let exampleBook={
    id: 1,
    title: '아기돼지 삼형제',
    author:' Unkwon',
    isAvailable: true //기본값
}

/*
    # 프로젝트 구현
    ? Book클래스: 각 책의 정보 저장 & 대여 및 반납 기능 정의
*/
class Book{
    //생성자 함수(메소드)
    //: 클래스 호출시 자동으로 실행되는 함수 >> 객체 생성 시 속성값 initialize
    constructor(id, title, author) {
        //this 키워드- 해당 클래스로 생성되어 사용중인 현재의 객체
        this.id=id;
        this.title=title;
        this.author=author;
        this.isAvailable= true;
    }

    rent(){ //책 대여
        if(this.isAvailable=== true){ // 책이 대여 가능한 상태
            this.isAvailable= false;
            console.log(`${this.title} has been rented`);
        }
        else{
            console.log(`${this.title} is currently not available`);
        }
    }

    returnBook(){ // 책 반납
        this.isAvailable= true;
        console.log(`${this.title} has been returned`);
    }
}
/*
    ? Library 클래스: Book 객체의 목록을 관리 (추가, 출력, 대여 및 반납)
*/
class Library{
    constructor(){
        this.books=[]; // 도서관의 도서 목록을 저장하는 배열
    }
    /*
        cf) 클래스의 메소드 정의시 함수의 형태 이지만 function 키워드 사용x

        책의 추가
    */
    addBook(title, author){
        // 새로운 책 객체를 생성 (순차적 id 할당)
        const newBook= new Book(this.books.length+1, title, author);
        this.books.push(newBook);
        console.log(`${title}책이 도서관에 추가되었습니다.`);
    }
    /*

        책 목록 출력
    */
    displayBooks(){
        console.log('=====Library=====');
        this.books.forEach(book=>{
            console.log(`${book.id}: ${book.title} by ${book.author} \n ${book.isAvailable ? '대여가능': '대여불가능'}`);
        });
    }
    //특정 id 책 대여
    rentBook(id){
        //cf) findIndex: 일치하는 요소의 인덱스 번호를 반환
        //    find: 일치하는 요소의 요소값을 반환 >>객체
        const book= this.books.find(book=>book.id===id);
        if(book){
            book.rent();
        }
        else{
            console.log('해당 책을 찾을 수 없습니다.');
        }
    }

    // 특정 id 책 반납
    returnBook(id){
        const book=this.books.find(book=>book.id=== id);
        if(book){
            book.returnBook();
        }
        else{
            console.log('해당 책을 찾을 수 없습니다.');
        }
    }
}

// # 프로젝트 실행
const seaoulLibrary= new Library();
seaoulLibrary.addBook('java배우기', 'gwon');
seaoulLibrary.addBook('c배우기', 'go');
seaoulLibrary.addBook('c++배우기', 'on');
seaoulLibrary.addBook('python배우기', 'hyuck');
seaoulLibrary.displayBooks();
seaoulLibrary.rentBook(1);
seaoulLibrary.displayBooks();
seaoulLibrary.rentBook(1);

/*
    cf) 인스턴스=== '객체'
    : 클래스를 통해 생성된 객체
    >> 메모리 주소에 할당된 객체
    >> 각 인스턴스는 독립된 객체
*/