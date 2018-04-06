import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5Hu-ATcLzbz3aWoLdHL1jjgieP5etZXw';
// Create new component, this should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));

//Take this component's generated HTML and put it in the DOM