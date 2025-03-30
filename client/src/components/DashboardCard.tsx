import { Link } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  description: string;
  link: string;
}

export default function DashboardCard({ title, description, link }: DashboardCardProps) {
  return (
    <Link
      to={link}
      className="block bg-white p-5 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-200 hover:border-gray-300"
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </Link>
  );
}
