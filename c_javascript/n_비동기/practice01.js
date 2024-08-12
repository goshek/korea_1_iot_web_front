/*
    practice01.js
    JSONplaceholder
    : 무료 REST API 서비스
    >> 가짜 데이터를 제공하는 Mock Server(가짜 서버)
    >> 게시글, 댓글, 사용자, 사진등의 정보를 JSON형식으로 제공

    https://jsonplaceholder.typicode.com
    https://jsonplaceholder.typicode.com/users
    https://jsonplaceholder.typicode.com/원하고자하는 데이터 배열명
    https://jsonplaceholder.typicode.com/원하고자하는 데이터 배열명/id
*/
// ! async/ await를 사용하여 JSONplaceholder에서 데이터를 가져오는 함수
async function fetchPosts(postId){
    try{
        // 함수 내의 로직
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!response.ok){
            throw new Error(`HTTP error: status: ${response.status}`);
        }
        const posts= await response.json();
        console.log(posts);
    }catch(e){
        console.log(`게시물 가져오기 실패: ${e.message}`);
    }
}

fetchPosts(1);