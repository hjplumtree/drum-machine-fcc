import React, {Component} from 'react';
import './App.css';


const drumData = [
  {
    id: "q",
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyCode: 81
  },
  {
    id: "w",
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyCode: 87
  },
  {
    id: "e",
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyCode: 69
  },
  {
    id: "a",
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyCode: 65
  },
  {
    id: "s",
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyCode: 83
  },
  {
    id: "d",
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyCode: 68
  },
  {
    id: "z",
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyCode: 90
  },
  {
    id: "x",
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyCode: 88
  },
  {
    id: "c",
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyCode: 67
  }
]



class App extends Component {
  
  constructor(){
    super()
    this.state={
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id){
    document.getElementById(id).currentTime = 0
    document.getElementById(id).play()
  }
  componentDidMount(){
    const hitDrum = (e) =>{
      this.handleClick(e.key)
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
      <div className="drum-container">
        {drumItems}
      </div>
    )
  }
}

export default App;
