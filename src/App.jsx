import Screen from "./Components/Screen";
import Home from "./Components/Home";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <div style={{ zIndex: -1000 }}>
        <Screen />
      </div>

      <div style={{ zIndex: "1000" }}>
        <Home />
        <Cards />
      </div>
      <div className="bg-slate-800 text-center py-5">
      Crafted With Love by Web Lead Pooranjoy Bhattacharya.
      </div>
    </>
  );
}

export default App;
