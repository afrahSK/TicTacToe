import React from 'react'
import './style.css'
import {useState} from 'react';

const Square=({value, onSquareClick})=>{
    // const[value,setValue] = useState(null);
    // function btnClicked(){
    //     setValue("X");
    // }
    return <button className="square" onClick={onSquareClick}>{value}</button>
}
const Tic = () => {
    const[xIsState,setXIsState] = useState(true);
    const[squares,setSquares] = useState(Array(9).fill(null));
    //now squares(state variable) contains an array of 9 elements each set to null

    //a function that will handle the clicks and pass it as prop to the Square(child)component
    function handleClick(i){
        if(squares[i] || calcWinner(squares))
            return;
        const nextSquares = squares.slice();
        if(xIsState){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsState(!xIsState);
    }
    const winner = calcWinner(squares);
    let status;
    if(winner){
        status="Winner:"+winner;
    }else{
        status="next player:"+(xIsState?"X":"O");
    }
  return (
    <>
        <h1>TIC TAC TOE GAME</h1>
        <div className="status">{status}</div>
        <div className="grid-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="grid-row">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="grid-row">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        
    </>
  )
}
function calcWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0;i<lines.length;i++){
        const[a,b,c]=lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Tic