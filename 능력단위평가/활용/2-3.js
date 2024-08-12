/*
    ! 주차 관리 시스템
    주차 가능한 상태등을 판단하여 차의 입*출차 시스템 구현

    주차 시간을 현재 시간과의 차를 계산하여 금액 출력

    # 프로젝트 기능 정의
    1) 주차장(객체)
    - 속성: 차들
    - 기능: 차를 주차, 주차된 차량 리스트 및 정보, 차량 출차, 주차 가능 상태 가능 여부등

    2) 차(객체)
    - 속성: 차량의 번호, 차량 종류, 주차 시간
*/
class Cars{
    constructor(carNum, carType, parkingArea){
        this.carNum= carNum;
        this.carType= carType;
        this.parkingArea=parkingArea;
    }
}

let parkinArea=['A', 'B', 'C'];
let count=0;

class parking_Lot{
    constructor(){
        this.carList=[];
    }

    displayParkedCar(){
        console.log('===Parked Car===');
        this.carList.forEach(car=>console.log(`${car.carNum}, ${car.carType}, ${car.parkingArea}`));
    }

    parkIn(carNum, carType){
        if(count>=3){
            console.log('주차가능한 공간이 없습니다.');
        }
        else{
            const parking= new Cars(carNum, carType,parkinArea[count++]);
            this.carList.push(parking);
        }
    }

    parkOut(parkedCarNum){
        console.log(this.carList[0].carNum);
        this.carList=this.carList.filter(wantFilter=>{
            return wantFilter.carNum!==parkedCarNum;
        });
}
}

const gwonParkingLot= new parking_Lot();
gwonParkingLot.parkIn("123","SUV");
gwonParkingLot.parkIn("456","경차");
gwonParkingLot.parkIn("789","대형");
gwonParkingLot.displayParkedCar();
gwonParkingLot.parkOut("456");
gwonParkingLot.displayParkedCar();
