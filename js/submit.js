$(document).ready(function(){
        $('input' && 'textarea').keyup(function() {

            let empty = false;
            $('input' && 'textarea').each(function() {
                if ($(this).val() === '') {
                    empty = true;
                }
            });

            if (empty) {
                $('#button').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
            } else {
                $('#button').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
            }
        });

    $(".send").click(function(){
        $(".text").addClass("aactive");
        $(".send").addClass("aactive");
        $(".loader").addClass("aactive");
        $(".send").delay(1700).queue(function(){
            $(this).addClass("finished").clearQueue();
        });

        $(".done").delay(1600).queue(function(){
            $(this).addClass("aactive").clearQueue();
        });
    })
});


