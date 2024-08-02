import { Link } from 'react-router-dom';
import { PackageDetails } from '../services/types/package-types';
interface PackageCardProps {
  pack: PackageDetails;
}

export default function PackageCard({ pack }: PackageCardProps) {
  return (
    <div key={pack.name} className='flex flex-col justify-between gap-3 border rounded shadow p-4'>
      <div className='flex flex-col gap-1 border-bottom border-gray-400'>
        <div className='font-bold text-center'>{pack.name}</div>
        <div className='text-sm text-gray-500'>{pack.description}</div>
        <div className='text-sm text-gray-500'>{pack.maintainers.length} Maintainers</div>
      </div>
      <Link
        to={`/details/${pack.name}`}
        className='border rounded border-gray-900 text-center bg-green-500 text-white border-none hover:bg-green-400'
      >
        View
      </Link>
    </div>
  );
}
