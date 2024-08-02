import { useLoaderData } from 'react-router-dom';
import PackageList from '../components/PackageList';
import { SearchLoaderResult } from '../utils/searchLoader';

export default function SearchPage() {
  const result = useLoaderData() as SearchLoaderResult;

  if (!result) {
    return 'loading...';
  }
  return (
    <div className='px-4'>
      <PackageList packages={result.searchResults.map((obj) => obj.package)} />
    </div>
  );
}
