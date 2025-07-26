import GradientSpheres from "../components/GradientSphere";
import TestimonialCard from "../components/TestimonialCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constant";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class={"testimonial-gradient-sphere testimonial-sphere-1"}
        sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"}
      />

      <div className="w-full h-full container relative z-10 md:my-40 my-20">
        <TitleHeader
          title={"TESTIMONIALS"}
          text={"Watch our client are saying about us"}
          number={"04"}
        />

        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials?.map((testimonal, index) => (
              <TestimonialCard testimonal={testimonal} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
