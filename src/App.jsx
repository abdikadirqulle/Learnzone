import About from "./components/CTA/About";
import Compains from "./components/compains/Compains";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Testimonial from "./components/testmonial/Testimonial";

const App = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen flex flex-col gap-10 ">
      {/* Header  */}
      <Header />
      {/* Menu  */}
      <Menu />
      {/* Trusted*/}
      <Compains />
      {/* CAT */}
      <About />
      {/* Courses*/}
      <Courses />
      {/* another CAT */}
      
      {/* testimonial */}
      <Testimonial />
      {/* Trusted */}
      
      {/* Last CAT */}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App