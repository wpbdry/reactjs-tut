import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => (
    <button
        className="square" 
        onClick={props.onClick}
    >
        {props.value}
    </button>
);
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        if (props.players.length !== 2) {
            alert('ERROR: Only 2 players supported at this time.')
        }
        const size = this.props.size;
        this.state = {
            squares: Array.from(Array(size), () => Array(size).fill(null)),
            nextPlayer: 0
        };
    }

    handleClick(xPos, yPos) {
        this.setState((state, props) => {
            const squares = [...state.squares];
            squares[xPos][yPos] = props.players[state.nextPlayer];
            let nextPlayer;
            switch (state.nextPlayer) {
                case 0:
                    nextPlayer = 1;
                    break;
                case 1:
                    nextPlayer = 0;
                    break;
            }
            return {
                squares: squares,
                nextPlayer: nextPlayer
            }
        });
    }

    renderSquare(xPos, yPos) {
        return (
            <Square
                value={this.state.squares[xPos][yPos]}
                onClick={() => this.handleClick(xPos, yPos)}
            />
        );
    }
  
    render() {
        const status = 'Next player: ' + this.props.players[this.state.nextPlayer];
  
        return (
            <div>
                <div className="status">
                    {status}
                </div>
                {/* TODO: Implement with for loop */}
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                </div>
            </div>
        );
    }
}

Board.defaultProps = {
    size: 3,
    players: ['X', 'O']
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/*TODO: Test with props*/}
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
  
// ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

class Matrix {
    constructor(xSize, ySize) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.matrix = Array.from(Array(xSize), () => Array(ySize).fill(null));
    }

    set cell(xPos, yPos, value) {
        this.matrix[xPos][yPos] = value;
    }

    get cell(xPos, yPos) {
        return this.matrix[xPos][yPos];
    }
}

const calculateWinner = (squares) => {
    const winningScenarios = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (let i = 0; i < winningScenarios.length; i++) {
        const [a, b, c] = winningScenarios[i];
        if (squares[])
    }
}

const getSquare = (squares, coordinates) => (squares[coordinates[0]][coordinates[1]])
