import amino from "../../assets/images/amino.jpeg"
import jordan from "../../assets/images/jordan.jpeg"
import ahmed from "../../assets/images/ahmed.jpeg"

const Testimonial = () => {

    const Testimonials = [
        {
            name: "Dev amino",
            image: amino,
            quote: "“The beauty of LearnZone is that anyone, anywhere with an internet connection can learn from the world’s experts. Most courses are taught on demand, meaning you can take them at your own pace, and every course includes a discussion board where you can interact with the instructor and your fellow students. The best part is that most courses are free(!)… and even the paid courses cost far less than what you’d pay at a local college or university.”",
            subTitle : "Software Engineer Student"
        },
        {
            name: "Jordan Mechaels",
            image: jordan,
            quote: "“[T]he underlying idea driving LearnZone is simple: the site makes it easy to both take and offer courses (free and paid). The most basic courses consist only of video lectures. The more advanced courses mix video lectures with workbooks, samples, and sometimes audio that can be downloaded to your iPod. All the courses I sampled provide lifetime access (once you buy the course, the material is yours forever) and a 30-day guarantee (a sign of confidence given that 30 days is enough to watch all the material for most courses).”",
            subTitle : "Web Developer Student"
        },
        {
            name: "Ahmed xasan",
            image: ahmed,
            quote: "“[A] supremely talented and criminally underpaid college teacher doesn’t need to rely on a large, exploitative organization in order to reach students. All she needs is a company like LearnZone, which provides course-building tools, free, along with an online marketplace where courses can be sold (or given away) to students. The teachers can charge whatever they like, and they keep 70 percent of revenues along with 100 percent of intellectual-property rights to the course.”",
            subTitle : "LearnZone Instructor"
        },
        
    ]
  return (
    <div className="max-w-6xl mx-auto px-2 flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-secondary uppercase">
          What Our Students or instructor Have To Say
        </h1>
        <p className="md:w-1/2 text-center">
          Are you a prospective LearnZone student or instructor? Want to learn
          more about us before enrolling in or creating your first course?
          You’ve come to the right place!
        </p>
      </div>

      <div className="flex flex-col  md:flex-row items-start justify-stretch lg:h-[28rem] gap-2">
        {Testimonials.map((Testimonial) => (
          <div
            key={Testimonial.image}
            className="flex flex-col  justify-between md:w-1/2 gap-6 h-full gap- p-5 border-2 border-dashed border-blue-600  rounded-md "
          >
            <p>{Testimonial.quote}</p>

            <div className="flex items-center space-x-2">
              <img
                src={Testimonial.image}
                alt={Testimonial.name}
                className="rounded-full h-10 w-10 object-cover"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-lg text-tertiary">
                  {Testimonial.name}
                </h1>
                <span className="font-light text-sm ">
                  {Testimonial.subTitle}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Testimonial