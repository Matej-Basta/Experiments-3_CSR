import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const numberOfElements = window.numberOfElements || 5;

  return (
    <div>
      <Header />
      <Body numberOfElements={numberOfElements} />
      <Footer />
    </div> 
  );
}

export default App;
