/* Конвертує числа */
/* Наприклад:
  100 --> 100
  1000 --> 1,000a
  1000000 --> 1,000b
  1234000 --> 1,234b
*/

const IntConvert = ({int}) => {
  let result = int.toString()
  if (int > 999) {
    const alphabet = Array.from(  //англійський алфавіт
      {length: 26},
      (_, i) => String.fromCharCode(97 + i)
    )

    const digits = int.toLocaleString("en-GB").split(",")
    const chars = `${digits.length-2}`.split('').map(numb => alphabet[+numb])
    result = digits[0] + ',' + digits[1] + chars.join('')
  }
  return result
}

export default IntConvert