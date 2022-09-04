import logo from './logo.svg';
import './App.css';


export async function withFetch() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()

  return json
}

function App() {



  (async () => {
    const valami = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    console.log(await valami());
  })();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
