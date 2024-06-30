import { useState } from 'react';
import { FaTrash, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
type ExpandableCardProps = {
  text: string;
  id: string;
};
export default function ExpandableCard({ text, id }: ExpandableCardProps) {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div key={id} className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center'>
        <button className='bg-red-500 text-white border-2 px-3 py-2'>
          <FaTrash />
        </button>
        <div>{text}</div>
        <div className='bg-gray-400 p-2 text-white cursor-pointer'>
          {isExtended ? (
            <FaAngleDoubleUp onClick={() => setIsExtended(false)} />
          ) : (
            <FaAngleDoubleDown onClick={() => setIsExtended(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
