import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';


const  initalText = 'Pumamarca!';

export default class MyFirstReactVRApp extends React.Component {
  
  state  = {
    text: initalText,
    clicked: 0,
  }

  render() {
    return (
      <View>
        <Pano source={asset('Argentina/Purmamarca.jpg')}
              style={{
                transform: [{rotateY: 50}]
              }}/>
      <VrButton
        onClick={ () => { 
          this.state.text === initalText ? 
            this.setState({text:'Click!', clicked: this.state.clicked + 1}) 
            : 
            this.setState({text: initalText, clicked: this.state.clicked + 1}) 
          console.log('clicked');
        }
      }
      disabled={ this.state.clicked > 3 ? true : false }

      onLongClick={() => {console.log('long click');}}
      onButtonPress={() => {console.log('pressed');}}
      onButtonRelease={() => {console.log('released');}}
      
      >
        <Text
          style={{
            backgroundColor: '#827',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
          {this.state.text}
        </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('MyFirstReactVRApp', () => MyFirstReactVRApp);

// https://egghead.io/courses/build-virtual-reality-experiences-using-react-vr

// https://facebook.github.io/react-360/

// https://github.com/nikgraf/awesome-react-360

// http://localhost:8081/vr/?hotreload  -> Con ?hotreload la pagina se recarga al guardar modificaciones.