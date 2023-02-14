
import './App.css';
import image from "./Planet9_3840x2160.jpg"
function App() {
  const x=10;

 

  
  return (
    <div className="App">
      <h1>singles</h1>
      <p>this is paragraph</p>
      <h3>{5+50}</h3>
      <img src={image} alt="iyuu" width="50%" />
      <h2>{x>=10?"greater":"lesser"}</h2>
    </div>
  );
}

export default App;
