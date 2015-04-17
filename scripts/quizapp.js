$(document).ready(function() {

  var htmlQs=[], html5Qs=[], cssQs=[], css3Qs=[], jsQs=[], phpQs=[], sqlQs=[];

  $('button#show-answers').on('click', function() {
    var btnText = $(this).text();
    if (btnText === 'Show Answer Choices') {
      btnText = 'Hide Answer Choices';
    } else {
      btnText = 'Show Answer Choices';
    }
    $(this).text(btnText);
    $(this).next('ul').children().slideToggle();
  });

  $('button#show-correct').on('click', function() {
    var btnText = $(this).text();
    if (btnText === 'Show Correct Answer') {
      btnText = 'Hide Correct Answer';
    } else {
      btnText = 'Show Correct Answer';
    }
    $(this).text(btnText);
    $('p.correct-answer').slideToggle();
  });

}); // end $(document).ready(function() {...}) or JS equivalent