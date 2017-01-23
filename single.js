function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}


function changeBorders(id) {
    borders=getBorders(id);
    console.log(borders);
    $('#hex_container').css({position: "relative"});
    $('#hex_container').css({left: borders[0] + "px"});
    $('#hex_container').css({top: borders[1] + "px"});
    $('#wrapper').css({overflow: "hidden"});
    $('#wrapper').css({width: borders[2] + 'px'});
    $('#wrapper').css({height: borders[3] + 'px'});
    $('#wrapper').css({"padding-top": borders[4] + '%'});

}

function getBorders(id) {
    var borders = {};
    borders["odd"] = [-171,0,300,270,10];
    borders["odm"] = [-263,-52,300,160,20];
    borders["odpub"] = [-263,-157,300,160,20];
    borders["odv"] = [-442,-157,215,260,10];
    borders["ods"] = [-354,-261,300,260,10];
    borders["bs"] = [-82,-104,125,315,5];
    borders["mr"] = [11,-153,310,220,15];
    borders["biw"] = [7,-155,125,315,5];
    borders["plod"] = [-83,-260,310,265,10];
    borders["odpol"] = [-173,-313,390,165,20];
    return borders[id];
}
 
$( document ).ready(function() {
    var id = findGetParameter("course")
    $('.hex2').css("opacity",0);
    $('.'+id).parent().css("opacity",1);
    changeBorders(id);
});

