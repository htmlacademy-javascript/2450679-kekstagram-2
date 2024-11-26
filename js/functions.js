const checkLineLength = (length,number) =>{
    return length > number;
}

console.log(checkLineLength('строка для проверки', 5 ));
console.log(checkLineLength('строка для проверки', 18 ));

function checkPalindrome(str) {
    let checkStr = '';
    str.toLowerCase().replaceAll(' ', '');
    for (let i = str.length - 1; i >= 0; --i) {
      checkStr += str[i];
    }
    return str == checkStr;
  }
  console.log(checkPalindrome('топот'))
  console.log(checkPalindrome('ворота'))
  