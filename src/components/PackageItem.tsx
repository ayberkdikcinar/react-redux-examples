import { Link } from 'react-router-dom';
import { PackageSummary } from '../services/types/package-types';
import TagList from './TagList';

interface PackageItemProps {
  packageSummary: PackageSummary;
}

export default function PackageItem({ packageSummary }: PackageItemProps) {
  return (
    <div className='hover:bg-gray-200'>
      <Link to={`/details/${encodeURIComponent(packageSummary.name)}`}>
        <div className='flex items-center justify-between '>
          <p>{packageSummary.name}</p>
          <p className='text-gray-500'>{packageSummary.version}</p>
        </div>
        <div className='p-2'>
          <p className='text-blue-400 text-sm'>{packageSummary.description}</p>
          {packageSummary.keywords && <TagList tags={packageSummary.keywords} />}
        </div>
      </Link>
    </div>
  );
}
