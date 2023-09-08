// Import stylesheets
import './style.css';
import salt from './env/secret';

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    // Fix the loop condition
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    // Fix the loop condition
    decryptedStr += String.fromCharCode(str.charCodeAt(i) - 2);
  }
  return decryptedStr;
}

let encryptedUrl = `jvvru<11tcy0ikvjwdwugteqpvgpv0eqo1kcoitcycn1fgxhguv/fgnjk/42451ockp1TGCFOG0of`;
// Use the imported salt variable or remove this local declaration
// let salt = 'your_salt_here'; // Replace with the actual salt value
let decryptedUrl = decryptString(encryptedUrl + salt);

console.log('Encrypted URL: ' + encryptedUrl);
console.log('Decrypted URL: ' + decryptedUrl);

let formLinkElement = document.getElementById('decryptedUrl');
if (formLinkElement) {
  formLinkElement.href = decryptedUrl;
  formLinkElement.innerText = decryptedUrl;
} else {
  console.log('Element with ID "decryptedUrl" not found.');
}
