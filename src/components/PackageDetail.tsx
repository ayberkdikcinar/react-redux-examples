import { PackageDetails } from '../services/types/package-types';

interface PackageDetailsProps {
  pack: PackageDetails;
}
export default function PackDetails({ pack }: PackageDetailsProps) {
  console.log(pack);
  return <div>{pack.name}</div>;
}
