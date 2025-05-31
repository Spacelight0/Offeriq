import { useState, useEffect } from 'react';

export default function App() {
  const [visibleSections, setVisibleSections] = useState({});

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-pink-50 text-gray-800 font-sans">
      {/* Header / Logo */}
      <header className="fixed top-0 left-0 right-0 z-30 px-4 py-4 bg-white/90 backdrop-blur-md shadow-sm flex justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold animate-gradient-header">
          Offeriq
        </h1>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden pt-32">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-pink-100 opacity-40 transition-all duration-1000 ${
            visibleSections.hero ? 'opacity-40' : 'opacity-0'
          }`}
        ></div>
        <div
          className={`max-w-3xl text-center mx-auto z-10 transform transition-all duration-700 ease-out ${
            visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-gradient-text`}
          >
            Make Your Offer Clear and Irresistible.
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-600 mb-10 transition-opacity duration-700 ${
              visibleSections.hero ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            I rewrite every word that explains, pitches, and sells your coaching — so people instantly "get it" and want to work with you.
          </p>
          <a
            href="#booking"
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 animate-gradient-button"
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              animation: visibleSections.hero ? 'gradientMove 8s ease infinite' : 'none',
            }}
          >
            Book Free Offer Review
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="px-6 py-16 bg-white/90 backdrop-blur-sm">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            You're a great coach. But your offer isn't clear.
          </h2>
          <ul className="space-y-4 text-left max-w-xl mx-auto">
            {[
              "Your bio confuses people",
              "Your link page gets no clicks",
              "Your pitch doesn’t lead to calls",
              "People ghost after asking, 'So what do you do?'",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-start space-x-2 p-2 rounded-md ${
                  visibleSections.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms`, transitionDuration: '500ms' }}
              >
                <span className="text-red-500 mt-1">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p
            className={`mt-6 text-gray-600 italic transition-opacity duration-500 ${
              visibleSections.problem ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            I fix the words that sell your service — with total clarity.
          </p>
        </div>
      </section>

      {/* SellReady 7 Section */}
      <section id="sellready" className="px-6 py-16 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.sellready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6">
            <h3
              className="text-xl font-semibold mb-2 animate-gradient-text"
              style={{
                backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
                backgroundSize: '600% 600%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Introducing
            </h3>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent animate-gradient-text"
              style={{
                backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
                backgroundSize: '600% 600%',
              }}
            >
              SellReady 7
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            I don’t fix one line. I fix everything. You’ll walk away with a complete set of rewritten words for your offer — across all the places your audience sees it.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Instagram Bio",
              "Link-in-Bio or Stan Store buttons",
              "DM and sales call script",
              "Offer announcement post/caption",
              "Landing page or website copy",
              "Any other offer-based copy (Google Docs, emails, Notion)",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center space-x-2 p-2 hover:bg-indigo-50 rounded-md transition-all duration-500 ${
                  visibleSections.sellready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-green-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-16 bg-white/90 backdrop-blur-sm">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            visibleSections['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold text-center mb-12 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Your 8-Step Clarity Journey
          </h2>
          <div className="space-y-8">
            {[
              "Book free review call or DM chat",
              "We review your current messaging",
              "You share all your offer links (bio, DM, site, etc.)",
              "We agree on what’s needed + scope (we’ll discuss pricing then)",
              "I rewrite all your offer messaging in 7 days",
              "I deliver your Clarity Kit (Notion/Google Doc)",
              "You get 4 weeks of free rewrite support (1 update/week)",
              "You’re covered by a 30-day satisfaction guarantee",
            ].map((desc, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-4 group ${
                  visibleSections['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span
                  className="text-indigo-700 font-bold animate-number-color"
                  style={{
                    backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
                    backgroundSize: '600% 600%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {idx + 1}
                </span>
                <div className="text-gray-700">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee + Support */}
      <section id="guarantee" className="px-6 py-16 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.guarantee ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            You’re Covered, Start to Finish.
          </h2>
          <ul className="space-y-4 text-left max-w-xl mx-auto">
            <li
              className={`flex items-start space-x-2 p-2 hover:bg-indigo-50 rounded-md transition-all duration-500 ${
                visibleSections.guarantee ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong>30-Day Satisfaction Guarantee</strong>
                <br />
                If you're not happy, I'll revise or refund — no awkwardness.
              </div>
            </li>
            <li
              className={`flex items-start space-x-2 p-2 hover:bg-indigo-50 rounded-md transition-all duration-500 ${
                visibleSections.guarantee ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong>4 Weeks. 4 Rewrite Requests.</strong>
                <br />
                After delivery, you can request 1 update per week for 4 weeks — to refine, adjust, or improve your offer copy.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section id="for-whom" className="px-6 py-16 bg-white/90 backdrop-blur-sm">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections['for-whom'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-10 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Coaches who are struggling to explain their offer clearly",
              "Coaches getting low engagement or no DMs",
              "Coaches who want to sound like a pro (without sounding salesy)",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-500 ${
                  visibleSections['for-whom'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-16 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            Hi, I’m Tirthankar — founder of Offeriq. I built this service to help good coaches sound great. Because the right words create trust. And trust books calls.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-16 bg-white/90 backdrop-blur-sm">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-10 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            What Clients Will Say Soon...
          </h2>
          <blockquote
            className={`italic text-gray-700 border-l-4 border-indigo-300 pl-4 mb-4 ${
              visibleSections.testimonials ? 'animate-slideInLeft' : ''
            }`}
          >
            “I finally have an offer that makes people DM me.”
          </blockquote>
          <blockquote
            className={`italic text-gray-700 border-l-4 border-indigo-300 pl-4 ${
              visibleSections.testimonials ? 'animate-slideInRight' : ''
            }`}
          >
            “This was the missing piece in my coaching business.”
          </blockquote>
          <p className="mt-6 text-sm text-gray-500">
            These are sample results based on what this service is built to deliver. Real testimonials coming soon.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="booking" className="px-6 py-16 bg-gradient-to-b from-indigo-50 to-pink-50">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            visibleSections.booking ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 animate-gradient-text`}
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Let’s Rewrite Your Offer — So It Sells.
          </h2>
          <h3 className="text-2xl font-bold mb-10 text-gray-700">
            Book a free review. I’ll audit your offer and show you exactly what I’d fix — before we discuss pricing.
          </h3>
          <a
            href="https://calendly.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 animate-gradient-button"
            style={{
              backgroundImage: 'linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899)',
              backgroundSize: '600% 600%',
              animation: visibleSections.booking ? 'gradientMove 8s ease infinite' : 'none',
            }}
          >
            Book My Free Offer Review
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className={`text-center text-gray-500 text-sm py-6 transition-all duration-700 ${
          visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        © {new Date().getFullYear()} Offeriq. All rights reserved.
      </footer>

      {/* Scroll Indicator */}
      <div className="fixed bottom-6 right-6 flex space-x-2 z-20">
        {['hero', 'problem', 'sellready', 'how-it-works', 'guarantee', 'for-whom', 'about', 'testimonials', 'booking'].map((id) => (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              visibleSections[id] ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Scroll to ${id}`}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        @keyframes gradientMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradientText {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-button {
          background-size: 600% 600%;
          animation: gradientMove 8s ease infinite;
        }

        .animate-gradient-text {
          background: linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899);
          background-size: 600% 600%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientText 8s ease infinite;
        }

        .animate-gradient-header {
          background: linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899);
          background-size: 600% 600%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientText 8s ease infinite;
        }

        .animate-number-color {
          background: linear-gradient(270deg, #4f46e5, #ec4899, #3b82f6, #ec4899);
          background-size: 600% 600%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientText 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
