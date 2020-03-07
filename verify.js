SendOTP(mob,otp).then((response) => {
    console.log(response.reason);
}).catch((error) => {
    console.log(error);
});




let SendOTP = (mob,otp) => {
    return new Promise((resolve, reject) => {
        let url=`https://www.smsgateway.center/OTPApi/send?userId=imshubham27&password=r2Kvzqoe&mobile=91${mob}otp=${otp}}&sendMethod=verify&format=json`;
        let req = https.get(url, (res) => {
            let data = "";
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                let newData = JSON.parse(data);
                console.log("newData", newData);
                newData.status==="success" ? resolve(newData) : reject(newData.reason);
            });
        });
        req.on('error', function (err) {
            reject(err.message);
        });
    });
};