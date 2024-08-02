import { useEffect, useState } from 'react';
import { getTopPackages } from '../services/registry-service';
import { PackageDetails } from '../services/types/package-types';
import PackageCard from '../components/PackageCard';

export default function HomePage() {
  const [topPackages, setTopPackages] = useState<PackageDetails[]>([]);

  useEffect(() => {
    async function getTopPacks() {
      const topPacks = await getTopPackages();
      setTopPackages(topPacks);
    }

    getTopPacks();
  }, []);

  return (
    <div className='m-2 grid grid-cols-2 gap-2'>
      {topPackages.map((pack) => (
        <div className='max-w-24'>
          <PackageCard pack={pack} />
        </div>
      ))}
    </div>
  );
}
