import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { CourseOffer } from '../types';
import { Clock, DollarSign, BookOpen, Pencil, Trash2, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import toast from 'react-hot-toast';
import Section from "../components/Section";



export default function CourseListAdmin() {
  const [offers, setOffers] = useState<CourseOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingOffer, setEditingOffer] = useState<CourseOffer | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<CourseOffer | null>(null);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const { data, error } = await supabase
        .from('course_offers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOffers(data || []);
    } catch (error) {
      console.error('Error fetching offers:', error);
      toast.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;

    try {
      const { error } = await supabase
        .from('course_offers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Course deleted successfully');
      setOffers(offers.filter(offer => offer.id !== id));
      if (selectedOffer?.id === id) setSelectedOffer(null);
      if (editingOffer?.id === id) setEditingOffer(null);
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Failed to delete course');
    }
  };

  const handleUpdate = async (id: string, updates: Partial<CourseOffer>) => {
    try {
      const { error } = await supabase
        .from('course_offers')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Course updated successfully');
      setOffers(offers.map(offer => 
        offer.id === id ? { ...offer, ...updates } : offer
      ));
      setEditingOffer(null);
    } catch (error) {
      console.error('Error updating course:', error);
      toast.error('Failed to update course');
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [offers.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (offers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No courses available yet.</p>
      </div>
    );
  }

  return (   
    <Section>
    <div className="container">   
      <div className="relative max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl  shadow-2xl p-[2px] bg-gradient-to-r from-blue-800 via-violet-800 to-blue-500">
      <div className="rounded-3xl bg-black h-full w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className="w-full flex-shrink-0"
                style={{ width: '100%' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                  {/* Left Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                      The Rich Royals
                      <span className="text-indigo-400"> New Offers</span>
                    </h1>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                      {offer.title}
                    </p>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setSelectedOffer(offer)}
                        className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        Details of the offer
                      </button>
                    </div>
                  </div>


                  {/* Right Image */}
                  <div className="relative">
                    <img
                      src={offer.image_url}
                      alt={offer.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />


                    <div className="absolute top-6 right-6 flex gap-2">
                      <button
                        onClick={() => setEditingOffer(offer)}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Pencil className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => handleDelete(offer.id)}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-white" />
                      </button>

                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>



        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>




        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-indigo-400 w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>





      {selectedOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedOffer.image_url}
                alt={selectedOffer.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedOffer.title}
                </h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {selectedOffer.price.toFixed(2)}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {selectedOffer.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Clock className="w-4 h-4 mr-1" />
                Posted on {new Date(selectedOffer.created_at).toLocaleDateString()}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setEditingOffer(selectedOffer);
                    setSelectedOffer(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                  Edit Course
                </button>
                <button
                  onClick={() => {
                    handleDelete(selectedOffer.id);
                    setSelectedOffer(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      




      {/* Edit Modal */}
      {editingOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Edit Course</h2>
              <button
                onClick={() => setEditingOffer(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editingOffer.title}
                  onChange={e => setEditingOffer({ ...editingOffer, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={editingOffer.description}
                  onChange={e => setEditingOffer({ ...editingOffer, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={editingOffer.price}
                  onChange={e => setEditingOffer({ ...editingOffer, price: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEditingOffer(null)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdate(editingOffer.id, editingOffer)}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
     </div>
    </Section>
  );
}