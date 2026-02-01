const CTA = () => {
    return (
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] insta-gradient-bg p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">Ready to Level Up Your <br />Instagram Game?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">Join thousands of creators who have fast-tracked their success with MentorGram.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="#mentors" className="bg-white text-insta-pink px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Explore Mentors
            </a>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
