/*
 * The function which reads the user preferences
 * @params
 * font-size preferably a multiple of 7 and it specifies the text height
 * active color (default = black)
 * inactive color (default = transparent with border)
 */
function assignStyle(){
	var fontSize       = document.getElementById('font_size').value;
	var activeColor    = document.getElementById('active_color').value;
	var inactiveColor  = document.getElementById('inactive_color').value;
	var marginPercent  = document.getElementById('margin_percent').value/100;
	var borderPercent  = document.getElementById('border_percent').value;
	var letterMarginPercent = document.getElementById('letter_margin_percent').value;
	if(marginPercent > 1) marginPercent = 1;

	var textHeight = fontSize;
	var letterMargin = letterMarginPercent*textHeight/140;
	var blockSize  = textHeight/7;
	var pixelSize  = blockSize/(1+2*marginPercent);
	var marginSize = blockSize-pixelSize;

	$(".pixel").css({
		"width"  : Math.floor(pixelSize),
		"height" : Math.floor(pixelSize),
		"margin-right" : Math.floor(marginSize/2),
		"margin-left" : Math.floor(marginSize/2),
		"border-radius" : borderPercent+"%"
	});
	$(".pixel_row").css({
		"height" : Math.floor(pixelSize),
		"margin-top" : Math.floor(marginSize),
		"margin-bottom" : Math.floor(marginSize)
	});
	$(".active").css({"background-color":activeColor});
	$(".inactive").css({"background-color":inactiveColor});
	$(".char_box").css({
		"margin" : Math.floor(letterMargin),
		"display":"inline-block"
	});
	/* 
	 * A big thanks to jQuery :* :* :*
	 * Love You <3 <3
	 */
}