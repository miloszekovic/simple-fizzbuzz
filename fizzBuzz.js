// DIVISION - deljivo %

// FIZZ - ako je broj deljiv sa 3
// BUZZ - ako je broj deljiv sa 5
// FizzBuzz - ako je broj deljiv i sa 3 i sa 5
// Ako broj nije deljiv ni sa 3 ni sa 5, vraca taj broj
// Ako tip podataka nije broj, vraca NaN tj. 'Not a number'

const output = fizzBuzz(15)

function fizzBuzz(input) {
  if (typeof input !== "number") 
    return NaN; // 'Not a number'

  if (input % 3 === 0 && input % 5 === 0) 
    return "FizzBuzz"

  if (input % 3 === 0) 
    return "Fizz"

  if (input % 5 === 0) 
    return "Buzz"

  return input;
}

console.log(output)
