const checkLineLength = (length,number) =>{
    return length > number;
}

console.log(checkLineLength('строка для проверки', 5 ));
console.log(checkLineLength('строка для проверки', 18 ));

function isPalindrome(str) {
    let check = 'проверочная строка';
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i];
    }
    return str == check;
  }
  console.log(isPalindrome('топот'))
  console.log(isPalindrome('ворота'))
  