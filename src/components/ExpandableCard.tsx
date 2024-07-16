import { useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
type ExpandableCardProps = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  isExpandedDefault?: boolean;
};
export default function ExpandableCard({ header, isExpandedDefault = false, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 items-center justify-between'>
        <div className='flex flex-row items-center justify-between'>{header}</div>
        <div onClick={() => setIsExpanded(!isExpanded)} className='cursor-pointer'>
          {isExpanded ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </div>
      </div>
      {isExpanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  );
}
