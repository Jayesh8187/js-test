function checkCharacterType() {

    let character = document.getElementById("value").value;
    let result

    if (character == "") {
        result = "nothing";
    }else if (character >= "a" && character <= "z" || character >= "A" && character <= "Z"){
        result = "Alphabet";
    } else if (character >= 0 && character <= 9) {
        result = "Dight";
    } else{
        result = "Special Character";
    }

    document.getElementById("result").innerHTML = `You entered ${result}`;

}
