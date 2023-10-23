// select the output element
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

// Select the input element
let isValid = false;
const inputYear = document.querySelector("#year");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");

// Error Element
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

submitBtn.addEventListener('click', calculateDate)

inputDay.addEventListener("input" ,(e) =>{
    if(+inputDay.value > 31){
        errorDay.innerText = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.innerText = "";
    }
    if(+inputDay.value === 0){
        isValid = false;
        errorDay.innerText = "This field is required";
        isValid = false;
        return;
    }
    else {
        errorDay.innerText = "";
    }
});


inputMonth.addEventListener("input" ,(e) =>{
    if(+inputMonth.value > 12){
        errorMonth.innerText = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.innerText = "";
    }
    if(+inputMonth.value === 0){
        isValid = false;
        errorMonth.innerText = "This field is required";
        isValid = false;
        return;
    }
    else {
        errorMonth.innerText = "";
    }
});


inputYear.addEventListener("input" ,(e) =>{
    if(+inputYear.value > 4023){
        errorYear.innerText = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorYear.innerText = "";
    }
    if(+inputYear.value === 0){
        isValid = false;
        errorYear.innerText = "This field is required";
        isValid = false;
        return;
    }
    else {
        errorYear.innerText = "";
    }
});

function calculateDate() {
    if(isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayobj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayobj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;
        // Displaying Everything
        outputDay.innerText = ageDay;
        outputMonth.innerText = ageMonth;
        outputYear.innerText = ageYears;
    }else {
        alert("Error!")
    }
}