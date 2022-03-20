import { NavBar, Filters, Products } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <div className="md:grid md:grid-cols-[18rem_auto]">
        <Filters />
        <div className="pt-5 px-10 md:px-0 gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(15rem,_1fr))]">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
