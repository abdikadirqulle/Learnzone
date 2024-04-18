
import Menu from './menu/Menu';
import Compains, { Mentor, Trused } from './compains/Compains';
import CTA  from './CTA/CTA';
import Courses from './courses/Courses';
import Testimonial from './testmonial/Testimonial';

const Hero = () => {
  return (
    <div className=" h-full flex flex-col gap-10 md:pt-[2rem]">
      {/* Menu  */}
      <Menu />
      {/* Trusted*/}
      <Compains />
      {/* CAT */}
      <CTA />
      {/* Courses*/}
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