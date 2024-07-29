import { Link } from 'react-router-dom';
import { PackageSummary } from '../services/types/package-types';

interface PackageItemProps {
  packageSummary: PackageSummary;
}

export default function PackageItem({ packageSummary }: PackageItemProps) {
  return (
    <div className='hover:bg-gray-200'>
      <Link to={`/details/${encodeURIComponent(packageSummary.name)}`}>
        <div className='flex items-center justify-between '>
          <div>{packageSummary.name}</div>
          <div>{packageSummary.version}</div>
        </div>
        <div className='p-2'>
          <div className='text-blue-400'>{packageSummary.description}</div>
          <div className='text-red-400'>{packageSummary.keywords && '[' + packageSummary.keywords + ']'}</div>
        </div>
      </Link>
    </div>
  );
}
