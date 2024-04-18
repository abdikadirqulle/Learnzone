
import Menu from './menu/Menu';
import Compains from './compains/Compains';
import CTA  from './CTA/CTA';
import Courses from './courses/Courses';
import Testimonial from './testmonial/Testimonial';

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col gap-10 px-2 md:pt-[2rem]">
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
      <span>another Trusted</span>
      {/* last CTA */}
      <h1>last CAT</h1>

      {/* footer */}
    </div>
  );
}

export default Hero