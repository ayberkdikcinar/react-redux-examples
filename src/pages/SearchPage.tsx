import { useLoaderData } from 'react-router-dom';
import { SearchPackageResponse } from '../services/registry-service';

export default function SearchPage() {
  const result = useLoaderData() as SearchPackageResponse;
  console.log('res:', result);

  if (!result.data) {
    return 'loading...';
  }
  return (
    <div>
      {result.data.objects.map((obj, i) => (
        <div key={i}>{JSON.stringify(obj.package)}</div>
      ))}
    </div>
  );
}
