class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: exampleVideoData[0],
      playerDetails: '',
      vidList: exampleVideoData,
    };

    this.setStatePostSearch = this.setStatePostSearch.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handlePlayerDetails = this.handlePlayerDetails.bind(this);
    this.setStateOfDetails = this.setStateOfDetails.bind(this);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onUserSearch={this.handleUserSearch}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.player} playerDetails={this.state.playerDetails} onShowMore={this.handlePlayerDetails}/></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.vidList} onTitleClick={this.handleTitleClick}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'Mean Girls (1/10)'
    };

    this.props.searchYouTube(options, this.setStatePostSearch);
  }

  handleTitleClick(video) {
    this.setState({
      player: video,
      playerDetails: ''
    });
  }

  setStatePostSearch(input) {
    this.setState({
      player: input[0],
      vidList: input,
      playerDetails: ''
    });
  }

  handleUserSearch(searchTerms) {
    let options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: searchTerms
    };
    searchYouTubeFetch(options, this.setStatePostSearch);
  }

  handlePlayerDetails(video) {
    getVideoDetails(video, this.setStateOfDetails);
  }

  setStateOfDetails(video) {
    console.log('ssod', video);
    this.setState({
      playerDetails: video.snippet.description
    });
  }

}

window.App = App;
