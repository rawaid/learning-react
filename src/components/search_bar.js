import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term : 'fart' };
  }

  render(){
    // passing event handler to event
    return (
      <div>
        <input
        value={this.state.term} 
        onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

}

export default SearchBar;