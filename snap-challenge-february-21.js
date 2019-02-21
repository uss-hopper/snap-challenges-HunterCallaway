/*

snap-reverse

using reduce reverse this string.

"I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody."

*/

const quote = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

function stringReverser(str) {
  return str.split("").reduce((prev, next) => next + prev );
}

console.log(stringReverser(quote));
