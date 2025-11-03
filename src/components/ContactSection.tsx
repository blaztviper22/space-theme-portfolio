import { AtSign, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, } from "lucide-react"
import { cn } from "../utilities/utils"
import toast from "react-hot-toast";
import { useState } from "react";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast("Message sent! Thank you for your message. I'll get back to you soon.")
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects,
          creative ideas, innovations, or opportunities to be part of your visions. 
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>

                <div className="flex flex-row gap-2">
                  <h4>Email:</h4>
                  <a 
                    href="mailto:blaztviper22@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    blaztviper22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>

                <div className="flex flex-row gap-2">
                  <h4>Phone:</h4>
                  <a 
                    href="tel:+639308309534" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +63 930-830-9534
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>

                <div>
                  <div className="flex flex-start">
                    <h4>Location:</h4>
                  </div>
                  <a 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sindangan, Zambo Del Norte, Ph 7112
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/berthem-benitez-jr-452940294/" target="_blank">
                  <Linkedin />
                </a>

                <a href="https://www.threads.com/@zero10ne" target="_blank">
                  <AtSign />
                </a>

                <a href="https://www.facebook.com/hackeer123asxd" target="_blank">
                  <Facebook />
                </a>

                <a href="https://www.instagram.com/zero10ne/" target="_blank">
                  <Instagram/>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a message  </h3>

            <form action="" className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="" 
                  id="" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Berthem Benitez Jr...." 
                />
              </div>

              <div>
                <label 
                  htmlFor="Email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="blaztviper22@gmail.com" 
                />
              </div>

              <div>
                <label 
                  htmlFor="Message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea  
                  name="message" 
                  id="message" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello let's disscuss your bussiness you want...." 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                <Send size={19} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection