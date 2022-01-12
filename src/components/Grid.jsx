import React from 'react'
import Cube from './Cube'

const containerStyles = {
  display: 'flex',
  gap: '10px'
}

const divStyles = {
  display: 'flex',
}

const Grid = () => {
  const [currentColor, setCurrentColor] = React.useState('black');

  const handleChangeColor = color => setCurrentColor(color)

  return (
    <>
      <div style={containerStyles}>
        <div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
          <div style={divStyles}>
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
            <Cube bgColor={currentColor} />
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
          <h2>Select a color and click on any cell of the grid:</h2>
          <br />
          <div onClick={() => handleChangeColor('black')} style={{ width: '50px', height: '50px', backgroundColor: 'black' }}></div>
          <div onClick={() => handleChangeColor('blue')} style={{ width: '50px', height: '50px', backgroundColor: 'blue' }}></div>
          <div onClick={() => handleChangeColor('green')} style={{ width: '50px', height: '50px', backgroundColor: 'green' }}></div>
        </div>
      </div>
    </>
  )
}

export default Grid
