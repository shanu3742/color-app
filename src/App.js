import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  let oldColor = [
    "white",
    "Black",
    "Blue",
    "#006600",
    "Red",
    "black",
    "#0766C3",
    "#444",
    "#787878",
    "#E6E8Fa",
    "#280000",
    "blue",
    "grey",
    "green",
    "red",
    "#888",
    "#629a5a",
    "#b25959",
    "#008080",
    "#ff8080",
    "#00A800",
    "#C0C0C0",
    "steelBlue",
    "#4169E1",
    "#af7544",
    "#BA4A00",
    "#80002a",
    "#6B8E22",
    "#999900",
    "#4E3EF8",
    "#AB56F0",
    "#888888",
    "#FFFF92",
    "#191919",
    "#006699",
    "#800000",
    "#dbaa5c",
    "#6B8E23",
    "#003800",
    "#000689",
    "#9c5546",
    "#378C27",
    "#654321",
    "#8E3815",
    "#914400",
    "#8C0091",
    "#370011",
    "#004A46",
    "#6f2580",
    "#0A8B3D",
    "#FF0000",
    0.3,
    "#832F2F",
    "#EC8B00",
    "#0059EC",
    "#EC00E8",
    "#EC0036",
    "#993333",
    "#adad85",
    "#77773c",
    "#330000",
    "#009400",
    "#006500",
    "#00ac00",
    "#ffa0a0",
    "#ffc0c0",
    "#444444",
    "#8B008B",
    "#670C33",
    "#8f00b3",
    "#1d7f78",
    "#DDA0DD",
    "#006400",
    "#0079F2",
    "#8b0000",
    "#76BA76",
    "#B86566",
    "#7BB274",
    "#0039E6",
    "#66a3ff",
    "#80b3ff",
    "#ff0000",
    "#ff6666",
    "#3385FF"
]
let newColorInit= [];
newColorInit.length=oldColor.length;
newColorInit.fill('black')
const [newColor,setNewColor] = useState([]);

React.useEffect(() => {
  let newColorFromLocalStorage = JSON.parse(localStorage.getItem('newColor'));
  if(newColorFromLocalStorage){
    setNewColor(newColorFromLocalStorage)
  }else{
    setNewColor(newColorInit)
  }
},[])
  return (
    <div className="App">
      <div className = "old-color">
        {
          oldColor.map((color,colorIndex) => {
            return (
              <div className='old-color-box' key={colorIndex+color+Math.random()}>
                      <div>{color}</div>
                      <div className='box' style={{background:color}}></div>
              </div>
            )
          })
        }

      </div>
      <div className='line'></div>
      <div className = "new-color">
        {
          newColor.map((color,colorIndex) => {
            return (
              <div className='old-color-box'   key={colorIndex+color+Math.random()}>
                      <div>{color}</div>
                      <div className='box' style={{background:color}}></div>
                      <input type="color" value={color} onChange={(e) => {
                        // console.log(e.target.value)
                        let newColorCopy = [...newColor];
                        newColorCopy[colorIndex] = e.target.value;
                        localStorage.setItem('newColor',JSON.stringify(newColorCopy))
                        setNewColor(newColorCopy)
                      }} />
              </div>
            )
          })
        }

      </div>
      <div className='submit'>
        <button onClick={() => {
          console.log(newColor)
        }}>submit</button>
      </div>
    </div>
  );
}

export default App;
