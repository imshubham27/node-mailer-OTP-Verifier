SendOTP(mob).then((response) => {

    console.log(response.reason);
}).catch((error) => {
    console.log(error);
});




let SendOTP = (mob) => {
    return new Promise((resolve, reject) => {
        let req = https.get(`https://www.smsgateway.center/OTPApi/send?userId=imshubham27&password=r2Kvzqoe&mobile=91${mob}&codeExpiry=60&msg=Hi%20,%20Welcome%20to%20Lokalwala%20and%20Your%20OTP%20is%20$otp$&codeLength=4&codeType=num&senderId=SMSGAT&renew=false&format=json&sendMethod=generate`, (res) => {
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


