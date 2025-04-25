import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import LanguageSkills from "./components/LanguageSkills";

function App() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <Landing />
      <LanguageSkills />
    </div>
  );
}

export default App;
