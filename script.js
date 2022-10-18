// words
let singleDots = ["ب", "ج", "خ", "ز", "ذ", "ض", "ظ", "ن", "ف", "غ"];
let doubleDots = ["ت", "ق"];
let tripleDots = ["پ", "چ", "ژ", "ش", "ث"];
let exceptional = ["ی"];
// a function to convert numbers to persian
const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
// run the function on user type
document.querySelector("#field").addEventListener("input", function () {
  let dotCounts = 0;
  function counter() {
    let inputVal = document.querySelector("#field").value;
    let splittedWords = inputVal.split("");
    for (let i = 0; i < splittedWords.length; i++) {
      if (singleDots.includes(splittedWords[i])) {
        dotCounts++;
      }
      if (doubleDots.includes(splittedWords[i])) {
        dotCounts += 2;
      }
      if (tripleDots.includes(splittedWords[i])) {
        dotCounts += 3;
      }
      if (
        exceptional.includes(splittedWords[i]) &&
        i !== splittedWords.length - 1
      ) {
        if (splittedWords[i + 1] !== " ") {
          dotCounts += 2;
        }
      }
    }
  }
  // calling the function
  counter();
  // update the counter number
  document.querySelector("#countNum").textContent = dotCounts;
  // convert numbers to persian
  document.querySelector("#countNum").textContent = e2p(dotCounts);
});