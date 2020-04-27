

import React, {Component} from 'react'



class Card extends Component{

    // const {id, name, email} = props 
    render(){

        return(
            <div className=" tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5">
                  <img src = {`https://robohash.org/${this.props.id}+?200x200`} alt ='robo photo'></img> 
                <h2 >{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>


            

        );



    }
}export default Card