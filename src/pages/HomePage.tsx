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
    <div className='m-2 py-12 space-y-6'>
      <div className='space-y-6  text-center'>
        <p className='text-6xl font-bold'>The NPM Registry</p>
        <p className=' mx-auto max-w-[600px] text-gray-500 text-l'>
          The package manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className='mx-auto grid grid-cols-4 max-w-[900px] gap-4 items-stretch'>
        {topPackages.map((pack) => (
          <PackageCard pack={pack} />
        ))}
      </div>
    </div>
  );
}
