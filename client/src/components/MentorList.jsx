import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';

const MentorList = ({ selectedCategory, onBookClick }) => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/mentors');
        setMentors(res.data);
      } catch (error) {
        console.warn('API unavailable, using mock data');
        setMentors([
          { id: '65c4d6e9f9c7d4b4e8b45679', _id: '65c4d6e9f9c7d4b4e8b45679', name: 'Aman Verma', category: 'Comedy', followers: '1.2M', price: '₹2,999', slots: 5, image: 'https://i.pravatar.cc/150?img=11', desc: 'Viral sketch artist. Expert in short-form storytelling.', color: 'from-yellow-400 to-orange-500' },
          { id: '65c4d6e9f9c7d4b4e8b4567a', _id: '65c4d6e9f9c7d4b4e8b4567a', name: 'Riya Sharma', category: 'Finance', followers: '850k', price: '₹3,499', slots: 3, image: 'https://i.pravatar.cc/150?img=5', desc: 'Finance simplified. I help you build trust and monetize.', color: 'from-green-400 to-emerald-600' },
          // Keep others as mock IDs for now or generate new ones if needed, but these two are critical for login testing
          { id: '3', name: 'Kunal Fit', category: 'Fitness', followers: '1M', price: '₹2,499', slots: 4, image: 'https://i.pravatar.cc/150?img=12', desc: 'Transformation coach. Learn how to create fitness content that converts.', color: 'from-blue-500 to-cyan-400' },
          { id: '4', name: 'Neha Educates', category: 'Education', followers: '700k', price: '₹1,999', slots: 6, image: 'https://i.pravatar.cc/150?img=9', desc: 'Making learning fun.', color: 'from-purple-400 to-pink-400' },
          { id: '5', name: 'TechWithRaj', category: 'Tech', followers: '900k', price: '₹3,999', slots: 2, image: 'https://i.pravatar.cc/150?img=60', desc: 'Unboxing the future.', color: 'from-gray-700 to-gray-900' },
          { id: '6', name: 'Sarah Styles', category: 'Lifestyle', followers: '450k', price: '₹2,199', slots: 8, image: 'https://i.pravatar.cc/150?img=32', desc: 'Fashion & Lifestyle.', color: 'from-pink-500 to-rose-400' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || (mentor.category && mentor.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) return <div className="text-center py-20">Loading mentors...</div>;

  return (
    <section id="mentors" className="py-24 bg-white min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Top Mentors on MentorGram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Book a session with top creators and get personalized advice to skyrocket your growth.</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or category..."
              className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink shadow-sm"
            />
            <div className="absolute right-4 top-3 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col h-full animate-fade-in-up">
              <div className={`h-32 bg-gradient-to-r relative ${mentor.color}`}>
                <div className="absolute -bottom-12 left-6">
                  <img src={mentor.image} className="w-24 h-24 rounded-full border-4 border-white object-cover" alt={mentor.name} />
                </div>
              </div>
              <div className="pt-14 px-6 pb-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{mentor.category}</span> • <span className="font-semibold text-slate-900">{mentor.followers} Followers</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2 mb-4">{mentor.desc}</p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="block text-xs text-gray-500">Price per session</span>
                      <span className="text-xl font-bold text-slate-900">{mentor.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-gray-500">Availability</span>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">{mentor.slots} Slots left</span>
                    </div>
                  </div>
                  <button onClick={() => onBookClick(mentor)} className="w-full py-3 rounded-xl font-bold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition">Book Mentorship</button>
                </div>
              </div>
            </div>
          ))}

          {filteredMentors.length === 0 && (
            <div className="col-span-3 text-center py-12 text-gray-500">
              <p className="text-lg">No mentors found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); }} className="text-insta-pink hover:underline mt-2">Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MentorList;
