import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgzeyvd");
  if (state.succeeded) {
      return (
        <div className="text-center text-card-foreground">
          <h2 className="text-2xl font-bold">Bedankt!</h2>
          <p>Ik neem zo snel mogelijk contact met je op.</p>
        </div>
      );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-card-foreground font-semibold">
          Je naam
        </Label>
        <Input
          id="name"
          name="name"
          placeholder=""
          className="bg-input border-0 rounded-2xl h-12 text-card-foreground placeholder:text-muted-foreground"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-card-foreground font-semibold">
          Email adres
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder=""
          className="bg-input border-0 rounded-2xl h-12 text-card-foreground placeholder:text-muted-foreground"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-card-foreground font-semibold">
          Bericht
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder=""
          rows={4}
          className="bg-input border-0 rounded-2xl text-card-foreground placeholder:text-muted-foreground resize-none"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <div className="flex justify-center pt-4">
        <Button type="submit" disabled={state.submitting} variant="accent" size="lg" className="px-12 py-3 rounded-2xl text-xl font-bold">
          Stuur!
        </Button>
      </div>
    </form>
  );
}

const ContactPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent toggling play/pause when clicking on the progress bar
    if ((e.target as HTMLElement).closest('.progress-bar-container')) {
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const seekTime = (clickPosition / progressBarWidth) * (videoRef.current?.duration || 0);
    
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Hero Text */}
          <div className="lg:flex flex-col items-center justify-around h-full py-16">
            <div>
              <div className="hero-text text-center">
                HELP DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
            <div className="hero-arrow">
              ↓
            </div>
          </div>

          {/* Center Video */}
          <div className="flex justify-center">
            <div
              className="video-container w-full max-w-sm aspect-[9/16] relative cursor-pointer"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/help-zwanzer.webm" type="video/webm" />
                {/* Fallback for when video is not available */}
                <img
                  src="/lovable-uploads/b22b275d-d619-4ba2-aad9-b68e3fd17c05.png"
                  alt="Help De Zwanzer"
                  className="w-full h-full object-cover"
                />
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24 text-white opacity-80"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {isPlaying && (
                <div 
                  className="progress-bar-container absolute bottom-4 left-4 right-4 h-2 bg-white bg-opacity-25 rounded-full cursor-pointer"
                  onClick={handleProgressSeek}
                >
                  <div 
                    className="progress-bar h-full bg-white rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Hero Text */}
          <div className="hidden lg:flex flex-col items-center justify-around h-full py-16">
            <div>
              <div className="hero-text text-center">
                HELP DE
              </div>
              <div className="hero-text text-center -mt-4">
                ZWANZER
              </div>
            </div>
            <div className="hero-arrow">
              ↓
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center">
          <div className="hero-text">
            HELP DE ZWANZER
          </div>
          
          <div className="flex justify-center w-full my-8">
            <div
              className="video-container w-full max-w-[22rem] aspect-[9/16] relative cursor-pointer"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/help-zwanzer.webm" type="video/webm" />
                {/* Fallback for when video is not available */}
                <img
                  src="/lovable-uploads/b22b275d-d619-4ba2-aad9-b68e3fd17c05.png"
                  alt="Help De Zwanzer"
                  className="w-full h-full object-cover"
                />
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24 text-white opacity-80"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {isPlaying && (
                <div 
                  className="progress-bar-container absolute bottom-4 left-4 right-4 h-2 bg-white bg-opacity-25 rounded-full cursor-pointer"
                  onClick={handleProgressSeek}
                >
                  <div 
                    className="progress-bar h-full bg-white rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
          
          <div className="hero-arrow">
            ↓
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="mt-16 flex justify-center" ref={formRef}>
          <Card className="contact-form w-full max-w-2xl">
            <h2 className="text-xl lg:text-3xl font-bold text-card-foreground mb-6 text-center">
              Kan jij mij helpen om iets megazot/uniek/graaf/grappig te doen? Laat het mij hieronder weten!
            </h2>
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;