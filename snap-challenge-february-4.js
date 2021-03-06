/*using javascript convert the string into an array and filter out any words that begin with the letter 'f'.
*/



const starTrekQuote = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";

const newQuote = starTrekQuote.replace(/\bf\S+/ig,"");

console.log(newQuote);

//George's Answer

let string = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";

const array = string.toLowerCase().split(" ");

newArray = array.filter(index => {
  return !index.startsWith("f");
});

console.log(newArray);
