import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Hero Text */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
            <div>
              <div className="hero-text text-center">
                HELP
              </div>
              <div className="hero-text text-center -mt-4">
                DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
            <div>
              <div className="hero-text text-center">
                HELP
              </div>
              <div className="hero-text text-center -mt-4">
                DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
          </div>

          {/* Center Video */}
          <div className="flex justify-center">
            <div className="video-container w-full max-w-sm aspect-[9/16]">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src="/lovable-uploads/b22b275d-d619-4ba2-aad9-b68e3fd17c05.png" type="video/mp4" />
                {/* Fallback for when video is not available */}
                <img 
                  src="/lovable-uploads/b22b275d-d619-4ba2-aad9-b68e3fd17c05.png" 
                  alt="Help De Zwanzer" 
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </div>

          {/* Right Hero Text */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
            <div>
              <div className="hero-text text-center">
                HELP
              </div>
              <div className="hero-text text-center -mt-4">
                DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
            <div>
              <div className="hero-text text-center">
                HELP
              </div>
              <div className="hero-text text-center -mt-4">
                DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Text */}
        <div className="lg:hidden text-center mb-8">
          <div className="hero-text">
            HELP DE ZWANZER
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 flex justify-center">
          <Card className="contact-form w-full max-w-md">
            <h2 className="text-3xl font-bold text-card-foreground mb-6 text-center">
              Contact Us
            </h2>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground font-semibold">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder=""
                  className="bg-input border-0 rounded-2xl h-12 text-card-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground font-semibold">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  className="bg-input border-0 rounded-2xl h-12 text-card-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-foreground font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder=""
                  rows={4}
                  className="bg-input border-0 rounded-2xl text-card-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button variant="accent" size="lg" className="px-12 py-3 rounded-2xl text-xl font-bold">
                  Send
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;