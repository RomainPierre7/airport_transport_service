const crypto = require('crypto');

function generateEncryptedPassword(password) {
    const salt = crypto.randomBytes(16);

    const key = crypto.scryptSync(password, salt, 64, { N: 1024 });

    const hashedKey = crypto.createHash('sha256').update(key).digest('hex');

    return {
        hashedKey: hashedKey,
        salt: salt.toString('hex')
    };
}

function validatePassword(password, salt, hashedKey) {
    const key = crypto.scryptSync(password, Buffer.from(salt, 'hex'), 64, { N: 1024 });

    const hashedKeyToCheck = crypto.createHash('sha256').update(key).digest('hex');

    return hashedKey === hashedKeyToCheck;
}

module.exports = {
    generateEncryptedPassword,
    validatePassword
};