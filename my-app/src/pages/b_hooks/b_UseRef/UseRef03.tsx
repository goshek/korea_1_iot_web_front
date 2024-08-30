import React, { useRef, useState } from "react";

/*
    ! 배열 렌더링 (추가, 조회, 수정, 삭제 CRUD)
    >> 해당 광정에서 배열 내부의 각 요소를 구분지을 id값이 필요

    ? 동적 배열 렌더링
    : 자바스크립트 내장 함수(map, filter) 사용

    ? 장바구니 구현
    장바구니의 타입 정의
*/
interface Iitem {
  id: number;
  name: string;
  amount: number;
}
//기존 장비구니 목록
const initialItems: Iitem[] = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "바나나", amount: 3 },
  { id: 3, name: "수박", amount: 1 },
];

/*
    # 자식 컴포넌트
    : 장바구니 항목 한 개
    >> 부모로 부터 각 아이템을 인자로 받아 하나의 장바구니 항목을 생성
*/
interface IitemProps {
  i: Iitem;
}

//function Item({item}: {item: Iitem}){}
function Item({ i }: IitemProps) {
  return (
    <div>
      <p>
        <b>{i.name}</b>
        amout: {i.amount}
      </p>
    </div>
  );
}

/*
    ! useRef를 사용한 고유한 id값 생성
    # '각 아이템'을 보여주는 컴포넌트
    : 수정, 삭제 기능 포함
*/
interface ItemComponentProps {
  item: Iitem; // id, name, amount
  onRemove: (id: number) => void;
  onUpdate: (id: number, amount: number) => void;
}
const ItemComponent = ({ item, onRemove, onUpdate }: ItemComponentProps) => {
  return (
    <div>
      <strong>{item.name}</strong>
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onUpdate(item.id, Number(e.target.value))}
      />
      <button onClick={()=>onRemove(item.id)}>삭제</button>
    </div>
  );
};

// # 부모 컴포넌트
export default function UseRef03() {
  const [items, setItems]= useState<Iitem[]>(initialItems);
  /*
    useRef
    >> 컴포넌트가 리렌더링되더라도 해당 값은 유지
    const 참조값을 담을 변수= useRef<데이터의타입>(초기값);
  */
  //let newId= 4; newId 값 출력으로 useRef 사용 이유 알아보기
  const nextId= useRef<number>(4);
  // ? 새로운 아이템을 생성하는 함수
  const handleCreateItem= (name: string, amount: number)=>{
    const newItem={
        id: nextId.current++,
        name,
        amount
    };
    setItems([...items, newItem]);
    // newId +=1;
    // console.log(newId);
  }

  // ? id와 수량을 전달받아 데이터를 수정하는 함수
  const handleUpdateAmount=(id: number, amount: number)=>{
    setItems(
        items.map(item=> item.id=== id? {...item, amount}: item)
    )
  }

  // ? id값을 전달 받아 삭제하고자 하는 요소를 filtering하는 함수
  const handleRemove= (id:number)=>{
    setItems(items.filter(item=> item.id !==id));
  }

  return (
    <div>
      {/* <Item i={initialItems[0]} />
        <Item i={initialItems[1]} />
        <Item i={initialItems[2]} /> */}
      {/* {initialItems.map((item, index)=>(
            <Item i={item} />
        ))}; */}
      {initialItems.map((item) => (
        <Item i={item} key={item.id} />
      ))}
      <hr />
      <button onClick={()=>handleCreateItem('새로운 항목', 1)}>새 항목 추가</button>
      <>
        {items.map(item=>(
            <div key={item.id}>
                <ItemComponent item={item} onRemove={handleRemove} onUpdate={handleUpdateAmount} />
            </div>
        ))}
      </>
    </div>
  );
}
