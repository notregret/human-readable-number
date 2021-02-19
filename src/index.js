module.exports = function toReadable (number) {
  var ten = 10;
  var one_hundred = 100;
  var before_twenty = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
      'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var after_twenty = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  var remainder, remainder_2;
  if (number === 0){
      return 'zero'
  }
  if (number < 20){
      return before_twenty[number]
  } else if (number < one_hundred){
      remainder = number % ten;
      if (remainder){
          return `${after_twenty[Math.floor(number / ten)]} ${before_twenty[remainder]}`
      }return `${after_twenty[Math.floor(number / ten)]}`
  }
  if (number >= 100){
      remainder = Math.floor(number / one_hundred)
      remainder_2 = number % one_hundred
      return number % 100 === 0 ? `${before_twenty[number / 100]} hundred` :
          remainder_2 < 20 ? `${before_twenty[remainder]} hundred ${before_twenty[remainder_2]}` :
              remainder_2 % ten > 0 ?
              `${before_twenty[remainder]} hundred ${after_twenty[Math.floor(remainder_2 / ten)]} ${before_twenty[Math.floor(remainder_2 % ten)]}`:
                  `${before_twenty[remainder]} hundred ${after_twenty[Math.floor(remainder_2 / ten)]}`;
  }
}
