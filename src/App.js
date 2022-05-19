import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import Page from './Components/Page';
import "./Components/Page.css";

function App() {
  
  return (
    <div className="App" >
      {data.map((el) => (
        <div  key={el.id}>
          <Page data={el}/>
        </div>
      ))}
    </div>
  );
}

export default App;
