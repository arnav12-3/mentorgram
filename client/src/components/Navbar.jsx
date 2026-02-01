import { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, onJoinClick, user, onLogout, onDashboardClick, onMyBookingsClick, onProfileClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-8 h-8 rounded-lg insta-gradient-bg flex items-center justify-center text-white font-bold text-lg">M</div>
            <span className="font-bold text-xl tracking-tight">MentorGram</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-insta-pink transition font-medium text-sm">How it Works</a>
            <a href="#mentors" className="text-gray-600 hover:text-insta-pink transition font-medium text-sm">Find Mentors</a>
            <a href="#agencies" className="text-gray-600 hover:text-insta-pink transition font-medium text-sm">For Agencies</a>

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Auth Area */}
            {!user ? (
              <button
                onClick={onLoginClick}
                className="text-slate-900 font-medium text-sm hover:text-insta-pink transition"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <img src={user.avatar} className="w-8 h-8 rounded-full border-2 border-insta-pink" alt="User" />
                  <span className="text-sm font-medium">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {(user.role === 'agency' || user.role === 'mentor') && (
                      <button onClick={onDashboardClick} className="block w-full text-left px-4 py-2 text-sm text-slate-900 font-bold hover:bg-gray-50">
                        Dashboard
                      </button>
                    )}
                    <button onClick={onMyBookingsClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Bookings</button>
                    <button onClick={onProfileClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</button>
                    <hr className="my-2 border-gray-100" />
                    <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => onJoinClick('creator')}
              className="text-slate-900 font-medium text-sm hover:text-insta-pink transition"
            >
              Join as Creator
            </button>
            <button
              onClick={() => onJoinClick('agency')}
              className="bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-slate-800 transition shadow-lg shadow-slate-900/20"
            >
              Join as Agency
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-gray-900">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 absolute w-full top-16 left-0 shadow-lg animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium">How it Works</a>
            <a href="#mentors" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium">Explore Mentors</a>
            <a href="#agencies" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium">For Agencies</a>
            <hr className="border-gray-100" />

            {!user ? (
              <button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="text-left text-slate-900 font-medium">Login</button>
            ) : (
              <>
                <div className="flex items-center gap-2 py-2">
                  <img src={user.avatar} className="w-8 h-8 rounded-full border-2 border-insta-pink" alt="User" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button className="text-left text-gray-600 font-medium">My Bookings</button>
                <button onClick={onLogout} className="text-left text-red-600 font-medium">Logout</button>
              </>
            )}

            <hr className="border-gray-100" />
            <button onClick={() => { onJoinClick('creator'); setMobileMenuOpen(false); }} className="text-left text-slate-900 font-medium">Join as Creator</button>
            <button onClick={() => { onJoinClick('agency'); setMobileMenuOpen(false); }} className="bg-slate-900 text-white w-full py-2 rounded-lg font-bold text-center">Join as Agency</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
