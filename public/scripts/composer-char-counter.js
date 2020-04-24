const handleScroll = () => {
  const $scrollTopBtn = $('#btn-scroll-top');
  const scrollTopPos = $(window).scrollTop();
  const scrollTopIsHidden = $scrollTopBtn.hasClass('u-hidden');
  
  // Show scroll top button only when you're not at the top
  // Nav compose button should not appear at the same time as scroll top button
  if ((scrollTopPos === 0 && !scrollTopIsHidden) || (scrollTopPos > 0 && scrollTopIsHidden)) {
    $scrollTopBtn.toggleClass('u-hidden');
    $('#new-tweet-toggle').toggleClass('u-hidden');
  }
};

// Brings user to top of page and focuses textarea
const handleScrollTopClick = () => {
  const $newTweet = $('.new-tweet');
  
  // Display the new tweet form if closed
  if ($newTweet.hasClass('u-hidden')) {
    // jQuery's slide functionality depends on inline "display" styles so we change "none" to "block"
    $newTweet.attr('style', 'display: block;');
    $newTweet.toggleClass('u-hidden');
  }
  $(window).scrollTop(0);
  $('.new-tweet textarea').focus();
};

// Show the characters remaining and change the text to red if over the limit
const handleCharCounter = function() {
  const remainingChars = MAX_TWEET_LENGTH - $(this).val().length;
  const counter = $(this).parent().find('.counter').first();
  
  if ((remainingChars < 0 && !counter.hasClass('u-red')) || (remainingChars >= 0 && counter.hasClass('u-red'))) {
    counter.toggleClass('u-red');
  }
  counter.text(remainingChars);
};

$(document).ready(() => {
  // Populate the counter with the default max length (to prevent hardcode inconsistencies)
  $('.counter').text(MAX_TWEET_LENGTH);

  // Event handlers
  $("#tweet-textarea").on('input', handleCharCounter);
  $(window).scroll(handleScroll);
  $('#btn-scroll-top').click(handleScrollTopClick);
});