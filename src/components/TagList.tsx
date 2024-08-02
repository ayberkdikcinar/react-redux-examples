interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className='flex flex-row flex-wrap mt-2'>
      {tags.map((tag) => (
        <div key={tag} className='p-1 m-1 text-gray-700 text-sm font-bold border-2 bg-gray-200 border-gray-300'>
          {tag}
        </div>
      ))}
    </div>
  );
}
