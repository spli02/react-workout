import React from 'react'
import ReactDOM from 'react-dom'
//17
import Text from './Text.js'

export default class App extends React.Component{
    render(){
        return(
        //18,19
        <div className="app">
            This is the App component.
            <Text content="Hi1"/>
            <Text content="Hi2"/>
            <Text content="Hi3"/>
        </div>
        )
    }
}

ReactDOM.render(<Text/>,document.querySelector('#container'));