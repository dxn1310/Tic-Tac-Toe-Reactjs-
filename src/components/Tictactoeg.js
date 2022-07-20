import React,{useState} from 'react'
import './Tictactoeg.css';


export default function Tictactoe() {

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    const [turn,setturn]=useState('X');
    const [cells,setcells] = useState(Array(9).fill(' '));
    let  s=[...cells];
    const [winner,setwinner]=useState(" ");

    const reset=()=>{
        s[0]=" ";
        s[1]=" ";
        s[2]=" ";
        s[3]=" ";
        s[4]=" ";
        s[5]=" ";
        s[6]=" ";
        s[7]=" ";
        s[8]=" ";
        setcells(s);
        setturn('X');
        setwinner(" ");
        alert("New Game, Enjoy!!")
    }

    const check=()=>{
        let i=0,v=0;
        for(i;i<9;i=i+1)
        {
            if(s[i]!==' ')
            v=v+1;
        }

        if(v==9)
        {
            setwinner("Its A Draw!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //First Row
        if(s[0]=='X' && s[1]=="X" && s[2]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[0]=='O' && s[1]=="O" && s[2]=='O')
        {
            setwinner("Player O Is The Winner!!");
            alert("Click New Game Button To Start New Game!!!");
            return;
        }
        
        //Second row
        if(s[3]=='X' && s[4]=="X" && s[5]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[3]=='O' && s[4]=="O" && s[5]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //Third row
        if(s[6]=='X' && s[7]=="X" && s[8]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[6]=='O' && s[7]=="O" && s[8]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //First col
        if(s[0]=='X' && s[3]=="X" && s[6]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[0]=='O' && s[3]=="O" && s[6]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //Second col
         if(s[1]=='X' && s[4]=="X" && s[7]=='X')
         {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
         else if(s[1]=='O' && s[4]=="O" && s[7]=='O')
         {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //Third col
        if(s[2]=='X' && s[5]=="X" && s[8]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[2]=='O' && s[5]=="O" && s[8]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //First diagonal
        if(s[0]=='X' && s[4]=="X" && s[8]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[0]=='O' && s[4]=="O" && s[8]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }

        //Second diagonal
        if(s[2]=='X' && s[4]=="X" && s[6]=='X')
        {
            setwinner("Player X Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
        else if(s[2]=='O' && s[4]=="O" && s[6]=='O')
        {
            setwinner("Player O Is The Winner!!");
            sleep(1000).then(() => {
                alert("Click New Game Button To Start New Game!!!");
              });
            return;
        }
;    }

    const handleclick=(num)=>{
        if(s[num]!==' ')
        {
           alert("Please Select Another Box, This Box Is Already Used!!");
        }
        else
        {
            if(turn==='X')
            {
                setturn('O');
                s[num]='X';
            }
            else if(turn==='O')
            {
                setturn('X');
                s[num]='O';
            }
            setcells(s);
            console.log(s);
        }
        check();
    }
    const Cell=({num})=>{
        return <td onClick={()=>handleclick(num)}>{cells[num]}</td>;
    }
  return (
    <>
    <br/><br/><br/><br/><br/><br/>
    <div className='title'>
        TIC-TAC-TOE
    </div><br/><br/>
    <div className='info'>
        This is a game of Tic-Tac-Toe.
        The player X starts the game
    </div><br/><br/>
    <div className="one">
    Turn : {turn}
    <br/>
    </div>
    <div className='container'>
        <table cellSpacing='10'>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
    </div><br/><br/>
    <div className='one'>
        <button className="btn" onClick={reset}>New Game</button>
    </div>
<br/><br/>
    <div className='Result'>
    <div>{winner}</div></div>
    </>
  )
}
