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

var appendDataToUrl = (url, data) => {
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  return url;
};

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
  url = appendDataToUrl(url, data);

  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log('Fetch Data', data);
      callback(data.items);
    });
};

/* Video Details */
var getVideoDetails = (video, callback) => {
  var url = new URL('https://www.googleapis.com/youtube/v3/videos');
  var data = {
    key: YOUTUBE_API_KEY,
    id: video.id.videoId,
    part: 'snippet'
  };
  url = appendDataToUrl(url, data);

  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      callback(data.items[0]);
    });
};