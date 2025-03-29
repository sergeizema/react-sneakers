import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card
            image="/img/sneakers/3.jpg"
            text="Мужские Кроссовки Nike Blazer Mid Suede"
            price={12999}
          />
          <Card
            image="/img/sneakers/2.jpg"
            text="Мужские Кроссовки Nike Blazer Mid Suede"
            price={12999}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
