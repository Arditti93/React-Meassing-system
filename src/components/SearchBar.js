import React from 'react';
import mGlass from '../images/mGlass.png'
// import ReactSearchBox from 'react-search-box';



// VERSION ONE
// THIS COMPONENT RELIES ON REACTSEARCHBOX BEING INSTALLED
// npm i react-search-box --save

// export default class App extends Component {

//   render() {
    
//     return (
//       <ReactSearchBox
//       // DEFAULT PLACEHOLDER
//         placeholder = ""
//       // VALUE TO SEARCH VARIABLE
//         value = ""
//       // ARRAY TO SEARCH
//         data = {this.allMessages}
//       // FUNCTION WHEN SEARCHED ITEM IS CLICKED
//         onSelect = {() => {
//           console.log('This would normally take you to the relevant message')
//         }}
//       />
//     )
//   }
// }

// VERSION TWO

// const SearchBar = props => (
//   <div className = "searchBarDiv">
//     <input className = "searchBox" type="text" name="searchBox" placeholder="Search Messages" />
//   </div>
// )

// export default SearchBar

// VERSION THREE

const SearchBar = () => {
  return (
      <div className = "searchBarDiv">
        <input className = "searchBox" type="text" name="searchBox" placeholder="Search Messages" />
        <img className = "searchBarLogo" src = {mGlass} alt="searchGlass" />
      </div>
  )
}

export default SearchBar;