let i = 0;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++; // Moved outside the if-statement
}

 let i = 0;

while (i <= 100) { // Lowercase "while" and "i"
    if (i % 2 !== 0) {
        console.log(i); // Lowercase "console"
    }
    i++;
}

 let i = 0

while (i <= 30) {
if (i % 3 == 0) {
console.log(i)
}
i++
}

 for (let i = 1; i <= 40; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

 const states = ["Ogun", "Tabara", "Edo", "Jigawa", "Nassarawa"];
console.log(states[2]); // Outputs: Edo

 const states = ["Ogun", "Tabara", "Edo", "Jigawa", "Nassarawa"];
states.push("Plateau"); // Using straight quotes

 const states = ["Ogun", "Tabara", "Edo", "Jigawa", "Nassarawa"];

for (const state of states) {
console.log(state) }