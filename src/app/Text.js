//14
import React from 'react'
import ReactDOM from 'react-dom'

//15
export default class Text extends React.Component{
    //16
    render(){
        return(
            <div class="text">
            This is a Text component { this.props.content }
            </div>
        )
    }
}