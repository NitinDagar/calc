import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      history:[]
    }
  }

  enterSymbol=(e, elem)=>{
    let temp = this.state.userInput
    // let flag = this.state.userInput.split()[this.state.userInput.length-1]
    // alert(flag)

    this.setState({
      userInput:temp+elem
    })
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  calc=()=>{
    this.setHistory(this.state.userInput)
    this.setState({
      userInput:eval(this.state.userInput)
    })
  }

  setHistory=(elem)=>{
    let t = this.state.history
    t.push(elem)
    this.setState({
      history:t
    })

  }
  render() {
    return (
      <div className="outer">
        <div className="calc">
          {/* <label htmlFor="usr">Input:</label> */}
          {this.state.history.length>0&&<div>
            <ul className="calculate">
              {this.state.history.map((elem,index)=><li>{elem} = {eval(elem)}</li>)}
            </ul>
          </div>}
          <input className="inputBox" id="usr" type="text" onChange={this.handleInput} value={this.state.userInput}></input>
          <div>
            <button onClick={(e)=>this.enterSymbol(e,'+')}>+</button>
            <button onClick={(e)=>this.enterSymbol(e,'-')}>-</button>
            <button onClick={(e)=>this.enterSymbol(e,'*')}>*</button>
            <button onClick={(e)=>this.enterSymbol(e,'/')}>/</button>
          </div>
          <div>
            <button onClick={(e)=>this.enterSymbol(e,'1')}>1</button>
            <button onClick={(e)=>this.enterSymbol(e,'2')}>2</button>
            <button onClick={(e)=>this.enterSymbol(e,'3')}>3</button>
            <button onClick={(e)=>this.enterSymbol(e,'4')}>4</button>
          </div>
          <div>
            <button onClick={(e)=>this.enterSymbol(e,'5')}>5</button>
            <button onClick={(e)=>this.enterSymbol(e,'6')}>6</button>
            <button onClick={(e)=>this.enterSymbol(e,'7')}>7</button>
            <button onClick={(e)=>this.enterSymbol(e,'8')}>8</button>
          </div>
          <div>
            <button onClick={(e)=>this.enterSymbol(e,'9')}>9</button>
            <button onClick={(e)=>this.enterSymbol(e,'0')}>0</button>
            <button onClick={(e)=>this.enterSymbol(e,'.')}>.</button>
            <button className="sum" onClick={this.calc}>=</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
