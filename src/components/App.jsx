class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: exampleVideoData[0],
      vidList: exampleVideoData,
    };

    this.setStatePostSearch = this.setStatePostSearch.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
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
            <div><VideoPlayer video={this.state.player}/></div>
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
      query: 'Sometimes things that are expensive'
    };

    this.props.searchYouTube(options, this.setStatePostSearch);
  }

  // handleInitSearch(initQuery) {
  //   searchYouTube({key: YOUTUBE_API_KEY, max: 5, query: initQuery}, (input) => {
  //     console.log('input', input);
  //     this.setState({
  //       player: input[0],
  //       vidList: input
  //     });
  //   });
  // }

  handleTitleClick(video) {
    this.setState({
      player: video
    });
  }

  setStatePostSearch (input) {
    this.setState({
      player: input[0],
      vidList: input,
    });
  }

  handleUserSearch(searchTerms) {
    let options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: searchTerms
    }
    searchYouTube(options, this.setStatePostSearch);
  }

}

window.App = App;
