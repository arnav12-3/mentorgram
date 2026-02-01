import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';
// Just use simple alert for immediate feedback
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Categories from '../components/Categories';
import MentorList from '../components/MentorList';
import Agencies from '../components/Agencies';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

// Modals
import AuthModal from '../components/modals/AuthModal';
import JoinModal from '../components/modals/JoinModal';
import BookingModal from '../components/modals/BookingModal';
import PaymentModal from '../components/modals/PaymentModal';
import AgencyDashboardModal from '../components/modals/AgencyDashboardModal';
import MentorDashboardModal from '../components/modals/MentorDashboardModal';
import UserBookingsModal from '../components/modals/UserBookingsModal';
import ProfileModal from '../components/modals/ProfileModal';

const Home = ({ user, onLogin, onLogout }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  // user state lifted to App.jsx

  // Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [joinTab, setJoinTab] = useState('user'); // Changed from 'creator' to match modal tabs if needed, or keep 'creator'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isAgencyDashboardOpen, setIsAgencyDashboardOpen] = useState(false);
  const [isMentorDashboardOpen, setIsMentorDashboardOpen] = useState(false);
  const [isUserBookingsOpen, setIsUserBookingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Handlers
  const handleLogin = (userData) => {
    onLogin(userData);
    setIsAuthOpen(false);
    // Redirect to dedicated dashboard
    if (userData.role === 'agency') {
      navigate('/agency');
    } else if (userData.role === 'mentor') {
      navigate('/mentor');
    }
  };

  const handleJoinClick = (type) => {
    setJoinTab(type);
    setIsJoinOpen(true);
  };

  const handleBookClick = (mentor) => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    setSelectedMentor(mentor);
    setIsBookingOpen(true);
  };

  const handleBookingProceed = (data) => {
    setBookingData(data);
    setIsBookingOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = async () => {
    if (!bookingData) {
      alert("Error: No booking data found!");
      return;
    }
    if (!user) {
      alert("Error: You must be logged in to book.");
      return;
    }

    try {
      await api.post('/api/bookings', {
        mentor: bookingData.mentor._id || bookingData.mentor.id,
        user: user._id,
        date: bookingData.date,
        time: '10:00 AM', // Default time
        topic: bookingData.topic,
        price: bookingData.price
      });
      alert("Booking Successful! Check 'My Bookings' for the Google Meet link.");
    } catch (error) {
      console.error("Failed to save booking", error);
      alert("Booking Failed! Please check console.");
    }
  };

  const openDashboard = () => {
    if (user?.role === 'agency') navigate('/agency');
    if (user?.role === 'mentor') navigate('/mentor');
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        onLoginClick={() => setIsAuthOpen(true)}
        onJoinClick={handleJoinClick}
        user={user}
        onLogout={onLogout}
        onDashboardClick={openDashboard}
        onMyBookingsClick={() => setIsUserBookingsOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      {/* Floating Dashboard Button for Agency/Mentor */}
      {(user?.role === 'agency' || user?.role === 'mentor') && (
        <div className="fixed bottom-4 right-4 z-40 animate-fade-in-up">
          <button
            onClick={openDashboard}
            className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-800 transition flex items-center gap-2 border-2 border-slate-700"
          >
            <span>📊</span> Go to Dashboard
          </button>
        </div>
      )}

      <Hero onExploreClick={() => document.getElementById('mentors').scrollIntoView({ behavior: 'smooth' })} onJoinClick={handleJoinClick} />
      <ProblemSolution />
      <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <MentorList selectedCategory={selectedCategory} onBookClick={handleBookClick} />
      <Agencies onJoinClick={handleJoinClick} />
      <HowItWorks />
      <CTA />
      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        initialTab={joinTab}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        mentor={selectedMentor}
        onProceed={handleBookingProceed}
      />
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        bookingData={bookingData}
        onPaymentSuccess={handlePaymentSuccess}
      />
      <AgencyDashboardModal
        isOpen={isAgencyDashboardOpen}
        onClose={() => setIsAgencyDashboardOpen(false)}
      />
      <MentorDashboardModal
        isOpen={isMentorDashboardOpen}
        onClose={() => setIsMentorDashboardOpen(false)}
        user={user}
      />
      <UserBookingsModal
        isOpen={isUserBookingsOpen}
        onClose={() => setIsUserBookingsOpen(false)}
        user={user}
      />
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
      />
    </div>
  );
};

export default Home;
