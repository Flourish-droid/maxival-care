import { motion } from "framer-motion";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Compassionate caregiver with patient"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/95 via-ocean-800/85 to-ocean-700/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 mb-6"
            >
              <Heart className="w-4 h-4 text-teal-300" />
              <span className="text-sm font-medium text-teal-100">Trusted Care Since 2015</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              <span className="text-primary-foreground">Compassionate Care</span>
              <br />
              <span className="text-teal-300">in the Comfort of</span>
              <br />
              <span className="text-primary-foreground">Your Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Providing maximum value through high-quality, patient-centered healthcare that improves quality of life. Your trusted partner for home health, nursing, childcare, and companion services in Port Harcourt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/join-us?tab=care")}
                className="group"
              >
                Request Care
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => navigate("/join-us")}
              >
                Join Our Team
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-teal-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-primary-foreground">Verified</p>
                  <p className="text-xs text-primary-foreground/60">Caregivers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-primary-foreground">24/7</p>
                  <p className="text-xs text-primary-foreground/60">Availability</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-teal-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-primary-foreground">500+</p>
                  <p className="text-xs text-primary-foreground/60">Families Served</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-ocean-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-card/10 to-card/5 backdrop-blur-sm rounded-3xl border border-primary-foreground/10 p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Personalized Care Plans</p>
                    <p className="text-sm text-primary-foreground/60">Tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-ocean-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Licensed Professionals</p>
                    <p className="text-sm text-primary-foreground/60">Trained & certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Flexible Scheduling</p>
                    <p className="text-sm text-primary-foreground/60">On your terms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
