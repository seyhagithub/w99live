function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
$(function () {
  
  var jackpot_increase_timer = setInterval(function () {
      $("#progressive_jackpot").attr("data-value", parseFloat($("#progressive_jackpot").attr("data-value")) + Math.random() / 10);
      $("#progressive_jackpot").html($("#progressive_jackpot").attr("data-cur") + " " + numberWithCommas(parseFloat($("#progressive_jackpot").attr("data-value")).toFixed(2)));
  }, 400);
                     
      
});

$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('YYYY/MM/DD') + ' '
                            
                             .substring(0,3).toUpperCase());
        $('#time-part').html(momentNow.format('A hh:mm:ss'));
    }, 100);
    
    $('#stop-interval').on('click', function() {
        clearInterval(interval);
    });
});