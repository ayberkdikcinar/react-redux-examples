import { useLoaderData } from 'react-router-dom';
import PackDetails from '../components/PackageDetail';
import { DetailsLoaderResult } from '../utils/detailsLoader';

export default function DetailsPage() {
  const result = useLoaderData() as DetailsLoaderResult;

  return (
    <div className='px-4 m-2'>
      <PackDetails pack={result.detailsResult} />
    </div>
  );
}
