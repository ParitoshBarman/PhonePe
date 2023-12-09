let payDiv = document.querySelector("#pay");
let lodingDiv = document.querySelector("#loding");
let TransactionSuccessDiv = document.querySelector("#TransactionSuccess");
let transectionFail = document.querySelector("#transectionFail");
let form = document.querySelector("form");
let cardNumber = document.querySelector("#cardNumber");
let expiryDate = document.querySelector("#expiryDate");
let cvv = document.querySelector("#cvv");


setTimeout(() => {
    document.querySelector("#demoModal").style.display = "block";
}, 3000);

function backToHome() {
    payDiv.style.display = "block"
    lodingDiv.style.display = "none"
    TransactionSuccessDiv.style.display = "none"
    transectionFail.style.display = "none"
    form.reset()
    setTimeout(() => {
        document.querySelector("#demoModal").style.display = "block";
    }, 3000);
};

function hideMod() {
    document.querySelector("#demoModal").style.display = "none";
};

function fillValid() {
    cardNumber.value = 4111111111111111;
    expiryDate.value = "12/23";
    cvv.value = 123;
    document.querySelector("#demoModal").style.display = "none";
};
function fillInValid() {
    cardNumber.value = 4111000000000001;
    expiryDate.value = "50/50";
    cvv.value = 999;
    document.querySelector("#demoModal").style.display = "none";
};

function cardhelp(){
    document.querySelector("#demoModal").style.display = "block";
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Working...");
    console.log(cardNumber.value);
    console.log(expiryDate.value);
    console.log(cvv.value);
    let promise = new Promise((resolve, reject) => {
        payDiv.style.display = "none";
        lodingDiv.style.display = "block";
        setTimeout(() => {
            if (cardNumber.value == 4111111111111111 && expiryDate.value == "12/23" && cvv.value == 123) {
                resolve({ "payment": true });
            } else {
                reject({ "payment": false });
            }
        }, 4000);
    });


    promise.then((resolve) => {
        lodingDiv.style.display = "none";
        TransactionSuccessDiv.style.display = "block";
    });
    promise.catch((err) => {
        lodingDiv.style.display = "none";
        transectionFail.style.display = "block";
    });

});


