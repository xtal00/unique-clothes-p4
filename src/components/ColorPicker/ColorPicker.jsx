import React from 'react'
import { SketchPicker } from 'react-color'

function ColorPicker(props) {
    return (
        <div>
            <div style={ props.styles.swatch } onClick={ props.handleClick }>
            <div style={ props.styles.color } />
            </div>
            { props.displayColorPicker ? <div style={ props.styles.popover }>
            <div style={ props.styles.cover } onClick={ props.handleClose }/>
            <SketchPicker color={ props.color } onChange={ props.handleChange } />
            </div> : null }
        </div>
    );
  }
  
  export default ColorPicker ;