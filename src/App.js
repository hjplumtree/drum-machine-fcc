import React, {Component} from 'react';
import './App.css';


const drumData = [
  {
    id: "q",
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyCode: 81,
    name: "Heater-1"
  },
  {
    id: "w",
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyCode: 87,
    name: "Heater-2"
  },
  {
    id: "e",
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyCode: 69,
    name: "Heater-3"
  },
  {
    id: "a",
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyCode: 65,
    name: "Heater-4_1"
  },
  {
    id: "s",
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyCode: 83,
    name: "Heater-6"
  },
  {
    id: "d",
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyCode: 68,
    name: "Dsc_Oh"
  },
  {
    id: "z",
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyCode: 90,
    name: "Kick_n_Hat"
  },
  {
    id: "x",
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyCode: 88,
    name: "RP4_KICK_1"
  },
  {
    id: "c",
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyCode: 67,
    name: "Cev_H2"
  }
]



class App extends Component {
  
  constructor(){
    super()
    this.state={
      name: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(key){
    let temp = drumData.filter(item => item.id === key)[0].name
      this.setState({
        name: temp
      })

      document.getElementById(key).currentTime = 0
      document.getElementById(key).play()
  }
  componentDidMount(){
    const hitDrum = (e) =>{
      if(document.getElementById(e.key)){
        this.handleClick(e.key)
      }
    }
    document.addEventListener('keydown',hitDrum);
  }


  render(){
    
const drumItems = drumData.map(item => 
  <div key={item.id} onClick={()=> this.handleClick(item.id)} id={"pad" + item.id} className="drum-pad">
    {item.text}
    <audio 
    id={item.id} 
    className="clip" 
    src={item.src}/>
  </div>)

    return (
      <div id="drum-machine">
        <div id="display" className="drum-display">
          {this.state.name}
        </div>
        <div className="drum-container">
          {drumItems}
        </div>
      </div>
    )
  }
}

export default App;
