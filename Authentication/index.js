const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(14);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hash);
}

const logIn = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);
    if (result) {
        console.log('logged you');
    } else {
        console.log('try again');
    }
}

// hashPassword('password');
logIn('password', '$2b$14$F6WCO6pVR8IGvw0cqu1huelDd0mWA4S6GCmoFQopNi9Ct.yr/Umy6');
logIn('password', '$2b$14$JwKU9BWFC5PeVOv/xSOtWu2pNRi86lgrqUqcpbAEAmQQf.hL/XcAS');

const hashPasswordv2 = async (password) => {
    const hash = await bcrypt.hash('password', 14);
    console.log(hash);
}

hashPasswordv2('password');