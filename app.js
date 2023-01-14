$(document).ready(function() {   
    $('.candy').click(function() {
        $(this).hide();
    })

    $('#reset-btn').click(function() {
        $('.candy').show();
    })
})