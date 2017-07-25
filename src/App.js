import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      rowNum: 0,
      colNum: 0
    }
  }
  _handleChange(type, value) {
    if(type === "rows"){
      this.setState({ rowNum: value});
    }
    else if(type === "cols"){
      this.setState({colNum: value});
    }
  }

  render() {
    return (
      <div id="main">
        <div id="inputForms">
          <InputForm name={'rows'} rows={0} changeValue={this._handleChange} max={100}/>
          <InputForm name={'cols'} rows={0} changeValue={this._handleChange} max={100}/>
        </div>
        <Table numRows={this.state.rowNum} numCols={this.state.colNum}/>
      </div>
    );
  }
}

class InputForm extends Component {
  constructor(props){
    super(props);
    this._addCell = this._addCell.bind(this);
  }

  _addCell(event) {
    this.props.changeValue(event.target.name, event.target.value);
  }

  render(){
    return(
      <fieldset>
        <legend>{this.props.name}</legend>
        <input
          type="number"
          name={this.props.name}
          placeholder={this.props.rows}
          onChange={this._addCell}
          max={this.props.max}
          min={0}
        />
        </fieldset>
      );
  }
}

class Row extends Component {
  
  render(){
    let cols = [];
    
    for( let i=0; i<this.props.numCols; i++){
      cols.push(
          <td key={i}></td>
        );
    }
    return (
      <tr>
        {(cols.length >0)?cols:null}
      </tr>
    );
  }
}

class Table extends Component {

  render() {
    const { numRows, numCols} = this.props;
    let rows = [];
    for (let i = 0; i < numRows ; i++){
      rows.push(<Row key= {i} text1={''} numCols={numCols} />);
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default App;
