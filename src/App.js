import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
      <footer>
        this project was coded by
        <a href="https://github.com/Magdalenaarce">Magdalena Arce Marcolin</a>,
        is open sourced in
        <a href="https://github.com/Magdalenaarce/Poem-project">Github</a> and
        hosted on
        <a href="https://app.netlify.com/sites/ai-poem-project-magdalena/overview">
          netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
