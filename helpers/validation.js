import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

export const isEmailValid = (email) => isEmail(email)

export const isPasswordValid = (password) => isStrongPassword(password);
;

export const isUsernameValid = (username) => (
    isAlphanumeric(username)
);


