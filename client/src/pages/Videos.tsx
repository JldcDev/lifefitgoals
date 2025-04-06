import ReactPlayer from 'react-player';

const videos = [
  {
    title: 'Full Body HIIT Workout',
    url: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
  },
  {
    title: 'Core Workout for Stability',
    url: 'https://www.youtube.com/watch?v=1919eTCoESo',
  },
  {
    title: 'Mobility & Stretch',
    url: 'https://www.youtube.com/watch?v=qULTwquOuT4',
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-gray-900">Tus videos de entrenamiento</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{video.title}</h2>
              <ReactPlayer url={video.url} controls width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
