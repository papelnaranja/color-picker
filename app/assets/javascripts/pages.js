var redv = 0;
var greenv = 0;
var bluev = 0;
var alfav = 0;
$(function () {
    $("#red").knob({
        'min': 0,
        'max': 255,
        'change': function (v) {
            redv = v
            $('.bgcolor').css('background-color', 'rgb(' + redv + ',' + greenv + ',' + bluev + ')')
            $('.value-color').text('rgba(' + Math.ceil(redv) + ',' + Math.ceil(greenv) + ',' + Math.ceil(bluev)+')');
        }
    });
    $("#green").knob({
        'min': 0,
        'max': 255,
        'change': function (v) {
            greenv = v
            $('.bgcolor').css('background-color', 'rgba(' + redv + ',' + greenv + ',' + bluev + ',' + alfav + ')')
            $('.value-color').text('rgba(' + Math.ceil(redv) + ',' + Math.ceil(greenv) + ',' + Math.ceil(bluev) + ')');

        }
    });
    $("#blue").knob({
        'min': 0,
        'max': 255,
        'change': function (v) {
            bluev = v
            $('.bgcolor').css('background-color', 'rgba(' + redv + ',' + greenv + ',' + bluev + ',' + alfav + ')')
            $('.value-color').text('rgba(' + Math.ceil(redv) + ',' + Math.ceil(greenv) + ',' + Math.ceil(bluev) + ')');
       
        }
    });
    $("#op").knob({
        'min': 0.0,
        'max': 1,
        'change': function (v) {
            alfav = v
            $('.bgcolor').css('background-color', 'rgba(' + redv + ',' + greenv + ',' + bluev + ','+ alfav +')')
            $('.value-color').text('rgba(' + Math.ceil(redv) + ',' + Math.ceil(greenv) + ',' + Math.ceil(bluev) + ',' + Math.foor(alfav) + ')');

        }
    });
});

 
