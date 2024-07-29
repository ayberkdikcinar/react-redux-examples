import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  const params = useParams();
  console.log('details:', params);
  return <div>DETAILS PAGE</div>;
}
