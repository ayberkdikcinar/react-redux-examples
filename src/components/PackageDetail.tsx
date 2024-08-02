import { PackageDetails } from '../services/types/package-types';
import { FaUserTie } from 'react-icons/fa6';

interface PackageDetailsProps {
  pack: PackageDetails;
}
export default function PackDetails({ pack }: PackageDetailsProps) {
  console.log(pack);

  return (
    <div>
      <div className='font-bold'>
        <p className='text-2xl mb-2'>{pack.name}</p>
        <p className='text-m'>{pack.description}</p>
      </div>
      <div className='mt-2 border rounded border-gray-500 flex items-center justify-between p-1'>
        <p className='font-bold text-xl text-red-400'>Author</p>
        <div className='font-bold text-sm'>
          <p>{pack.author?.name}</p>
          <p>{pack.author?.email}</p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='border-b-2 border-red-500 font-bold text-l'>Maintainers</p>
        <div className='flex'>
          {pack.maintainers.map((mainteiner) => (
            <div className='m-1 flex items-center'>
              <FaUserTie />
              <p className='p-1 text-sm'>{mainteiner.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-2'>
        <p className='border-b-2 border-red-500 font-bold text-l'>Readme</p>
        <p className='mt-2 p-2 text-sm'>{pack.readme}</p>
      </div>
    </div>
  );
}
