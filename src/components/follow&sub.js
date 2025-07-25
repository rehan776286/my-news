import { useState } from "react";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react"; // Importing icons from lucide-react

const SocialFollowCard = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false); // State to manage subscription status

  // Placeholder for social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/yourpage",
    },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourhandle" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/yourprofile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/yourcompany",
    },
  ];

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing with email:", email);
      // In a real application, you would send this email to your backend
      // For this example, we'll just set a flag
      setIsSubscribed(true);
      setTimeout(() => {
        // Reset after a short delay for demonstration
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    } else {
      console.log("Email field is empty.");
      // You might want to show an error message to the user
    }
  };

  return (
    <div className="w-full max-w-1xl mx-auto  p-2  bg-gradient-to-br from-blue-50 to-indigo-100 rounded-b-2xl shadow-lg border-r border-l border-b  border-blue-200 font-inter">
      <div className=" ">
        <p className="text-gray-600 text-lg md:text-xl">
          Follow us on social media and subscribe to our newsletter for the
          latest news and insights.
        </p>
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-2 text-center">
        Follow Us
      </h3>
      {/* Social Media Section */}
      <div className="mb-1 flex justify-between items-center">
        <button
          type="submit"
          className={`flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              ${
                isSubscribed
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          disabled={isSubscribed}
        >
          {isSubscribed ? (
            <>
              <Mail className="w-5 h-5 mr-2" /> Subscribed!
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" /> Subscribe
            </>
          )}
        </button>

        {isSubscribed && (
          <p className="text-center text-green-600 mt-4 text-sm font-medium animate-bounce">
            Thank you for subscribing!
          </p>
        )}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full bg-white text-gray-600 shadow-md hover:shadow-lg hover:text-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out group"
              aria-label={`Follow us on ${link.name}`}
            >
              <link.icon className="w-7 h-7" />
              <span className="sr-only">{link.name}</span>{" "}
              {/* Screen reader text */}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription Section */}
    </div>
  );
};

export default SocialFollowCard;
