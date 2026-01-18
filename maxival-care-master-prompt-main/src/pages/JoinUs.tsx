import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Briefcase, Heart, GraduationCap, TrendingUp, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import logoHorizontal from "@/assets/logo-horizontal.png";

const WHATSAPP_NUMBER = "2348160530778";

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Continuous training and advancement opportunities" },
  { icon: Heart, title: "Impactful Work", desc: "Make a real difference in people's lives daily" },
  { icon: GraduationCap, title: "Free Training", desc: "Access to certification and skill development" },
  { icon: Briefcase, title: "Flexible Hours", desc: "Work schedules that fit your lifestyle" },
];

const portHarcourtLGAs = [
  "Port Harcourt City",
  "Obio-Akpor",
  "Eleme",
  "Oyigbo",
  "Okrika",
  "Ogu-Bolo",
  "Ikwerre",
  "Etche",
  "Omuma",
];

const JoinUs = () => {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [activeTab, setActiveTab] = useState("caregiver");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "care") {
      setActiveTab("careseeker");
    }
  }, [searchParams]);

  // Caregiver Form State
  const [caregiverData, setCaregiverData] = useState({
    fullName: "",
    gender: "",
    age: "",
    qualification: "",
    experience: "",
    location: "",
    startDate: "",
    cvLink: "",
    certificateLink: "",
  });

  // Careseeker Form State
  const [careseekerData, setCareseekerData] = useState({
    contactName: "",
    relationship: "",
    service: "",
    location: "",
    urgent: false,
  });

  const validateCaregiverForm = () => {
    return (
      caregiverData.fullName.trim() !== "" &&
      caregiverData.gender !== "" &&
      caregiverData.age.trim() !== "" &&
      caregiverData.qualification !== "" &&
      caregiverData.experience !== "" &&
      caregiverData.location !== ""
    );
  };

  const validateCareseekerForm = () => {
    return (
      careseekerData.contactName.trim() !== "" &&
      careseekerData.relationship.trim() !== "" &&
      careseekerData.service !== "" &&
      careseekerData.location.trim() !== ""
    );
  };

  const handleCaregiverSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCaregiverForm()) return;

    setIsRedirecting(true);

    const message = `*New Caregiver Application from Maxival Site*%0A%0A` +
      `• *Name:* ${encodeURIComponent(caregiverData.fullName)}%0A` +
      `• *Gender:* ${encodeURIComponent(caregiverData.gender)}%0A` +
      `• *Age:* ${encodeURIComponent(caregiverData.age)}%0A` +
      `• *Role:* ${encodeURIComponent(caregiverData.qualification)}%0A` +
      `• *Experience:* ${encodeURIComponent(caregiverData.experience)}%0A` +
      `• *Location:* ${encodeURIComponent(caregiverData.location)}%0A` +
      (caregiverData.startDate ? `• *Available From:* ${encodeURIComponent(caregiverData.startDate)}%0A` : "") +
      (caregiverData.cvLink ? `• *CV Link:* ${encodeURIComponent(caregiverData.cvLink)}%0A` : "") +
      (caregiverData.certificateLink ? `• *Certificate Link:* ${encodeURIComponent(caregiverData.certificateLink)}` : "");

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      setIsRedirecting(false);
    }, 1500);
  };

  const handleCareseekerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCareseekerForm()) return;

    setIsRedirecting(true);

    const urgency = careseekerData.urgent ? "URGENT" : "Routine";

    const message = `*New Client Inquiry - Maxival Care*%0A%0A` +
      `• *Contact:* ${encodeURIComponent(careseekerData.contactName)}%0A` +
      `• *Relationship:* ${encodeURIComponent(careseekerData.relationship)}%0A` +
      `• *Service:* ${encodeURIComponent(careseekerData.service)}%0A` +
      `• *Location:* ${encodeURIComponent(careseekerData.location)}%0A` +
      `• *Urgency:* ${urgency}`;

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      setIsRedirecting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-md shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Back to Home</span>
            </Link>
            <Link to="/">
              <img 
                src={logoHorizontal} 
                alt="Maxival Care and Support Services" 
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </Link>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Loading Overlay */}
      {isRedirecting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card rounded-2xl p-8 shadow-elevated text-center max-w-sm mx-4"
          >
            <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              Redirecting to WhatsApp...
            </h3>
            <p className="text-muted-foreground text-sm">
              Complete your application via WhatsApp for faster response.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Join Maxival Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Join the <span className="text-gradient">Maxival Family</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you're looking to build a rewarding career as a caregiver or seeking quality care for a loved one, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="caregiver" className="text-sm sm:text-base">
                  I Want to Work
                </TabsTrigger>
                <TabsTrigger value="careseeker" className="text-sm sm:text-base">
                  I Need Care
                </TabsTrigger>
              </TabsList>

              {/* Caregiver Application Form */}
              <TabsContent value="caregiver">
                <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      Caregiver Application
                    </h2>
                    <p className="text-muted-foreground">
                      Start your career with Maxival Care & Support Services
                    </p>
                  </div>

                  <form onSubmit={handleCaregiverSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          value={caregiverData.fullName}
                          onChange={(e) => setCaregiverData({ ...caregiverData, fullName: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select onValueChange={(value) => setCaregiverData({ ...caregiverData, gender: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Your age"
                          min="18"
                          max="65"
                          value={caregiverData.age}
                          onChange={(e) => setCaregiverData({ ...caregiverData, age: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="qualification">Qualification *</Label>
                        <Select onValueChange={(value) => setCaregiverData({ ...caregiverData, qualification: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nurse">Nurse</SelectItem>
                            <SelectItem value="Nanny">Nanny</SelectItem>
                            <SelectItem value="Caregiver">Caregiver</SelectItem>
                            <SelectItem value="Companion">Companion</SelectItem>
                            <SelectItem value="Housekeeper">Housekeeper</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select onValueChange={(value) => setCaregiverData({ ...caregiverData, experience: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                            <SelectItem value="1-2 years">1-2 years</SelectItem>
                            <SelectItem value="3-5 years">3-5 years</SelectItem>
                            <SelectItem value="5+ years">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Current Location (LGA) *</Label>
                        <Select onValueChange={(value) => setCaregiverData({ ...caregiverData, location: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select LGA" />
                          </SelectTrigger>
                          <SelectContent>
                            {portHarcourtLGAs.map((lga) => (
                              <SelectItem key={lga} value={lga}>{lga}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Available Start Date (Optional)</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={caregiverData.startDate}
                        onChange={(e) => setCaregiverData({ ...caregiverData, startDate: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvLink">CV/Resume Link (Google Drive, Dropbox, etc.)</Label>
                      <Input
                        id="cvLink"
                        type="url"
                        placeholder="https://drive.google.com/..."
                        value={caregiverData.cvLink}
                        onChange={(e) => setCaregiverData({ ...caregiverData, cvLink: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">
                        Upload your CV to Google Drive or Dropbox and paste the link here
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="certificateLink">Certificate/Qualification Link (Optional)</Label>
                      <Input
                        id="certificateLink"
                        type="url"
                        placeholder="https://drive.google.com/..."
                        value={caregiverData.certificateLink}
                        onChange={(e) => setCaregiverData({ ...caregiverData, certificateLink: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">
                        Share a link to your professional certificates or qualifications
                      </p>
                    </div>

                    <Button
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      disabled={!validateCaregiverForm() || isRedirecting}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Submit via WhatsApp
                    </Button>
                  </form>
                </div>
              </TabsContent>

              {/* Careseeker/Client Request Form */}
              <TabsContent value="careseeker">
                <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      Request Care Services
                    </h2>
                    <p className="text-muted-foreground">
                      Tell us about your care needs - Maxival Care & Support Services
                    </p>
                  </div>

                  <form onSubmit={handleCareseekerSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="Your full name"
                          value={careseekerData.contactName}
                          onChange={(e) => setCareseekerData({ ...careseekerData, contactName: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="relationship">Relationship to Patient *</Label>
                        <Input
                          id="relationship"
                          placeholder="e.g., Son, Daughter, Spouse"
                          value={careseekerData.relationship}
                          onChange={(e) => setCareseekerData({ ...careseekerData, relationship: e.target.value })}
                          required
                          maxLength={50}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select onValueChange={(value) => setCareseekerData({ ...careseekerData, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Home Nursing">Home Nursing</SelectItem>
                          <SelectItem value="Childcare">Childcare</SelectItem>
                          <SelectItem value="Elderly Care">Elderly Care</SelectItem>
                          <SelectItem value="Post-Surgery Care">Post-Surgery Care</SelectItem>
                          <SelectItem value="Companionship">Companionship</SelectItem>
                          <SelectItem value="Housekeeping">Housekeeping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="patientLocation">Patient Location *</Label>
                      <Input
                        id="patientLocation"
                        placeholder="Address in Port Harcourt"
                        value={careseekerData.location}
                        onChange={(e) => setCareseekerData({ ...careseekerData, location: e.target.value })}
                        required
                        maxLength={200}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-accent border border-border">
                      <div>
                        <Label htmlFor="urgent" className="font-medium text-foreground">
                          Urgent Request
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Toggle on if you need care within 24-48 hours
                        </p>
                      </div>
                      <Switch
                        id="urgent"
                        checked={careseekerData.urgent}
                        onCheckedChange={(checked) => setCareseekerData({ ...careseekerData, urgent: checked })}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      disabled={!validateCareseekerForm() || isRedirecting}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Submit via WhatsApp
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Maxival Care & Support Services Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JoinUs;
