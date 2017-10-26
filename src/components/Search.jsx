var Search = (props) => {
  const handleUserSearch = () => {
    var searchTerms = $('input').val();
    props.onUserSearch(searchTerms);
  };

  const debouncedSearch = _.debounce(props.onUserSearch, 500);

  const handleUserTyping = (e) => {
    var searchTerms = $('input').val();
    if (e.keyCode === 13) {
      props.onUserSearch(searchTerms);
    } else {
      debouncedSearch(searchTerms);
    }
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyDown={handleUserTyping} />
      <button className="btn hidden-sm-down" onClick={handleUserSearch}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
