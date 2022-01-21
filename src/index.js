import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //Array of 9 nulls correspond to 9 squares
      xIsNext: true, //First move is "X" by default
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //creating a copy of the squares array
    squares[i] = this.state.xIsNext ? "X" : "O"; // Each move the boolean value flips.
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} //reads the value of the Board
        onClick={() => this.handleClick(i)} //passing down a fn from Board to Square, Square calls the fn when clicked
        //Since the Board pass onClick {() => this.handleClick(i)} to Square, the Square calls the Board's handleClick(i) when clicked.
      />
    );
  }
  render() {
    const status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>

          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
