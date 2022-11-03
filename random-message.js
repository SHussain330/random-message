const inspirationalMessages = [
  "We cannot solve problems with the kind of thinking we employed when we came up with them.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "When you change your thoughts, remember to also change your world.",
  "It is better to fail in originality than to succeed in imitation.",
  "The road to success and the road to failure are almost exactly the same.",
  "Success usually comes to those who are too busy looking for it.",
  "I never dreamed about success. I worked for it.",
  "Success is getting what you want, happiness is wanting what you get.",
];
//function to generate a random message.
const getInspirationalMessage = (input) => {
  input = Math.floor(Math.random() * inspirationalMessages.length);
  /*if (input === 1) {
    return inspirationalMessages[0];
  } else if (input === 2) {
    return inspirationalMessages[1];
  } else if (input === 3) {
    return inspirationalMessages[2];
  } else if (input === 4) {
    return inspirationalMessages[3];
  } else if (input === 5) {
    return inspirationalMessages[4];
  } else if (input === 6) {
    return inspirationalMessages[5];
  } else if (input === 7) {
    return inspirationalMessages[6];
  } else if (input === 8) {
    return inspirationalMessages[7];
  } else {
    console.log("Work hard to become sucessful person.");
  }*/
  switch (input) {
    case 1:
      return inspirationalMessages[0];
      break;
    case 2:
      return inspirationalMessages[1];
      break;
    case 3:
      return inspirationalMessages[2];
      break;
    case 4:
      return inspirationalMessages[3];
      break;
    case 5:
      return inspirationalMessages[4];
      break;
    case 6:
      return inspirationalMessages[5];
      break;
    case 7:
      return inspirationalMessages[6];
      break;
    case 8:
      return inspirationalMessages[7];
      break;
    default:
      console.log("Work hard to become sucessful person.");
      break;
  }
};
console.log(getInspirationalMessage(inspirationalMessages));
