/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><VideoPlayer video={exampleVideoData[0]}/></div>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
); */

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: exampleVideoData[0],
      vidList: exampleVideoData,
    };

    this.callback = this.callback.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.search = this.search.bind(this);
    this.search();
  }

  search() {
    searchYouTube({key: YOUTUBE_API_KEY, max: 5, query: 'worlds league'}, this.callback);
  }

  callback (input) {
    this.setState({
      player: input[0],
      vidList: input,
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
ReactDOM.render(<App />, $('#app')[0]);
