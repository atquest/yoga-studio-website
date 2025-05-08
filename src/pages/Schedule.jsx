import { useContent } from '../context/ContentContext';
import Editor from '../components/Editor';

const Schedule = () => {
  const { content, updateContent } = useContent();
  const scheduleContent = content.schedule;

  const handleTitleChange = (value) => {
    updateContent('schedule', 'intro', 'title', value);
  };

  const handleContentChange = (value) => {
    updateContent('schedule', 'intro', 'content', value);
  };

  // Sample schedule data - in a real app this would come from a database
  const scheduleData = [
    { id: 1, day: 'Monday', time: '7:00 AM - 8:30 AM', className: 'Morning Flow', instructor: 'Sarah Johnson', level: 'All Levels' },
    { id: 2, day: 'Monday', time: '12:00 PM - 1:00 PM', className: 'Lunchtime Express', instructor: 'Michael Chen', level: 'Beginner' },
    { id: 3, day: 'Monday', time: '6:00 PM - 7:30 PM', className: 'Vinyasa Flow', instructor: 'Emma Davis', level: 'Intermediate' },
    { id: 4, day: 'Tuesday', time: '9:00 AM - 10:30 AM', className: 'Gentle Yoga', instructor: 'Robert Miller', level: 'Beginner' },
    { id: 5, day: 'Tuesday', time: '5:30 PM - 7:00 PM', className: 'Power Yoga', instructor: 'Sarah Johnson', level: 'Advanced' },
    { id: 6, day: 'Wednesday', time: '7:00 AM - 8:30 AM', className: 'Morning Flow', instructor: 'Emma Davis', level: 'All Levels' },
    { id: 7, day: 'Wednesday', time: '12:00 PM - 1:00 PM', className: 'Lunchtime Express', instructor: 'Michael Chen', level: 'Beginner' },
    { id: 8, day: 'Wednesday', time: '7:00 PM - 8:30 PM', className: 'Yin Yoga', instructor: 'Jessica Lee', level: 'All Levels' },
    { id: 9, day: 'Thursday', time: '9:00 AM - 10:30 AM', className: 'Hatha Yoga', instructor: 'Robert Miller', level: 'Intermediate' },
    { id: 10, day: 'Thursday', time: '6:00 PM - 7:30 PM', className: 'Ashtanga', instructor: 'Sarah Johnson', level: 'Advanced' },
    { id: 11, day: 'Friday', time: '7:00 AM - 8:30 AM', className: 'Morning Flow', instructor: 'Emma Davis', level: 'All Levels' },
    { id: 12, day: 'Friday', time: '5:30 PM - 6:30 PM', className: 'Restorative Yoga', instructor: 'Jessica Lee', level: 'All Levels' },
    { id: 13, day: 'Saturday', time: '9:00 AM - 10:30 AM', className: 'Weekend Vinyasa', instructor: 'Sarah Johnson', level: 'All Levels' },
    { id: 14, day: 'Saturday', time: '11:00 AM - 12:30 PM', className: 'Power Yoga', instructor: 'Michael Chen', level: 'Intermediate' },
    { id: 15, day: 'Sunday', time: '10:00 AM - 11:30 AM', className: 'Gentle Flow', instructor: 'Jessica Lee', level: 'Beginner' },
    { id: 16, day: 'Sunday', time: '4:00 PM - 5:30 PM', className: 'Meditation & Yoga', instructor: 'Robert Miller', level: 'All Levels' },
  ];

  // Group classes by day for better organization
  const classesByDay = scheduleData.reduce((acc, cls) => {
    if (!acc[cls.day]) {
      acc[cls.day] = [];
    }
    acc[cls.day].push(cls);
    return acc;
  }, {});

  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            <Editor 
              value={scheduleContent.intro.title} 
              onChange={handleTitleChange} 
              placeholder="Enter schedule title..."
            />
          </h1>
          <div className="max-w-3xl mx-auto">
            <Editor 
              value={scheduleContent.intro.content} 
              onChange={handleContentChange} 
              placeholder="Enter schedule description..."
            />
          </div>
        </div>
      </div>

      {/* Schedule section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weekly Class Schedule</h2>
          <p className="text-gray-600">Click on a class to register or learn more details. Classes are subject to change.</p>
        </div>

        {/* Desktop schedule */}
        <div className="hidden md:block mb-12">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scheduleData.map((cls) => (
                  <tr key={cls.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cls.day}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">{cls.className}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile schedule */}
        <div className="md:hidden space-y-8">
          {Object.entries(classesByDay).map(([day, classes]) => (
            <div key={day} className="bg-white shadow overflow-hidden rounded-lg">
              <div className="bg-indigo-800 text-white px-4 py-3">
                <h3 className="text-lg font-medium">{day}</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {classes.map((cls) => (
                  <li key={cls.id} className="px-4 py-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex justify-between">
                      <span className="font-medium text-indigo-600">{cls.className}</span>
                      <span className="text-gray-500">{cls.time}</span>
                    </div>
                    <div className="mt-1 flex justify-between text-sm">
                      <span>{cls.instructor}</span>
                      <span className="text-gray-500">{cls.level}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Class pass information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Class Passes & Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">Drop-In</h4>
              <p className="text-3xl font-bold mb-4">$20</p>
              <p className="text-gray-600 mb-4">Perfect for occasional visits or trying out different classes.</p>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">Purchase</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-500">
              <div className="absolute -mt-8 px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">Most Popular</div>
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">10-Class Pass</h4>
              <p className="text-3xl font-bold mb-4">$160</p>
              <p className="text-gray-600 mb-4">Save $40 compared to drop-in pricing. Valid for 3 months.</p>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">Purchase</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">Monthly Unlimited</h4>
              <p className="text-3xl font-bold mb-4">$150</p>
              <p className="text-gray-600 mb-4">Attend as many classes as you like in a month.</p>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

