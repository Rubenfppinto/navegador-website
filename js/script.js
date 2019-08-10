$(document).ready(function(){
    //Toggle for the photo gallery
    $('#showMore').on('click', function() {
        $('.moreGallery').toggle();
    })

    //Materialize functions 
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

});