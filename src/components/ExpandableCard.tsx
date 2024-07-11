import { useState } from 'react';
import { FaTrash, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
type ExpandableCardProps = {
  item?: any;
  children?: React.ReactNode;
  isExtendedDefault?: boolean;
};
export default function ExpandableCard({ item, isExtendedDefault = false, children }: ExpandableCardProps) {
  const [isExtended, setIsExtended] = useState(isExtendedDefault);

  return (
    <div className='mb-2 border rounded '>
      <div className='flex p-2 justify-between items-center'>
        <button className='bg-red-500 text-white border-2 px-3 py-2'>
          <FaTrash />
        </button>
        <div>{item?.name}</div>
        <div className='bg-gray-400 p-2 text-white cursor-pointer' onClick={() => setIsExtended(!isExtended)}>
          {isExtended ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </div>
      </div>
      {isExtended && <div className='container p-2 border flex justify-center items-center'>{children}</div>}
    </div>
  );
}
