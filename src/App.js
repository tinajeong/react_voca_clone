import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Tina";
  const naver = {
    name : "네이버",
    url : "https://naver.com",
  }
  return (
    <div className="App">
      <h1 style={
        {
          color: "#blue",
          backgroundColor: "#violet",
        }
      }>
        Hello, {name}.<p>{2+3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
