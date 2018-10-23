$(document).ready(function(){
    $(".add").click(function(){
        var name = $("#name").val();
        var age= $("#age").val()
        var mar= "<tr><td>" + name + "</td><td>" + age + "</td></tr>";
        $("table tbody").append(mar);
        $("#name").val('');
        $("#age").val('');
    });
});