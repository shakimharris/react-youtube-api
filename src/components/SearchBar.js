import React from 'react';

class SearchBar extends React.Component {
 state = {
       term: '' 
 };




    render(){
     return(
        <div className="ui segment">
         <form className="ui form">
          <div class="field">
           <label>Search Images</label>
             <input 
              type="text" 
              onChange={(e) => this.setState({ term: e.target.value})} />
             </div>
              </form>

        </div> 
     );
    }
}


export default SearchBar;

