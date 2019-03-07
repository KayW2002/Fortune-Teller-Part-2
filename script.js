$(".Button").click(function() {//when I click the button class 
 var sneakers = $(".sneakers").val();
 var cost = $(".cost").val();
 var month = $(".month").val();
 var calculation = parseInt(month)*12*41*parseInt(cost);
 $(".fortune").append("You will spend "+calculation+"$ on "+sneakers);

});

