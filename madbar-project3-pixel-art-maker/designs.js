var width = $("#input_width").val();
var height = $("#input_height").val();
var colorPicked = $("#colorPicker").val();
var myTable = $("#pixel_canvas");

$(function () {

    $("#input_submit").on('click', makeGrid);

    function makeGrid() {
        width = $("#input_width").val();
        height = $("#input_height").val();
        myTable = $("#pixel_canvas");

        $("tr").remove();

        for (var i = 0; i < height; i++) {
            myTable.append("<tr></tr>");

            var n = 0
            while ( n < width) {

                $("tr").last().append(" <td></td>");
                n++;
            }
        }

        return false;
    };

    $("table").on('click', function (e) {

        if (e.target.nodeName === "TD") {
            $(e.target).css('background-color', $("#colorPicker").val());
        }

        return false;
    });
});
