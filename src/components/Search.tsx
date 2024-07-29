import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='border'>
        <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} />
      </div>
    </form>
  );
}
