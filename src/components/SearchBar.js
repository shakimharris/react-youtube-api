import React from 'react';

class SearchBar extends React.Component {
 onInputChange() {

 }


    render(){
     return(
        <div className="ui segment">
         <form className="ui form">
          <div class="field">
           <label>Search Images</label>
             <input type="text" onChange={this.onInputChange} />
             </div>
              </form>

        </div> 
     );
    }
}


export default SearchBar;

