import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  const { name } = useParams();
  if (!name) {
    return <div></div>;
  }
  const decodedName = decodeURIComponent(name);
  return <div>DETAILS PAGE of {decodedName}</div>;
}
