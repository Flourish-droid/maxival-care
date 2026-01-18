import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Heart, GraduationCap, Home, Baby, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Nurse Assistant & Home Health Aide Care",
    description: "Professional nursing assistants providing medical support, medication management, vital signs monitoring, and skilled nursing care in your home.",
    features: ["Medication administration", "Wound care", "Post-surgery care", "Chronic disease management"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Heart,
    title: "Personal Care & Companionship",
    description: "Compassionate companionship and personal care assistance for seniors and individuals needing daily living support.",
    features: ["Bathing & grooming", "Meal preparation", "Mobility assistance", "Social companionship"],
    color: "from-ocean-500 to-ocean-600",
  },
  {
    icon: GraduationCap,
    title: "Caregiver/Nanny Training",
    description: "Comprehensive training programs to develop skilled, certified caregivers and nannies with professional expertise.",
    features: ["Certification courses", "First aid training", "Child development", "Elder care techniques"],
    color: "from-teal-600 to-ocean-500",
  },
  {
    icon: Baby,
    title: "Housekeeping & Nanny/Childcare",
    description: "Reliable household management and expert childcare services from trained and vetted professionals.",
    features: ["Infant care", "Educational activities", "Light housekeeping", "Meal preparation"],
    color: "from-ocean-600 to-teal-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Care Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From skilled nursing to childcare, we offer a full spectrum of home care services tailored to your family's unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant="ghost"
                className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-4">
              Need Customized Care Solutions?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Every family is unique. Let us create a personalized care plan that fits your specific needs and budget.
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
