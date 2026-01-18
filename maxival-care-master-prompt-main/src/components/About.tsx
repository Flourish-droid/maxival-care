import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, title: "Compassion", desc: "Every interaction is guided by empathy and understanding" },
    { icon: Award, title: "Excellence", desc: "Committed to the highest standards of care delivery" },
    { icon: Users, title: "Integrity", desc: "Honest, transparent relationships with families" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Providing <span className="text-gradient">Maximum Value</span> Through Quality Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Maxival Care and Support Services Ltd is dedicated to delivering exceptional home healthcare and support services that enhance the quality of life for individuals and families across Port Harcourt.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide maximum value through high-quality, patient-centered healthcare that respects the dignity and independence of every individual we serve. We strive to improve quality of life by delivering compassionate, reliable, and professional care services in the comfort of your home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and preferred home care provider in Nigeria, recognized for our unwavering commitment to excellence, innovation, and the well-being of every client. We envision a community where quality healthcare is accessible to all.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">Why Choose Maxival Care?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Thoroughly vetted caregivers",
              "Personalized care plans",
              "24/7 support availability",
              "Affordable premium care",
              "Licensed professionals",
              "Background-checked staff",
              "Flexible scheduling",
              "Bilingual caregivers",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
