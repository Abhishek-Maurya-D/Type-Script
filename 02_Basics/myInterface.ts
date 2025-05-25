interface User{
    readonly dbId : number,
    email : string,
    userId : number,
    googleId?: string,
    startTrail: () => string
    getCoupon(couponname: string): number
};

const Abhishek : User = {dbId: 22, email: "abhismaurya12@gmail.com", userId: 203495,
    startTrail: () => {
        return "Trail Started"
    },
    getCoupon: () => {
        return 10
    }
};
Abhishek.email = "h@hc.com"
// Abhishek.dbId = 33;