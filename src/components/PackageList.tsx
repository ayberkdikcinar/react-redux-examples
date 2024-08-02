import { Fragment } from 'react/jsx-runtime';
import { PackageSummary } from '../services/types/package-types';
import PackageItem from './PackageItem';

interface PackageListProps {
  packages: PackageSummary[];
}

export default function PackageList({ packages }: PackageListProps) {
  return (
    <div className='m-2'>
      {packages.map((pkg, i) => (
        <Fragment key={i}>
          <PackageItem packageSummary={pkg} />
          <div className='border-b-2'></div>
        </Fragment>
      ))}
    </div>
  );
}
