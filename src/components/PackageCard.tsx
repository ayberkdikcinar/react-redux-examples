import { PackageDetails } from '../services/types/package-types';
interface PackageCardProps {
  pack: PackageDetails;
}

export default function PackageCard({ pack }: PackageCardProps) {
  return <div className='border-2 border-black rounded w-50 m-4'>{pack.name}</div>;
}
