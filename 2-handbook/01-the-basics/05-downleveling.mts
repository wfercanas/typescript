// TS compile to ES3 by default
// You can change it using --target es2015 to change the compile output
// npx tsc --target es2015 hello.ts

const greet = (person: string, date: string) => {
  console.log(`Hello ${person}, today is ${date}!`);
};

greet("Maddison", Date());
