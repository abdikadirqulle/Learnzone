import About from "./components/CTA/About";
import Compains from "./components/compains/Compains";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Testimonial from "./components/testmonial/Testimonial";

const App = () => {
  return (
    <div className="relative gap-10">
      {/* Header  */}
      <div className="fixed w-full bg-white shadow z-50">
      <Header />
      </div>
      <div className="relative max-w-6xl mx-auto h-screen flex flex-col gap-10 px-2 pt-[7rem]">
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
        <h1>Contact Us</h1>
        {/* Last CAT */}
        <Footer />
        {/* footer */}
      </div>
    </div>
  );
}

export default App