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
        case 'G':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0],
                [1, 0, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0],
            ];
        case 'H':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'I':
            return [
                [1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1],
            ];
        case 'J':
            return [
                [1, 1, 1, 1, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 1, 0],
                [1, 0, 0, 1, 0],
                [0, 1, 1, 0, 0],
            ];
        case 'K':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 1, 0],
                [1, 0, 1, 0, 0],
                [1, 1, 0, 0, 0],
                [1, 0, 1, 0, 0],
                [1, 0, 0, 1, 0],
                [1, 0, 0, 0, 1],
            ];
        case 'L':
            return [
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1],
            ];
        case 'M':
            return [
                [1, 0, 0, 0, 1],
                [1, 1, 0, 1, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'N':
            return [
                [1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'O':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0],
            ];
        case 'P':
            return [
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
            ];
        case 'Q':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 0, 1, 0],
                [0, 1, 1, 0, 1],
            ];
        case 'R':
            return [
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
                [1, 0, 1, 0, 0],
                [1, 0, 0, 1, 0],
                [1, 0, 0, 0, 1],
            ];
        case 'S':
            return [
                [0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0],
            ];
        case 'T':
            return [
                [1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
            ];
        case 'U':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0],
            ];
        case 'V':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
            ];
        case 'W':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1],
                [1, 1, 0, 1, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'X':
            return [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
            ];
        case 'Y':
            return [

                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
            ];

        case 'Z':
            return [
                [1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1],
            ];
        case ' ':
            return [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
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
        	result_string+="<div class='pixel_parent' id='a"+i+j+"'>";
            if (textMatrix[i][j] == 1)
                result_string += "<div class='pixel active' id='a" + i + j + "'></div>";
            else
                result_string += "<div class='pixel inactive' id='a" + i + j + "'></div>";
            result_string+="</div>";
        }
        result_string += "</div>"
    }
    result_string += "</div>";
    return result_string;
}
/*
 * The function which reads the user preferences
 * @params
 * font-size preferably a multiple of 7 and it specifies the text height
 * active color (default = black)
 * inactive color (default = transparent with border)
 */

function sparkleText(element, textObj) {
    element.innerHTML = '';
    textObj.string=textObj.string.toUpperCase();
    for (var i = 0; i < textObj.string.length; i++) {
        element.innerHTML += convertToDisplay(generateMatrix(textObj.string.charAt(i)));
    }
    var fontSize = textObj.fontSize === undefined ? 140 : textObj.fontSize;
    var activeColor = textObj.activeColor === undefined ? 'black' : textObj.activeColor;
    var inactiveColor = textObj.inactiveColor === undefined ? 'transparent' : textObj.inactiveColor;
    var marginPercent = textObj.marginPercent === undefined ? .2 : textObj.marginPercent/100;
    var borderPercent = textObj.borderPercent === undefined ? .2 : textObj.borderPercent;
    var letterMarginPercent = textObj.letterMarginPercent === undefined ? 40 : textObj.letterMarginPercent;
    var paperHoleMode = textObj.paperHoleMode == undefined? false : textObj.paperHoleMode;

    if (marginPercent > 1) marginPercent = 1;

    var textHeight = fontSize;
    var letterMargin = letterMarginPercent * textHeight / 140;
    var blockSize = textHeight / 7;
    var pixelSize = blockSize / (1 + 2 * marginPercent);
    var marginSize = blockSize - pixelSize;

    $(".pixel").css({
        "width": Math.floor(pixelSize),
        "height": Math.floor(pixelSize),
        "margin-right": Math.floor(marginSize / 2),
        "margin-left": Math.floor(marginSize / 2),
        "border-radius": borderPercent + "%",
              
    });
    if(paperHoleMode){
        $(".pixel").css({
            "border":Math.floor(pixelSize)+"px solid black"
        });
        $(".active").css({
            "background-color":"transparent!important"
        });
    }
    $(".pixel_parent").css({
    	"display":"inline-block",
    	"overflow":"hidden",
        
    });
    $(".pixel_row").css({
        "height": Math.floor(pixelSize),
        "margin-top": Math.floor(marginSize),
        "margin-bottom": Math.floor(marginSize)
    });
    $(".active").css({ "background-color": activeColor });
    $(".inactive").css({ "background-color": inactiveColor });
    $(".char_box").css({
        "margin": Math.floor(letterMargin),
        "display": "inline-block"
    });
    /* 
     * A big thanks to jQuery :* :* :*
     * Love You <3 <3
     */

}
