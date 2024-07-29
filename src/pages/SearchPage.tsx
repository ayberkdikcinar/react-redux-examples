import { useLoaderData } from 'react-router-dom';
import { PackageObject } from '../services/types/package-types';
import PackageList from '../components/PackageList';

export default function SearchPage() {
  const result = useLoaderData() as PackageObject[];
  console.log('res:', result);

  if (!result) {
    return 'loading...';
  }
  return (
    <div>
      <PackageList packages={result.map((obj) => obj.package)} />
    </div>
  );
}
