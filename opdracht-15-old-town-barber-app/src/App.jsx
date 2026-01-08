import "./App.css";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";

function App() {
  return (
    <>
      <section className="App">
        <div>
          <h1 className="home-title">Old Town Barber</h1>
          
          <UserProfile className="user-profile" />
        </div>
        <ShopInfo className="shop-info" />
      </section>
    </>
  );
}

export default App;
