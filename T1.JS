function validateName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{8}$/;
    return phoneRegex.test(phoneNumber);
}

function validateMobileNumber(mobileNumber) {
    const mobileRegex = /^(010|011|012)\d{8}$/;
    return mobileRegex.test(mobileNumber);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validateColor(color) {
    return ['red', 'green', 'blue'].includes(color.toLowerCase());
}

function userInfo() {
    let name;
do {
    name = prompt('Enter your name:');
    if (!validateName(name)) {
        alert('Invalid name. It should contain only alphabets.');
    }
} while (!validateName(name));

let phoneNumber;
do {
    phoneNumber = prompt('Enter your phone number (8 digits):');
    if (!validatePhoneNumber(phoneNumber)) {
        alert('Invalid phone number. It should be an 8-digit number.');
    }
} while (!validatePhoneNumber(phoneNumber));

let mobileNumber;
do {
    mobileNumber = prompt('Enter your mobile number (11 digits starting with 010, 011, or 012):');
    if (!validateMobileNumber(mobileNumber)) {
        alert('Invalid mobile number. It should be 11 digits and start with 010, 011, or 012.');
    }
} while (!validateMobileNumber(mobileNumber));

let email;
do {
    email = prompt('Enter your email:');
    if (!validateEmail(email)) {
        alert('Invalid email format.');
    }
} while (!validateEmail(email));

let color;
do {
    color = prompt('Choose a color (red, green, blue):');
    if (!validateColor(color)) {
        alert('Invalid color choice. Please choose red, green, or blue.');
    }
} while (!validateColor(color));

   
    const colorStyle = `color: ${color.toLowerCase()}`;
    console.log(`%cWelcome, ${name}!`, colorStyle);
    console.log(`%cPhone Number: ${phoneNumber}`, colorStyle);
    console.log(`%cMobile Number: ${mobileNumber}`, colorStyle);
    console.log(`%cEmail: ${email}`, colorStyle);
    let date = new Date();
    console.log(`%cToday is ${date.getDay()}`, colorStyle);
    console.log(`%cWe are in month ${date.getMonth() + 1}`, colorStyle);

}
userInfo();

