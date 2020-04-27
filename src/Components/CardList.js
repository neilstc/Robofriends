import React, {Component} from 'react'
import Card from './Card';
class CardList extends Component{

render(){
    const cardArray = this.props.robots.map((user, i) => <Card key = {i} id={this.props.robots[i].id} name={this.props.robots[i].name}
     email={this.props.robots[i].email}/>) // we will load the entire array here and then rander this.
    return(
        <div>
            {
                cardArray
       
            }
      </div>
    );
}
}export default CardList;