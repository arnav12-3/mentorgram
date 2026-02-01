const Agencies = ({ onJoinClick }) => {
    return (
      <section id="agencies" className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-insta-pink opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-insta-blue opacity-10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1">
                      <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-xs font-bold mb-4">FOR TALENT MANAGEMENT AGENCIES</div>
                      <h2 className="text-4xl font-bold mb-6">Partner with MentorGram & Monetize Your Creator Roster</h2>
                      <p className="text-gray-400 text-lg mb-8">
                          Are you managing top influencers like Monk Entertainment or Pocket Aces? Let your talent become mentors on MentorGram and unlock a new revenue stream with commission on every session booked.
                      </p>
                      <ul className="space-y-4 mb-8">
                          {[
                              { icon: '💰', text: 'Earn Commission – Get a % cut on every mentorship session your creators deliver' },
                              { icon: '📊', text: 'Dashboard Access – Track bookings, earnings, and performance metrics in real-time' },
                              { icon: '🤝', text: 'Onboard Your Roster – Seamlessly add your entire talent network to the platform' },
                              { icon: '🎯', text: 'White-Glove Support – Dedicated account manager for agency partners' }
                          ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded bg-insta-pink flex items-center justify-center font-bold">{item.icon}</div>
                                  <span dangerouslySetInnerHTML={{ __html: item.text.replace('–', '<strong>–</strong>') }}></span>
                              </li>
                          ))}
                      </ul>
                      <button onClick={() => onJoinClick('agency')} className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition shadow-lg">
                          Become a Partner Agency
                      </button>
                  </div>
                  <div className="order-1 md:order-2 relative">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Agency Meeting" className="rounded-3xl shadow-2xl opacity-90 hover:opacity-100 transition duration-500" />
                      <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                          <p className="text-slate-900 font-bold text-lg">Partner Agencies</p>
                          <p className="text-gray-500 text-sm">Monk E., Pocket Aces & more</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  };
  
  export default Agencies;
