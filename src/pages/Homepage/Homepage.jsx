import React, { Component } from 'react';
import './App.css';
import reactCSS from 'reactcss'
import CategoryList from "../../components/CategoryList/CategoryList"
import ColorPicker from "../../components/ColorPicker/ColorPicker"
import Custom from "../../components/Custom/Custom"
import './Homepage.css'
import React from 'react';


export default function HomePage({handleLogout}) {
    
  state = {
    type: 'tshirt',
    material: 'light-cotton',
    textColor: 'black',
    text: 'write here',

      //Each User
    name: "cry",
    email:"",
    isPaid: "no",
  
    //Each Clothing 
    categories :['T-Shirt', "Polo-Shirt", "Dress", "Hoodies", "Skirt"] ,
    fabric: ["cotton","Silk","Ployster", "Wool"],

    //displayColor
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  }
  
    //displayColor-event
    handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

    handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

    handleChange = (color) => {
    this.setState({ color: color.rgb })
  };




  changeText = (e) => {
    this.setState({text: e.target.value})
  }

  changeType = (e) => {
    this.setState({type: e.target.value})
    this.setState({material: 'light-cotton'}) //set cotton and color to default to prevent unallowed color options
    this.setState({color: 'white'})
  }

  changeMaterial = (e) => {
    this.setState({material: e.target.value})
  }

  changeColor = (e) => {
    this.setState({color: e.target.value})
  }

  changeTextColor = (e) => {
    console.log(e.target);
    this.setState({textColor: e.target.style.backgroundColor})
  }

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

    return (
      <div className="App">
        <nav className="nav">
        
        <CategoryList categories={this.state.categories} />
        <ColorPicker 
          styles={styles}
          handleClick = {this.handleClick}
          handleClose = {this.handleClose}
          handleChange = {this.handleChange}
          displayColorPicker = {this.state.displayColorPicker}
          color = {this.state.color}/>
        <Custom state={this.state}
                    changeText={this.changeText}
                    changeType={this.changeType}
                    changeMaterial={this.changeMaterial}
                    changeColor={this.changeColor}
                    changeTextColor={this.changeTextColor}/>
        </nav>
      </div>
      
    );}
  

