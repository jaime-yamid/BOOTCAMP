for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    // Si no es múltiplo de 3 ni de 5, utiliza el número
    if (output === "") {
        output = i;
    }

    console.log(output);
}
