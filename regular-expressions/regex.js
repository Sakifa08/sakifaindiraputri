// Contoh memasukkan email
let emailInput = document.querySelector("#inputEmail");
let validationTextEmail = document.querySelector("#inputEmail-validation-text");

const REGULAR_EXPRESSION130 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function() {
    validationTextEmail.innerHTML = REGULAR_EXPRESSION130.test(emailInput.value) ? "Valid" : "Invalid";
});

// Contoh memasukkan hanya angka
let angkaInput = document.querySelector("#inputAngka");
let validationTextAngka = document.querySelector("#inputAngka-validation-text");

const REGULAR_EXPRESSIONkipa = /^\d+$/

angkaInput.addEventListener("input", function() {
    validationTextAngka.innerHTML = REGULAR_EXPRESSIONkipa.test(inputAngka.value) ? "Valid" : "Invalid";
});

// Contoh memasukkan kalimat
let kalimatInput = document.querySelector("#inputKalimat");
let validationTextKalimat = document.querySelector("#inputKalimat-validation-text");

const REGULAR_EXPRESSION_Inputkalimat = /^\d{3}[a-zA-Z]+$/

kalimatInput.addEventListener("input", function() {
    validationTextKalimat.innerHTML = REGULAR_EXPRESSION_Inputkalimat.test(inputKalimat.value) ? "Valid" : "Invalid";
});

// Contoh memasukkan Username
let UsernameInput = document.querySelector("#Username-input");
let validationTextUsername = document.querySelector("#Username-validation-text");

const REGEX_USERNAME = /^[a-zA-Z]+c4nt1k$/;

UsernameInput.addEventListener("input", function() {
    validationTextUsername.innerHTML = REGEX_USERNAME.test(UsernameInput.value) ? "Valid" : "Invalid";
});

// Contoh memasukkan hanya nama owner
let NamaownerInput = document.querySelector("#hanyanamaSaya");
let validationTexthanyanamaowner = document.querySelector("#hanyanamaSaya-validation-text");

const REGULAR_EXPRESSION_NamaOwner = /^Sakifa$/

NamaownerInput.addEventListener("input", function() {
    validationTexthanyanamaowner.innerHTML = REGULAR_EXPRESSION_NamaOwner.test(hanyanamaSaya.value) ? "Valid" : "Invalid";
});
