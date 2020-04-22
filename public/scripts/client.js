/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const tweetTemplate = `
  <article class="tweet">
    <header>
      <div class="tweet--profile">
        <img />
        <span></span>
        <span class="tweet--handle"></span>
      </div>
      <p></p>
    </header>
    <footer>
      <span></span>
      <div>
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 0H4c-.73 0-1 .27-1 1v15l5-3.09L13 16V1c0-.73-.27-1-1-1z"></path>
        </svg>
        <svg height="32" viewBox="0 0 12 16" version="1.1" width="24" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 01-1.2 3.6 4.346 4.346 0 01-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 001.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 015.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 012.96 5z"></path>
        </svg>
        <svg height="32" viewBox="0 0 12 16" version="1.1" width="24" aria-hidden="true">
          <path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path>
        </svg>
      </div>
    </footer>
  </article>
`;

const renderTweets = tweets => {
  tweets.forEach(tweet => {
    $('#tweets').append(createTweetElement(tweet));
  });
}

const createTweetElement = tweet => {
  let $tweet = $(tweetTemplate);

  $tweet.find('.tweet--profile img').first()
    .attr('src', tweet.user.avatars)
    .attr('alt', tweet.user.name);

  $tweet.find('.tweet--profile span').first()
    .text(tweet.user.name);

  $tweet.find('.tweet--profile .tweet--handle').first()
    .text(tweet.user.handle);

  $tweet.find('header p').first()
    .text(tweet.content.text);

  $tweet.find('footer span').first()
    .text(moment(tweet.created_at).fromNow());

  return $tweet;
}

renderTweets(data); 
