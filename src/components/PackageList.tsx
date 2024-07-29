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
        <Fragment>
          <PackageItem key={i} packageSummary={pkg} />
          <div className='border-b-2'></div>
        </Fragment>
      ))}
    </div>
  );
}
