export const tmp=''
/*
    타입을 정의해서 사용자의 데이터를 요청하는 로직 작성
    ! 1. 사용자의 데이터에 대한 응답 정의(타입 별칭)
*/
type Success={
    name: string;
    email: string;
};
type Fail={
    error: string;
}
type FetchResponse= Success | Fail;

// ! 2. 사용자의 데이터 요청에 대한 응답을 처리하는 함수 정의
function handleResponse(response: FetchResponse){
    // async/ await
    // 성공 또는 실패의 데이터를 처리하는 함수
    if('error' in response){
        console.log(response.error);
    }
    else{
        console.log(`${response.name}, ${response.email}`);
    }
};

// ! 3. 비동기 작업을 사용하여 JSONPlaceholder에서 사용자 데이터를 가져오는 함수 정의
async function fetchUserData(userId: number){
    // https://jsonplaceholder.typicode.com/users >>사용자 10명의 데이터 모두 가져옴
    // https://jsonplaceholder.typicode.com/users/${userId} >> 해당 id의 사용자 한명의 데이터를 가져옴
    try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data= await response.join();
    }
    catch(e){
        handleResponse({error: e instanceof Error? e.message: 'Unkwon Error'});
        /*
            A instanceof B: A데이터가 B안에 포함되어 있는지의 여부를 확인
        */
    }
}