const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg insta-gradient-bg flex items-center justify-center text-white font-bold text-lg">M</div>
                <span className="font-bold text-xl tracking-tight">MentorGram</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-6">
                The platform connecting aspiring creators with established influencers for 1-on-1 mentorship.
              </p>
            </div>
  
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-insta-pink">Browse Mentors</a></li>
                <li><a href="#" className="hover:text-insta-pink">How It Works</a></li>
                <li><a href="#" className="hover:text-insta-pink">Pricing</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-insta-pink">About Us</a></li>
                <li><a href="#" className="hover:text-insta-pink">Become a Mentor</a></li>
                <li><a href="#" className="hover:text-insta-pink">Contact</a></li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MentorGram. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Demo platform – for showcase purposes only</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
