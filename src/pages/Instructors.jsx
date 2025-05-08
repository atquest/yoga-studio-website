import { useContent } from '../context/ContentContext';
import Editor from '../components/Editor';

const Instructors = () => {
  const { content, updateContent } = useContent();
  const instructorsContent = content.instructors;

  const handleTitleChange = (value) => {
    updateContent('instructors', 'intro', 'title', value);
  };

  const handleContentChange = (value) => {
    updateContent('instructors', 'intro', 'content', value);
  };

  // Sample instructors data - in a real app, this would come from a database or CMS
  const instructorsList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Studio Owner & Lead Instructor',
      image: '/images/instructor-1.jpg',
      bio: 'Sarah has been practicing yoga for over 15 years and teaching for 10. She specializes in Vinyasa and Power Yoga, helping students build strength and flexibility while maintaining proper alignment.',
      certifications: ['RYT-500', 'Pre/Post Natal Yoga Certified'],
      specialties: ['Vinyasa Flow', 'Power Yoga', 'Yoga for Athletes']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Instructor',
      image: '/images/instructor-2.jpg',
      bio: 'Michael discovered yoga during his recovery from a sports injury and fell in love with the practice. He focuses on alignment and mindful movement, helping students develop a deeper connection to their bodies.',
      certifications: ['RYT-200', 'Yoga Therapy Certification'],
      specialties: ['Alignment-Based Yoga', 'Yoga for Beginners', 'Restorative Yoga']
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Instructor',
      image: '/images/instructor-3.jpg',
      bio: 'Emma combines traditional yoga techniques with modern movement science to create classes that are both challenging and accessible. She believes in the transformative power of consistent practice.',
      certifications: ['RYT-200', 'Aerial Yoga Certified'],
      specialties: ['Vinyasa Flow', 'Core Strength', 'Morning Flow']
    },
    {
      id: 4,
      name: 'Robert Miller',
      role: 'Instructor',
      image: '/images/instructor-4.jpg',
      bio: 'With a background in meditation and mindfulness, Robert brings a calming presence to his classes. He specializes in slower-paced styles that encourage deep relaxation and inner awareness.',
      certifications: ['RYT-500', 'Meditation Teacher Training'],
      specialties: ['Hatha Yoga', 'Yin Yoga', 'Meditation & Mindfulness']
    },
    {
      id: 5,
      name: 'Jessica Lee',
      role: 'Instructor',
      image: '/images/instructor-5.jpg',
      bio: 'Jessica focuses on creating a nurturing environment where students can explore their practice without judgment. Her classes emphasize breath connection and are suitable for all levels.',
      certifications: ['RYT-200', 'Yin Yoga Certified'],
      specialties: ['Gentle Flow', 'Restorative Yoga', 'Yoga for Stress Relief']
    }
  ];

  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            <Editor 
              value={instructorsContent.intro.title} 
              onChange={handleTitleChange} 
              placeholder="Enter instructors title..."
            />
          </h1>
          <div className="max-w-3xl mx-auto">
            <Editor 
              value={instructorsContent.intro.content} 
              onChange={handleContentChange} 
              placeholder="Enter instructors description..."
            />
          </div>
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {instructorsList.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-72 overflow-hidden">
                <img 
                  className="w-full h-full object-cover object-center" 
                  src={instructor.image} 
                  alt={instructor.name} 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{instructor.role}</p>
                <p className="text-gray-600 mb-4">{instructor.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {instructor.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join the team section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Join Our Teaching Team
              </h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  We're always looking for passionate yoga instructors to join our studio. If you're certified and interested in teaching at our studio, we'd love to hear from you.
                </p>
                <p>
                  We value diversity in teaching styles and backgrounds, and offer competitive compensation, a supportive community, and opportunities for professional growth.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#apply"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition duration-300"
                >
                  Apply to Teach
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/images/join-team.jpg" 
                  alt="Yoga class in session" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;

