
$(document).ready(function(){
    $(".add").click(function(){
        var name = $("#name").val();
        var age= $("#age").val()
        var mar= "<tr><td>" + name + "</td><td>" + age + "</td></tr>";
        $("table tbody").append(mar);
        $("#name").val('');
        $("#age").val('');
    });

   /*var myOptions={
         $buttonSortAscending : $("<p><button id='sortAscending' class='namesort'>ascending</button></p>"),
         $buttonSortDescending : $("<p><button id='sortDescending' class='namesort'>descending</button></p>"),
     
         $buttonSortAscendingage : $("<p><button id='sortAscendingAge' class='agesort'>ascendingage</button></p>"),
         $buttonSortDescendingage : $("<p><button id='sortDescendingAge' class='agesort'>descendingage</button></p>"),
    };
   var $table = $("table");
   var $tableBody = $table.find("tbody");

   var buttonNameSort=$('#dropdown1');
   $.each(myOptions,function(val,text){
        buttonNameSort.append(
            $('<option></option>').val(val).html(text));
        

   });

   var $table = $("table");
   var $tableBody = $table.find("tbody");

   var $buttonSortAscending = $("<p><button id='sortAscending' class='namesort'>ascending</button></p>");
   var $buttonSortDescending = $("<p><button id='sortDescending' class='namesort'>descending</button></p>");
   var $buttonSortAscendingage = $("<p><button id='sortAscendingAge' class='agesort'>ascendingage</button></p>");
   var $buttonSortDescendingage =$("<p><button id='sortDescendingAge' class='agesort'>descendingage</button></p>");
   var rows, sortedRows, firstName, secondName,first,second,sortAscending;
   
   $("body").append($buttonSortAscending);
   $("body").append($buttonSortDescending);

   $("body").append($buttonSortAscendingage);
   $("body").append($buttonSortDescendingage);
   
   var $buttons = $(".namesort");
   function cmp(a, b) {
     firstName = $(a).find('td:first-child').text();
     secondName = $(b).find('td:first-child').text();
     if (firstName < secondName) { return (SortAscending) ? -1 : 1 }
     else if (firstName > secondName) { return (SortAscending) ? 1 : -1 }
     else { return 0 }
   }
   var $buttonage = $(".agesort");
   function cmpm(a, b) {
     first = $(a).find('td:first-child').text();
     second = $(b).find('td:first-child').text();
     if (first < second) { return (SortAscendingage) ? 1 : -1 }
     else if (first > second) { return (SortAscendingage) ? -1 : 1 }
     else { return 0 }
   }
   
   function updateData() {
     $tableBody.remove('tr');
     $tableBody.append(sortedRows);
   }
   
   $buttons.click(function() {
     rows = $tableBody.find("tr");
     if ($(this).attr('id') === 'sortAscending') {SortAscending = true }
     else { SortAscending = false }
     sortedRows = rows.sort(cmp);
     updateData();
   })

   $buttonage.click(function() {
    rows = $tableBody.find("tr");
    if ($(this).attr('id') === 'sortAscendingage') {SortAscendingage = true }
    else {SortAscendingage = false }
    sortedRows = rows.sort(cmpm);
    updateData();
  })*/

});    