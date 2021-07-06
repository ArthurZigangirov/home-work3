import React from 'react';

class StateHomeWork extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: 0
        }
        this.handleClickAdd=this.handleClickAdd.bind(this);
        //this.handleClickMinus=this.handleClickMinus.bind(this);
    }

    handleClickAdd()  {
      this.setState({
          value: this.state.value+1
      })  
    }

    handleClickMinus(){
        this.setState({
            value: this.state.value-1
        })
    } 

    render(){
        return(
        <div>
            
            <h2>
            {this.state.value} 
            </h2>           
            <button onClick={this.handleClickAdd}>
                +
            </button>
            <button onClick={()=>this.handleClickMinus()}>
                -
            </button>
        </div>
        )
    }
}

export default StateHomeWork;