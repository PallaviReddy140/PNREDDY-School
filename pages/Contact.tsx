
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { SCHOOL_PHONE, SCHOOL_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen pb-24">
      <div className="bg-[#800000] py-20 text-white mb-20 relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <SectionHeader title="Get In Touch" light centered />
          <p className="text-xl text-[#FFF8E7] max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us for admissions or queries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#B71C1C] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">School Information</h3>
              
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFC107] text-sm uppercase tracking-wider mb-1">Campus Location</h4>
                    <p className="text-lg">Plot No 123, Techno Avenue, Banjara Hills, Hyderabad, 500034</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFC107] text-sm uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-lg">+91 {SCHOOL_PHONE}</p>
                    <p className="text-lg">040-23456789</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFC107] text-sm uppercase tracking-wider mb-1">Email Queries</h4>
                    <p className="text-lg">{SCHOOL_EMAIL}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFC107] text-sm uppercase tracking-wider mb-1">Office Hours</h4>
                    <p className="text-lg">Mon - Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-ikat border border-[#FFF8E7]">
              <h3 className="text-3xl font-bold text-[#800000] mb-8">Send us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-100 mb-8">
                  <h4 className="font-bold text-xl mb-2 flex items-center">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-3">✓</div>
                    Message Sent Successfully!
                  </h4>
                  <p>Thank you for reaching out. Our admissions team will contact you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#333333] opacity-70 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your Name" 
                        className="w-full bg-[#FAF8F5] border border-[#FFF8E7] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#B71C1C] focus:ring-4 focus:ring-[#B71C1C]/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#333333] opacity-70 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Email" 
                        className="w-full bg-[#FAF8F5] border border-[#FFF8E7] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#B71C1C] focus:ring-4 focus:ring-[#B71C1C]/5 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#333333] opacity-70 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Phone" 
                        className="w-full bg-[#FAF8F5] border border-[#FFF8E7] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#B71C1C] focus:ring-4 focus:ring-[#B71C1C]/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#333333] opacity-70 ml-1">Subject</label>
                      <select 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-[#FFF8E7] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#B71C1C] focus:ring-4 focus:ring-[#B71C1C]/5 transition-all appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="Admission Query">Admission Query</option>
                        <option value="General Information">General Information</option>
                        <option value="Careers">Careers</option>
                        <option value="Visit Request">Visit Request</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#333333] opacity-70 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help you?" 
                      className="w-full bg-[#FAF8F5] border border-[#FFF8E7] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#B71C1C] focus:ring-4 focus:ring-[#B71C1C]/5 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full md:w-fit px-12 py-5 bg-[#B71C1C] text-white rounded-2xl font-bold text-lg hover:bg-[#800000] transition-all shadow-xl flex items-center justify-center group">
                    Send Message
                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20">
          <SectionHeader title="Visit Our Campus" subtitle="Feel free to drop by for a tour of our state-of-the-art facilities." />
          <div className="w-full h-[500px] bg-gray-100 rounded-[40px] overflow-hidden shadow-ikat border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.82722262723!2d78.48443917596856!3d17.41117548348271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f766e44b9%3A0xc6651a541249b5c3!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709112000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
