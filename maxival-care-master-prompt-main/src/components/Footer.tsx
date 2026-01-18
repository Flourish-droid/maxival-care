import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoMark} 
                alt="Maxival Care" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-display font-bold text-xl">Maxival Care</h3>
                <p className="text-sm text-primary-foreground/70">& Support Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Providing maximum value through high-quality, patient-centered healthcare in the comfort of your home.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Meet Caregivers", "Join Our Team", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Nurse Assistant Care", "Home Health Aide", "Personal Care", "Companionship", "Childcare Services", "Caregiver Training"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+2348160530778" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  +234-816-053-0778
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:maxivalcaresss@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm break-all">
                  maxivalcaresss@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  20, Ohaeto Street, Dline,<br />Port-Harcourt, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Maxival Care and Support Services Ltd. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-primary-foreground/60 text-sm">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Port Harcourt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
