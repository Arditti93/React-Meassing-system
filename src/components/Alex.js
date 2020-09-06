import React from 'react'

class App extends React.Component { 
    state = {
        directMessage: [
            {alexMessage:"Hey Alex"},
        ]
    }
    render() {
        //direct message return
        const directMessage =  this.state.directMessage.map ( (sentDirectMessage, index1) => {
        return <p className="directMessage" key={index1}>{sentDirectMessage.alexMessage}
        </p>
      }) 
        return(

        )
    }




}