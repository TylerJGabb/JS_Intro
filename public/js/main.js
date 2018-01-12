$(function(){//when the page is finished loading
    $("#background-change").on('click', function(){//attach this listener to the backroung-change button
        $("body").toggleClass('brown-background');
    });
});