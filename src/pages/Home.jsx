import { useContent } from '../context/ContentContext';
import Editor from '../components/Editor';

const Home = () => {
  const { content, updateContent } = useContent();
  const homeContent = content.home;

  const handleHeroTitleChange = (value) => {
    updateContent('home', 'hero', 'title', value);
  };

  const handleHeroSubtitleChange = (value) => {
    updateContent('home', 'hero', 'subtitle', value);
  };

  const handleHeroContentChange = (value) => {
    updateContent('home', 'hero', 'content', value);
  };

  const handleAboutTitleChange = (value) => {
    updateContent('home', 'about', 'title', value);
  };

  const handleAboutContentChange = (value) => {
    updateContent('home', 'about', 'content', value);
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt="Yoga pose"
            className="object-cover w-full h-full opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            <Editor 
              value={homeContent.hero.title} 
              onChange={handleHeroTitleChange} 
              placeholder="Enter hero title..."
            />
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-6">
            <Editor 
              value={homeContent.hero.subtitle} 
              onChange={handleHeroSubtitleChange} 
              placeholder="Enter hero subtitle..."
            />
          </p>
          <div className="max-w-2xl mx-auto">
            <Editor 
              value={homeContent.hero.content} 
              onChange={handleHeroContentChange} 
              placeholder="Enter hero content..."
            />
          </div>
          <div className="mt-10">
            <a
              href="#schedule"
              className="inline-block bg-white text-indigo-800 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-indigo-50 transition duration-300"
            >
              View Our Classes
            </a>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              <Editor 
                value={homeContent.about.title} 
                onChange={handleAboutTitleChange} 
                placeholder="Enter about title..."
              />
            </h2>
            <div className="prose prose-indigo lg:prose-lg">
              <Editor 
                value={homeContent.about.content} 
                onChange={handleAboutContentChange} 
                placeholder="Enter about content..."
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1599447292180-45fd84092ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Yoga class" 
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Why Choose Our Studio
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-3">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-8h2v6h-2v-6zm0-4h2v2h-2V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Our certified yoga instructors bring years of experience and a passion for teaching to every class.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-3">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Variety of Classes</h3>
              <p className="text-gray-600">From vinyasa to yin, we offer a wide range of classes suitable for beginners to advanced practitioners.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-3">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600">Our studio is equipped with the latest amenities and designed to create a peaceful, rejuvenating environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

