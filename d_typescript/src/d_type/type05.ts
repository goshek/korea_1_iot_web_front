export const tmp='';
/*
    ! Intersection type
    : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 단일 타입을 생성
    >> 여러 타입을 모두 만족하는 하나의 타입
    >> And 연산자
    >> &기호를 사용하여 구현

    ? 사용 방법
    type 타입별칭= Type1 & Type2 ...
*/
type Employee={
    name: string;
    startDate: Date;
}

type Manager= Employee & {Group: string};
let managerA: Manager={
    name: 'gwon',
    startDate: new Date(),
    Group: '개발부'
};
/*
    ? 특징
    -타입 결합
    : 여러 타입의 속성을 결합하여 새로운 타입을 생성
    : 코드의 재사용성+ 복잡한 타입의 조합 가능
*/
type Admin= {
    isAdmin: boolean;
}
type Use={
    id: string,
    pwd: string
}
type AdminUser= Admin& Use;
function createAdminUser(user: Use): AdminUser{
    return {...user, isAdmin: true};
}
let newAdminUser: Use={
    id: 'qwe123',
    pwd: 'abc123'
};
let adminUser1= createAdminUser(newAdminUser);
console.log(adminUser1);
