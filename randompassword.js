// Password Generator

function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, IncludeSymbols){

        const lowercaseChars = "abcdefghijklmnopqrstuvxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
        const numbersChars = "0123456789";
        const symbolChars = "!@:^&*($£?/+=¬`|}{~')"
        
        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numbersChars : "";
        allowedChars += IncludeSymbols ? symbolChars : "";

        if(lenght <= 0){
            return `(password lenght must be at least 1)`;
        }

        if(allowedChars.length === 0){
            return `(At least 1 set of characters needs to be included)`;
        }

        for (i = 0; i < lenght; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password +=allowedChars[randomIndex];

        }
        
        return password;

}

const passwordLenght = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const IncludeSymbols = true;


const password = generatePassword(passwordLenght, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  IncludeSymbols);
                                
console.log(`Generated password: ${password}`);