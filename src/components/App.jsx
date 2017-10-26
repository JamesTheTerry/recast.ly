class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: exampleVideoData[0],
      vidList: exampleVideoData,
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidMount() {
    const options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'Sometimes things that are expensive'
    };

    const callback = (input) => {
      this.setState({
        player: input[0],
        vidList: input
      });
    };

    this.props.searchYouTube(options, callback);
  }

  handleInitSearch(initQuery) {
    searchYouTube({key: YOUTUBE_API_KEY, max: 5, query: initQuery}, (input) => {
      console.log('input', input);
      this.setState({
        player: input[0],
        vidList: input
      });
    });
  }

  handleTitleClick(video) {
    this.setState({
      player: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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

}

window.App = App;
