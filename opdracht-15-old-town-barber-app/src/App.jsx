import "./App.css";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm"

function App() {
  return (
       <>
      <section className="App">
        <div>
          <h1 className="home-title">Old Town Barber</h1>
          
          <UserProfile className="user-profile" />
        </div>
        <ShopInfo className="shop-info" />
        <BookingForm/>
      </section>
    </>
  );
};

export default App;
