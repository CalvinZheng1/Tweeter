$(document).ready(function() {
  $("#tweet-textarea").on('input', function() {
    const remainingChars = MAX_TWEET_LENGTH - $(this).val().length;
    const counter = $(this).parent().find('.counter').first();
    if (remainingChars < 0) {
      !counter.hasClass('u-red') && counter.toggleClass('u-red');
    } else {
      counter.hasClass('u-red') && counter.toggleClass('u-red');
    }
    counter.text(remainingChars);
  });
}); 