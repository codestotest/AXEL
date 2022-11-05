
function AnimateRotate(angle) {
    var $elem = $('.wheel-inner');

    $({deg: 0}).animate({deg: angle}, {
        duration: 1000,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

$(".spin-btn").click(function(){
  let x = ((Math.random() * 500) + 500);
  AnimateRotate(x);
  x = x % 360;
  if (x >= 24 && x < 67) {
    $(".card, .btn-primary").removeClass("orange-card");
    $(".card, .btn-primary").addClass("burgundy-card");
    // $(".btn-primary").removeClass("burgundy-card");
    // $(".btn-primary").addClass("orange-card");
    $(".card-text").text("30LE");
  }
  else if (x >= 67 && x < 114) {
    $(".card, .btn-primary").removeClass("burgundy-card");
    $(".card, .btn-primary").addClass("orange-card");
    // $(".btn-primary").removeClass("orange-card");
    // $(".btn-primary").addClass("burgundy-card");
    $(".card-text").text("50%");
  }
  else if (x >= 114 && x < 157) {
    $(".card, .btn-primary").removeClass("orange-card");
    $(".card, .btn-primary").addClass("burgundy-card");
    // $(".btn-primary").removeClass("burgundy-card");
    // $(".btn-primary").addClass("orange-card");
    $(".card-text").text("free pice");
  }
  else if (x >= 157 && x < 204) {
    $(".card, .btn-primary").removeClass("burgundy-card");
    $(".card, .btn-primary").addClass("orange-card");
    // $(".btn-primary").removeClass("orange-card");
    // $(".btn-primary").addClass("burgundy-card");
    $(".card-text").text("10%");
  }
  else if (x >= 204 && x < 247) {
    $(".card, .btn-primary").removeClass("orange-card");
    $(".card, .btn-primary").addClass("burgundy-card");
    // $(".btn-primary").removeClass("burgundy-card");
    // $(".btn-primary").addClass("orange-card");
    $(".card-text").text("20%");
  }
  else if (x >= 247 && x < 294) {
    $(".card, .btn-primary").removeClass("burgundy-card");
    $(".card, .btn-primary").addClass("orange-card");
    // $(".btn-primary").removeClass("orange-card");
    // $(".btn-primary").addClass("burgundy-card");
    $(".card-text").text("20LE");
  }
  else if (x >= 294 && x < 337) {
    $(".card, .btn-primary").removeClass("orange-card");
    $(".card, .btn-primary").addClass("burgundy-card");
    // $(".btn-primary").removeClass("burgundy-card");
    // $(".btn-primary").addClass("orange-card");
    $(".card-text").text("150LE");
  }
  else{
    $(".card, .btn-primary").removeClass("burgundy-card");
    $(".card, .btn-primary").addClass("orange-card");
    // $(".btn-primary").removeClass("orange-card");
    // $(".btn-primary").addClass("burgundy-card");
    $(".card-text").text("100LE")
  }

  setTimeout(function(){
    $(".card-bg").addClass("visible")
  }, 1000);

  $(".spin-btn").attr("disabled", true);
});

$(".btn-primary").click(function(){
  $(".card-bg").removeClass("visible")
  $(".card-bg").addClass("hidden");
  $(".spin-btn").attr("disabled", false);
});
