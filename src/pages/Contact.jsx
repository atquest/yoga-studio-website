import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import Editor from '../components/Editor';

const Contact = () => {
  const { content, updateContent } = useContent();
  const contactContent = content.contact;

  const handleIntroTitleChange = (value) => {
    updateContent('contact', 'intro', 'title', value);
  };

  const handleIntroContentChange = (value) => {
    updateContent('contact', 'intro', 'content', value);
  };

  const handleLocationTitleChange = (value) => {
    updateContent('contact', 'location', 'title', value);
  };

  const handleLocationContentChange = (value) => {
    updateContent('contact', 'location', 'content', value);
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the form data to a server
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            <Editor 
              value={contactContent.intro.title} 
              onChange={handleIntroTitleChange} 
              placeholder="Enter contact title..."
            />
          </h1>
          <div className="max-w-3xl mx-auto">
            <Editor 
              value={contactContent.intro.content} 
              onChange={handleIntroContentChange} 
              placeholder="Enter contact description..."
            />
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
                <h3 className="text-lg font-medium text-green-800 mb-2">Thank you for your message!</h3>
                <p className="text-green-700">We've received your inquiry and will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option>General Inquiry</option>
                    <option>Class Information</option>
                    <option>Private Sessions</option>
                    <option>Membership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location and contact info */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <Editor 
                value={contactContent.location.title} 
                onChange={handleLocationTitleChange} 
                placeholder="Enter location title..."
              />
            </h2>
            
            <div className="prose prose-indigo lg:prose-lg mb-6">
              <Editor 
                value={contactContent.location.content} 
                onChange={handleLocationContentChange}
                placeholder="Enter address and contact details..."
              />
            </div>
            
            {/* Map */}
            <div className="bg-gray-300 rounded-lg overflow-hidden h-64 mb-8">
              {/* In a real app, this would be replaced with an actual map integration */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-gray-600">Map goes here (Google Maps or similar)</span>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Studio Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Do I need to bring my own mat?</h3>
              <p className="mt-2 text-gray-600">We provide mats and props for all classes, but you're welcome to bring your own equipment if you prefer.</p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Is there parking available?</h3>
              <p className="mt-2 text-gray-600">Yes, we have a dedicated parking lot with free parking for all students.</p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Do I need to register for classes in advance?</h3>
              <p className="mt-2 text-gray-600">We recommend booking classes online in advance to secure your spot, especially for popular classes, but drop-ins are welcome if space permits.</p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Can I cancel or reschedule a class?</h3>
              <p className="mt-2 text-gray-600">Yes, you can cancel or reschedule up to 2 hours before class start time without penalty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

