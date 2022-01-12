import React from 'react'

const Cube = ({bgColor}) => {
  const [styles, setStyles] = React.useState({
    width: '50px',
    height: '50px',
    border: '1px solid #888888',
    backgroundColor: 'black',
    cursor: 'pointer'
  });

  const changeColor = () => {
    console.log('asdsad');
    setStyles({...styles, backgroundColor: bgColor})
  }

  return (
    <div style={styles} onClick={changeColor}></div>
  )
}

export default Cube
