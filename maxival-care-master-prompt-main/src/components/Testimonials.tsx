import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Adaeze Nwachukwu",
    role: "Daughter of Patient",
    content: "Maxival Care has been a blessing for our family. The nurse assigned to my mother is not just professional but truly caring. We've seen remarkable improvement in her health and spirits since they started.",
    rating: 5,
    image: "AN",
  },
  {
    name: "Chief Emeka Okafor",
    role: "Family Client",
    content: "After my surgery, I needed round-the-clock care at home. Maxival's team made my recovery smooth and comfortable. Their attention to detail and compassion exceeded all my expectations.",
    rating: 5,
    image: "EO",
  },
  {
    name: "Mrs. Blessing Amadi",
    role: "Working Mother",
    content: "Finding reliable childcare was stressful until we found Maxival. Our nanny is exceptional—trained, patient, and my children absolutely adore her. I can work with complete peace of mind.",
    rating: 5,
    image: "BA",
  },
  {
    name: "Dr. Chidi Eze",
    role: "Healthcare Partner",
    content: "As a physician, I regularly refer my patients to Maxival for home care. Their professionalism and quality of care consistently meet the high standards I expect for my patients.",
    rating: 5,
    image: "CE",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What <span className="text-gradient">Families Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from families who trust us with their loved ones' care.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-accent/50 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonials[currentIndex].image}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
