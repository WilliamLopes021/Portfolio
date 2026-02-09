import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Introduction from "./Sections/Introduction";
import Projects from "./Sections/Projects";
import Objectives from "./Sections/Objectives";

const Home = () => {
  return (
    <>
      <header className="flex-col">
        <NavBar />
        <Banner />
      </header>
      <main>
        <Introduction />
        <Projects />
        <Objectives />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
