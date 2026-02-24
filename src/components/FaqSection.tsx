import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Zap } from "lucide-react";
import harmoniqLogo from 'figma:asset/c605d71870e71f95d2252da775804a607f8e9a95.png';

export function FaqSection() {
  const faqs = [
    {
      question: "How much energy savings can I expect with HarmoniQ?",
      answer: "HarmoniQ delivers up to 25% energy reduction through our patented magnetic wave technology that compresses electrical noise into pure 50 / 60 Hz current. Actual savings depend on your facility's current power quality and equipment configuration."
    },
    {
      question: "How long does installation take and will it disrupt operations?",
      answer: "Installation is designed to be non-disruptive and typically takes 4-6 hours per site. Our patented technology is easy to install alongside existing electric equipment without any downtime to your operations."
    },
    {
      question: "What types of facilities benefit most from HarmoniQ technology?",
      answer: "HarmoniQ is ideal for energy-intensive operations with heavy electric motor use including supermarkets, data centers, water utilities, manufacturing facilities, cold storage, airports, and large commercial buildings."
    },
    {
      question: "How does the 36-month rental model work?",
      answer: "Our rental model costs £3,500 per month per site with a £5,000 implementation fee. This includes installation, 24/7 monitoring, maintenance, and technical support. Most customers achieve cash breakeven in under 4 months."
    },
    {
      question: "What makes HarmoniQ different from other energy solutions?",
      answer: "HarmoniQ uses unique magnetic wave technology to compress noise into pure 50 / 60 Hz electric current. No competing product achieves the same level of energy savings. We offer free pilot projects to demonstrate results risk-free."
    },
    {
      question: "Do you provide ongoing support and monitoring?",
      answer: "Yes, our rental model includes 24/7 monitoring, technical support, equipment maintenance, and performance optimization. We guarantee system reliability with 99.9% uptime and provide real-time energy monitoring throughout your contract."
    },
    {
      question: "How can I start a free pilot project?",
      answer: "Contact our team to schedule a free consultation and site assessment. We'll install our technology at no cost for the pilot period, measure your energy savings, and provide detailed performance reports before you commit to a rental agreement."
    },
    {
      question: "What geographic markets does HarmoniQ serve?",
      answer: "HarmoniQ serves high-energy users across EMEA markets (Europe, Middle East, and Africa) from our UK headquarters. We provide local technical support and can scale across multiple sites for enterprise customers."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block glass px-4 py-2 rounded-full mb-4">
              <span className="text-sm text-primary font-medium flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Support & FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about HarmoniQ's power optimization technology, 
              installation process, rental model, and energy savings capabilities.
            </p>
          </div>

          <div className="glass rounded-2xl border border-white/10 overflow-hidden mb-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-6 py-4 hover:bg-white/5 transition-colors text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="glass p-8 rounded-2xl text-center">
            <div className="logo-container w-16 h-16 rounded-full bg-transparent flex items-center justify-center mx-auto mb-6 p-2">
              <img 
                src={harmoniqLogo} 
                alt="HarmoniQ Logo" 
                className="w-full h-full object-contain harmoniq-logo"
                style={{ background: 'transparent' }}
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our energy optimization experts are ready to help. Schedule a free consultation 
              to discuss your specific requirements and learn how HarmoniQ can optimize your energy consumption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass bg-primary/90 hover:bg-primary/100 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Schedule Free Consultation
              </button>
              <button className="glass border border-primary/30 text-primary hover:bg-primary/5 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Contact Technical Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}