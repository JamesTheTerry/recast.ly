var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      q: options.query,
      type: 'video',
      videoEmbeddable: 'true'
    }, function(data) {
      callback(data.items);
    }, 'json');
};

window.searchYouTube = searchYouTube;
