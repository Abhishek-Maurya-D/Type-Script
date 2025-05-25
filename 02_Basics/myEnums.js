// 1
// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2
// if(seat === AISLE){
// }
// 2
// enum SeatChoice{
//     AISLE = 10,
//     MIDDEL = 23,
//     WINDOW,
//     FOURTH
// }
// const AMseat  = SeatChoice.AISLE;
// 3
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDEL"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice["FOURTH"] = "fourth";
})(SeatChoice || (SeatChoice = {}));
var AMseat = SeatChoice.AISLE;
