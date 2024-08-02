import Search from './Search';
import { Link } from 'react-router-dom';
interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className='flex items-center justify-between p-2 m-2 bg-amber-400 border-2 '>
      <Link to='/'>
        <h3 className='text-2xl text-white'>{title}</h3>
      </Link>
      <Search />
    </div>
  );
}
