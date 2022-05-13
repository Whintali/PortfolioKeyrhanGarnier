$(document).ready(function()
{
            // Ouvrir le modal
    $('#open_modal').click(function() {
        $('#modal_open').css(
            {
                'display' : 'block'
            }
        );
    });
 
            // Fermer le modal
    $('#close_modal').click(function() {
        $('#modal_open').css(
            {
                'display' : 'none'
            }
        )
    });
 
 
    // Send Mail With Ajax
    $('#send_email').click(function(e){
        e.preventDefault();
        var data = {
            email: $('#email').val(),
            name: $('#name').val(),
            message: $('#message').val()
        };
 
        //  AJAX
 
        $.ajax({
            url: "mail.php",
            type: 'POST',
            data: data,
            success: function(data) {
                console.log('Success');
                $("#js_alert_success").css({"display" : "block", "font-size" : "30px", 'font-weight' : 'bold', 'text-align' : 'center', 'color' : 'green', 'margin-top' : '50px'});
                setTimeout(function(){
                     
                    $("#js_alert_success").css({"display" : "none", "font-size" : "30px", 'font-weight' : 'bold', 'text-align' : 'center', 'color' : 'green', 'margin-top' : '50px'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#message').val("")
                }, 3000);
            },
            error: function(data) {
                $("#js_alert_danger").css({"display" : "block", "font-size" : "30px", 'font-weight' : 'bold', 'text-align' : 'center', 'color' : 'red', 'margin-top' : '50px'});
                setTimeout(function(){
                    console.log('Error');
                    $("#js_alert_danger").css({"display" : "none", "font-size" : "30px", 'font-weight' : 'bold', 'text-align' : 'center', 'color' : 'red', 'margin-top' : '50px'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#message').val("")
                }, 3000);
            }
        });
    });
});