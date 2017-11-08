function printRelatedLabels_thumbs(current) {
    var splitbarcolor;
    if (typeof(splittercolor) !== 'undefined') splitbarcolor = splittercolor;
    else splitbarcolor = "auto";
    for (var i = 0; i < relatedUrls.length; i++) {
        if ((relatedUrls[i] == current) || (!relatedTitles[i])) {
            relatedUrls.splice(i, 1);
            relatedTitles.splice(i, 1);
            thumburl.splice(i, 1);
            i--;
        }
    }


    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;

    if (relatedTitles.length > 0) document.write('<h2>' + relatedpoststitle + '</h2>');
    document.write('<div style="clear: both;"/>');
    while (i < relatedTitles.length && i < 20 && i < maxresults) {
        document.write('<a ');
        if (i != 0) document.write('border:1px solid ' + splitbarcolor + ';"');
        else document.write('"');
        document.write(' href="' + relatedUrls[r] + '"><img src="' + thumburl[r] + '" alt="' + relatedTitles[r] + '"/><div class="box-related">' + relatedTitles[r] + '</div></a>');

        i++;


        if (r < relatedTitles.length - 1) {
            r++;
        } else {
            r = 0;
        }

    }
    document.write('</div>');

    relatedUrls.splice(0, relatedUrls.length);
    thumburl.splice(0, thumburl.length);
    relatedTitles.splice(0, relatedTitles.length);

}
