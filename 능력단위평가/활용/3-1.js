let button=document.querySelector('button');
let p=document.querySelector('p');
button.addEventListener('click',()=>{
    p.textContent="버튼이 클릭되었습니다!"
    console.log('Button clicked!');
});