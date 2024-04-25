
import Menu from './menu/Menu';
import Compains, { Mentor, Trused } from './compains/Compains';
import Testimonial from './testmonial/Testimonial';
import CTA from './about/CTA';
import Courses from './courses/Courses';

const Hero = () => {
  return (
    <div className=" h-full flex flex-col gap-10 pt-[6rem] ">
      {/* Menu  */}
      <Menu />
      {/* Trusted*/}
      <Compains />
      {/* CAT */}
      <CTA />
      {/* Courses*/}
      {/* <Courses /> */}
     <Courses />
      {/* testimonial */}
      <Testimonial />
      {/* another Trusted */}
      <Trused />
      {/* last CTA */}
      <Mentor />

      {/* footer */}
    </div>
  );
}

export default Hero