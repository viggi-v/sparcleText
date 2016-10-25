/*
 * Every letter,char can be represented as a 7*5 display.
 * this generates a 7*5 matrix corresponding to each char 
 */
function generateMatrix(a) {
    switch (a) {
        case 'A':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'B':
            return [
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
            ];
        case 'C':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0],
            ];
        case 'D':
            return [
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
            ];
        case 'E':
            return [
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1],
            ];
        case 'F':
            return [
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
            ];
    }


}

/*
 * Accepts a 5*7 matrix and converts it into a DOM
 * with div classes .active and .inactive
 */

function convertToDisplay(textMatrix) {
    var result_string = '<div class="char_box">';
    for (var i = 0; i < 7; i++) {
        result_string += "<div class='pixel_row' id='r" + i + "'>";
        for (var j = 0; j < 5; j++) {
            if (textMatrix[i][j] == 1) {
                result_string += "<div class='pixel active' id='a" + i + j + "'></div>";
            } else
                result_string += "<div class='pixel inactive' id='a" + i + j + "'></div>";
        }
        result_string += "</div>"
    }
    result_string += "</div>";
    return result_string;
}

function run() {
    console.log(generateMatrix('A'));
    var myMatA = generateMatrix('A');
    var myMatB = generateMatrix('B');
    var myMatC = generateMatrix('C');
    var myMatD = generateMatrix('D');
    var myMatE = generateMatrix('E');
    var myMatF = generateMatrix('F');
    document.getElementById("op").innerHTML= convertToDisplay(myMatA);
    document.getElementById("op").innerHTML+= convertToDisplay(myMatB);
    document.getElementById("op").innerHTML+= convertToDisplay(myMatC);
    document.getElementById("op").innerHTML+= convertToDisplay(myMatD);
    document.getElementById("op").innerHTML+= convertToDisplay(myMatE);
    document.getElementById("op").innerHTML+= convertToDisplay(myMatF);
    assignStyle();
}
