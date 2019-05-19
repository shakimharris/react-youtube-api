import React from 'react';

class SearchBar extends React.Component {
 state = {
       term: '' 
 };

 onFormSubmit = (event) =>  {
   event.preventDefault();

   this.props.onSubmit(this.state.term);
 };


    render(){
     return(
        <div className="ui segment">
         <form onSubmit={this.onSearchSubmit} className="ui form">
          <div class="field">
           <label>Search Images</label>
             <input 
              type="text" 
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value }) }
              />
             </div>
              </form>

        </div> 
     );
    }
}


export default SearchBar;

