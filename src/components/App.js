import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

onSearchSubmit (term) {
    axios.get('https://api.unsplash.com/', {
    params: { query: term},
    headers: {
        Authorization: 'Client-ID f70d590add5c282efa55738697eea438f3f56ec4547a5a818ba6ab3fda5875fe'
    }
    }).then((response) =>  {
      console.log(response.data.results);
    });
}
render () {
  return (
   <div className="ui container">
   <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
   );
  }
}
export default App;
