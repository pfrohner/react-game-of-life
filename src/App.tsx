import React from 'react';

import useTimer from './useTimer'
import useLife from './useLife'

const numRows = 25;
const numCols = 25;
const interval = 100

const App: React.FC = () => {
  const { grid, reset, step } = useLife(numRows, numCols);
  const { running, toggle } = useTimer(step, interval);

  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
    color: '#FFF',
    padding: '.375rem .75rem',
    margin: '.5rem .5rem',
    fontFize: '1rem',
    lineHeight: '1.5',
    fontWeight: 500
  }
  
  return (
    <>
      <header style={{textAlign: 'center', padding: '2rem'}}>
        <button onClick={() => {toggle()}} style={buttonStyles}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => {reset()}} style={buttonStyles}>
          Reset
        </button>
      </header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
          justifyContent: 'center'
        }}
      >
        {grid.map((rows: number[], rowIndex: number) => (
          rows.map((col, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[rowIndex][colIndex] ? 'lightblue' : 'transparent',
                border: 'solid 1px black'
              }} />
          ))
        ))}
      </div>
    </>
  );
};

export default App;
