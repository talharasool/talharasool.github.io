import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Tools from "./components/tools/Tools";
import { ThemeContext } from "./context";
import Download from './components/downloadFile/download'
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      // style={{
      //   backgroundColor: darkMode ? "#222" : "white",
      //   color: darkMode && "white",
      // }}
      style={{
        backgroundColor: "#131418"
      }}
    >
      {/* <Toggle /> */}
      <Intro />
      {/* <Download /> */}
      <About />
      <ProductList />
      <Tools />
      <Contact />
    </div>
  );
};

export default App;
