import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="w-full h-full relative gap-10">
      {/* Header  */}
      <div className="fixed w-full bg-white shadow z-50">
        <Header />
      </div>
      <div className="pt-[6rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App