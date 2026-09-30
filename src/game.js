import { glyphs } from "./matrix.js";

const SIZE = 7;
let target = glyphs[Math.floor(Math.random() * glyphs.length)];
let board = Array.from({length: SIZE}, () => Array(SIZE).fill(0));
const boardEl = document.querySelector("#board");
const targetEl = document.querySelector("#target");
const statusEl = document.querySelector("#status");

function render(){
  boardEl.innerHTML = "";
  for(let y=0;y<SIZE;y++) for(let x=0;x<SIZE;x++){
    const b=document.createElement("button");
    b.className="cell";
    b.textContent=board[y][x] ? "●" : "";
    b.onclick=()=>{ board[y][x]=board[y][x]?0:1; render(); check(); };
    boardEl.append(b);
  }
}
function check(){
  const ok=board.every((row,y)=>row.every((v,x)=>v===Number(target.rows[y][x])));
  statusEl.textContent=ok ? "CLEAR!" : "7×7 を埋めてみよう";
}
function reset(){
  board=Array.from({length: SIZE},()=>Array(SIZE).fill(0));
  target=glyphs[Math.floor(Math.random()*glyphs.length)];
  targetEl.textContent=target.id;
  statusEl.textContent="START";
  render();
}
document.querySelector("#reset").onclick=reset;
reset();
