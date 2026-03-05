import { Button } from "./ui/button";
import { Phone, Mail, Clock, Users, Calendar, Linkedin } from "lucide-react";

export function ContactSection() {
  const contactFeatures = [
    {
      icon: Phone,
      title: "Expert Consultation",
      description: "Speak directly with our energy optimization specialists"
    },
    {
      icon: Calendar,
      title: "Free Site Assessment",
      description: "Schedule a complimentary energy audit for your facility"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get ongoing support from our technical team throughout your project"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Quick response times for quotes, installations, and technical support"
    }
  ];

  return (
    <section id="contact" className="pt-20 pb-12 bg-gradient-to-br from-primary/80 to-green-600/80 text-white relative overflow-hidden contact-section">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Ready to optimize your energy consumption? Contact our team of experts to discuss 
                your requirements, schedule a free pilot project, or learn more about our proven energy solutions.
              </p>
            </div>
            
            {/* Contact Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="glass bg-black/80 hover:bg-black/90 text-white rounded-xl h-16 px-6 spatial">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs text-white/80">Call us now</div>
                    <div className="text-lg font-semibold">020 3494 4044</div>
                  </div>
                </div>
              </Button>
              
              <Button className="glass bg-black/80 hover:bg-black/90 text-white rounded-xl h-16 px-6 spatial">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs text-white/80">Email us</div>
                    <div className="text-lg font-semibold">Get Quote</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* LinkedIn Button - Aligned with Action Buttons */}
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/company/harmoniq-energy/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit"
              >
                <div className="glass bg-black/85 hover:bg-black/95 px-6 py-4 rounded-2xl shadow-lg spatial border border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center group-hover:bg-[#005885] transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-base font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                      Find us on LinkedIn
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}