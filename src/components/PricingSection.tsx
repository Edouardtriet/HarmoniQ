import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, ArrowRight, Star, Zap, Shield, TrendingUp, Clock, PoundSterling } from "lucide-react";

export function PricingSection() {
  const rentalFeatures = [
    "36-month rental agreement",
    "£5,000 one-time implementation fee",
    "Professional installation included",
    "24/7 monitoring & support",
    "Guaranteed energy savings",
    "Equipment maintenance included",
    "Performance optimization",
    "Cash breakeven under 4 months"
  ];

  const businessBenefits = [
    {
      icon: PoundSterling,
      title: "Fixed Monthly Fee",
      description: "Predictable £3,500/month per site with transparent pricing"
    },
    {
      icon: TrendingUp,
      title: "Large Monthly ROI",
      description: "Significant return on investment for customers from day one"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "3-year or 5-year initial term options available"
    },
    {
      icon: CheckCircle,
      title: "Lower-level Sign-off",
      description: "Streamlined approval process requiring minimal authorization"
    }
  ];

  const keyAdvantages = [
    {
      icon: Zap,
      title: "Up to 25% Energy Reduction",
      description: "Proven savings through power quality improvement",
      highlight: "Immediate impact"
    },
    {
      icon: Shield,
      title: "Equipment Life Extension",
      description: "Reduced operating temperature and maintenance costs",
      highlight: "Long-term value"
    },
    {
      icon: TrendingUp,
      title: "Fast Payback",
      description: "Cash breakeven on new contracts in under 4 months",
      highlight: "Quick ROI"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Rental Business Model</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
            Simple 
            <span className="gradient-text"> Fixed Monthly Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Easy-to-buy-from rental model with predictable costs and large monthly ROI for customers. 
            Streamlined approval process with lower-level sign-off required.
          </p>
        </div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {keyAdvantages.map((advantage, index) => (
            <div key={index} className="glass p-6 rounded-2xl text-center hover-3d">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mx-auto mb-4 text-white">
                <advantage.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{advantage.description}</p>
              <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                {advantage.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Main Rental Model Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass border-none hover-3d relative ring-2 ring-primary">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-white px-4 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Rental Business Model
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                  <span className="text-2xl font-medium">01</span>
                </div>
                <div className="text-left">
                  <CardTitle className="text-2xl mb-1">36-Month Rental Model</CardTitle>
                  <p className="text-muted-foreground">Fixed monthly fee with guaranteed ROI</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-medium gradient-text mb-1">£3,500</div>
                  <div className="text-sm text-muted-foreground">per month per site</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-primary mb-1">£5,000</div>
                  <div className="text-sm text-muted-foreground">implementation fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-green-600 mb-1">~48% GM</div>
                  <div className="text-sm text-muted-foreground">gross margin</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {rentalFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Easy-to-buy-from Benefits
                  </h4>
                  <div className="space-y-4">
                    {businessBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{benefit.title}</div>
                          <div className="text-xs text-muted-foreground">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                  Start Rental Agreement
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="flex-1 rounded-full glass">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                <span className="text-xl font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium">Accelerated Sales Cycle</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Fixed monthly fee structure</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Large monthly ROI for the customer</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">3-year or 5-year initial term options</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lower-level sign-off required</span>
              </li>
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-medium mb-4">Why Choose Our Rental Model?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Cash Breakeven Under 4 Months</div>
                  <div className="text-xs text-muted-foreground">Fast return on investment</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Risk-Free Operation</div>
                  <div className="text-xs text-muted-foreground">All maintenance & support included</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Scalable Solution</div>
                  <div className="text-xs text-muted-foreground">Easy to expand across multiple sites</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-medium mb-4">
            Ready to Start Your Rental Agreement?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join customers achieving 25% energy savings with our fixed monthly rental model. 
            Predictable costs, guaranteed ROI, and cash breakeven in under 4 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              Get Rental Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 glass">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}