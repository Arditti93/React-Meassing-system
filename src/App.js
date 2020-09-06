import React from 'react'
import './App.css';

import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';
import SearchBar from './components/SearchBar';
// import Backdrop from './components/Backdrop'

//User image
import user from './images/userimage.png'
// import {Searchbar} from 'react-native-paper';

class App extends React.Component {
//Previous group messages stored as state 
  state = {
    Messages: [
      {name: "Alex", message: "Hello how are you"},
      {name: "Dave", message: "I'm fine thank you"},
      {name: "Karen", message: "What are we doing today"},
      ],
  //sends a  new mesage with a new user name
      newUser: "Pete", 
  // emtpy string for a new message  
      newMessage: '', 
  // direct messge stored as state
    directMessage: [
      {dMessage: "Direct message"},
      ],
    savedMessages:[
      {saved: "this is a saved message"}
    ],
  //This is when the SideDrawer is closed waiting to be opened.
    sideDrawerOpen: false, 
  }


  //enters a new message from the input using a class component
  enterMessage = (event) => {
    this.setState ({
      ...this.state,
      newMessage: event.target.value,
    })
  }
  //sends a message from the enter button using a class component
  sendMessage = (event) => {
    event.preventDefault()
    this.setState ({
      ...this.state,
      Messages: [...this.state.Messages, {message: this.state.newMessage, name: this.state.newUser}],
      directMessage: [...this.state.directMessage, {dMessage: this.state.newdMessage}]
    })
  }
  //deletes messages using a button
  deleteMessage = (event, index) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      Messages: [...this.state.Messages].slice(index, -1)
    })
  }

  render() {

    //renders the hard coded mesages from the array and delete/save message buttons
    const allMessages =  this.state.Messages.map( (sentMessage, index) => {
        return <p className="user" key={index}>
    
        <button className = "deleteButton" onClick={this.deleteMessage}>X</button>
        <button className = "saveButton" onClick={this.saveMessage}>&#9733;</button>

        <img className = "profileImg" src={user} alt="userIMG" />
        <h3>
        {sentMessage.name}
        </h3>
        {sentMessage.message} 
        </p>
      })
      // renders hard coded direct messages 


    return( 
    // Div to display sent messages and new message input box/enter button
        <div className= "mainAppWrap">

            <SearchBar />
          
          <div className = "sideBarDiv" >
          
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {/* {BackDrop} */}
  
          </div>
        
          <div className = "globalMessageArea">
              <div className = "messageDisplay">
                  <h1>Message Thread</h1>
                    {allMessages}
              </div>

                  <div className = "messageInput">

                  <input className="inputBox" type="text" name="newMessage" placeholder="Enter a message"
                  onChange={this.enterMessage}/>

                  <button onClick={this.sendMessage}>SEND</button>
              </div>
          </div>
      </div>
    )
  }
}
export default App;
