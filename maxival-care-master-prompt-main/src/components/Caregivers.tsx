import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Award, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const caregivers = [
  {
    name: "Adaeze Okonkwo",
    role: "Senior Nurse Assistant",
    category: "Nurse",
    experience: "8 years",
    rating: 4.9,
    specialties: ["Elder Care", "Post-Surgery"],
    image: "AO",
  },
  {
    name: "Blessing Eze",
    role: "Home Health Aide",
    category: "Caregiver",
    experience: "5 years",
    rating: 4.8,
    specialties: ["Personal Care", "Dementia Care"],
    image: "BE",
  },
  {
    name: "Chioma Nwosu",
    role: "Professional Nanny",
    category: "Nanny",
    experience: "6 years",
    rating: 5.0,
    specialties: ["Infant Care", "Child Development"],
    image: "CN",
  },
  {
    name: "Emeka Okoro",
    role: "Companion Caregiver",
    category: "Caregiver",
    experience: "4 years",
    rating: 4.7,
    specialties: ["Companionship", "Mobility Support"],
    image: "EO",
  },
  {
    name: "Favour Amadi",
    role: "Licensed Nurse",
    category: "Nurse",
    experience: "10 years",
    rating: 4.9,
    specialties: ["Wound Care", "Medication Mgmt"],
    image: "FA",
  },
  {
    name: "Grace Obi",
    role: "Childcare Specialist",
    category: "Nanny",
    experience: "7 years",
    rating: 4.8,
    specialties: ["Toddler Care", "Education"],
    image: "GO",
  },
  {
    name: "Hannah Udo",
    role: "Professional Housekeeper",
    category: "Housekeeper",
    experience: "6 years",
    rating: 4.9,
    specialties: ["Deep Cleaning", "Organization"],
    image: "HU",
  },
  {
    name: "Ifeoma Chukwu",
    role: "Senior Housekeeper",
    category: "Housekeeper",
    experience: "8 years",
    rating: 4.8,
    specialties: ["Laundry Care", "Meal Prep"],
    image: "IC",
  },
];

const filters = ["All", "Caregiver", "Housekeeper", "Nurse", "Nanny"];

const Caregivers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="caregivers" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient">Caregivers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every caregiver in our team is thoroughly vetted, professionally trained, and committed to providing exceptional care with compassion.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-foreground border border-border hover:border-primary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Caregivers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caregivers
            .filter((caregiver) => activeFilter === "All" || caregiver.category === activeFilter)
            .map((caregiver, index) => (
            <motion.div
              key={caregiver.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-bold text-primary-foreground">{caregiver.image}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground truncate">{caregiver.name}</h3>
                  <p className="text-sm text-primary font-medium">{caregiver.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">{caregiver.rating}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {caregiver.experience}
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {caregiver.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Background Verified • Licensed</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Caregivers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Caregivers;
