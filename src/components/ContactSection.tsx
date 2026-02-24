import { Button } from "./ui/button";
import { Phone, Mail, Clock, Users, Calendar, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import harmoniqLogo from 'figma:asset/6e45135b002ab6bd948c04b5f67cde05cd9cc6d4.png';
import harmoniqSmallLogo from 'figma:asset/3c270814f6d37ae21663366a29b474ae7dfacfa0.png';

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

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["020 3494 4044"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["enquiries@harmoniqenergy.com"]
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="inline-block glass bg-white/10 px-6 py-3 rounded-full">
              <span className="text-sm font-medium flex items-center gap-3">
                <div className="logo-container w-8 h-8">
                  <img 
                    src={harmoniqSmallLogo} 
                    alt="HarmoniQ Technologies Logo" 
                    className="w-full h-full object-contain harmoniq-logo"
                    style={{ background: 'transparent' }}
                  />
                </div>
                Contact HarmoniQ Technologies
              </span>
            </div>
            
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
          
          {/* Right Column - Enhanced Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] relative">
              
              {/* Phone Frame */}
              <div className="relative">
                {/* Phone Outer Frame */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl border border-slate-600/50">
                  
                  {/* Phone Inner Frame */}
                  <div className="bg-black rounded-[2.5rem] p-1 relative overflow-hidden">
                    
                    {/* Phone Screen */}
                    <div className="bg-gradient-to-b from-slate-900 to-black rounded-[2.2rem] overflow-hidden relative h-[680px] w-full">
                      
                      {/* Status Bar - Cleaned up without signal dots */}
                      <div className="h-10 bg-black/20 flex items-center justify-between px-6 text-xs text-white/70">
                        <span className="font-medium"></span>
                        <div className="w-4 h-4"></div> {/* Empty space where signal indicators were */}
                      </div>
                      
                      {/* Screen Content */}
                      <div className="p-6 h-full flex flex-col">
                        
                        {/* Header with logo */}
                        <div className="text-center space-y-4 mb-8">
                          <div className="logo-container w-14 h-14 mx-auto">
                            <img 
                              src={harmoniqSmallLogo} 
                              alt="HarmoniQ Technologies Logo" 
                              className="w-full h-full object-contain harmoniq-logo"
                              style={{ background: 'transparent' }}
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white">HarmoniQ Technologies</h3>
                            <p className="text-sm text-white/70">Power Optimization Experts</p>
                          </div>
                        </div>
                        
                        {/* Contact Details */}
                        <div className="space-y-8 flex-1">
                          {contactDetails.map((contact, index) => (
                            <div key={index} className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                  <contact.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white">{contact.title}</h4>
                              </div>
                              <div className="ml-16 space-y-2">
                                {contact.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-base text-white/90 font-medium">{detail}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Text Message Style Call to Action */}
                        <div className="mt-6 mb-8">
                          <div className="flex justify-end mb-2">
                            <div className="max-w-[280px] bg-primary rounded-3xl rounded-br-lg px-6 py-4 relative">
                              {/* Message bubble tail */}
                              <div className="absolute -bottom-1 right-3 w-4 h-4 bg-primary transform rotate-45"></div>
                              <div className="space-y-2">
                                <p className="text-sm font-semibold text-black">Ready to save up to 25% on energy costs?</p>
                                <p className="text-xs text-black/80">Contact us for a free consultation today!</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Message timestamp */}
                          <div className="flex justify-end">
                            <p className="text-xs text-white/50">Now</p>
                          </div>
                          
                          {/* Message input area */}
                          <div className="mt-4 bg-slate-800/50 rounded-full px-4 py-3 flex items-center gap-3">
                            <div className="flex-1 text-sm text-white/60">Send message...</div>
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                  </div>
                </div>
                
                {/* Phone Shadow/Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-green-600/20 rounded-[3rem] blur-xl transform scale-105"></div>
              </div>
              
              {/* Floating UI Elements - Free Consultation moved down further */}
              <div className="hidden xl:block">
                {/* Free Consultation - Moved down more to better position */}
                <div className="absolute top-16 -right-16 glass px-4 py-3 rounded-xl shadow-lg spatial bg-black/80 border border-white/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div className="text-sm font-medium text-white">Free Consultation</div>
                  </div>
                </div>
                
                {/* Expert Support - Positioned clear of green message box */}
                <div className="absolute bottom-32 -left-24 glass px-4 py-3 rounded-xl shadow-lg spatial bg-black/80 border border-white/20">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <div className="text-sm font-medium text-white">Expert Support</div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[500px] bg-primary/30 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-20">
          

        </div>


      </div>
    </section>
  );
}