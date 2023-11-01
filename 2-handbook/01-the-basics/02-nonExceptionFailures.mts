const student = {
  name: "Daniel",
  age: 26,
};

student.location;

const announcement = "Hello World";
announcement.toLocalLowerCase();

function flipCoin() {
  return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // unreachable
}
