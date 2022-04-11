import Collections from "./Collections";
import Header from "./Header";
import Hero from "./Hero";
function App() {
  return (
    <div className="App">
      <div className="container h-8 mx-auto p-5">
        <Header />
        <Hero />
        <Collections />
      </div>
    </div>
  );
}

export default App;
