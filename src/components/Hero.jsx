
import Menu from './menu/Menu';
import Compains from './compains/Compains';
import CTA from './CTA/CTA';
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
      {/* another CAT */}

      {/* testimonial */}
      <Testimonial />
      {/* Trusted */}
      <h1>Contact Us</h1>
      {/* Last CAT */}
    </div>
  );
}

export default Hero