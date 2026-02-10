import Header from "./components/Header";
import Profile from "./components/Profile";
import Status from "./components/Status";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div>
      <Header title="Student Dashboard" />

      <Profile 
        name="Sinan"
        course="MERN Stack"
        year="3"
      />

      <Status />

      <Footer />
    </div>
  );
}

export default App;
