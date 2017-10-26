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

/* That's so FETCH! */

var searchYouTubeFetch = (options, callback) => {
  var url = new URL('https://www.googleapis.com/youtube/v3/search');
  var data = {
    maxResults: options.max,
    key: options.key,
    part: 'snippet',
    q: options.query,
    type: 'video',
    videoEmbeddable: 'true'
  };
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));

  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log('Fetch Data', data);
      callback(data.items);
    });
};