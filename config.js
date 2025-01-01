const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=bNViGajQ#NoGIKue6U7kGweVN0X3cFrIoWD5WznKved0Q5bVKf-8' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'hassan6262': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
