// PLACE TXT FILES INTO HTML

jQuery.get('../text/landing-bio.txt', function(data) {
    $('#landing-bio').append(data);
});