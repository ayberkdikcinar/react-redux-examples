type SkeletonProps = {
  times: number;
  type?: string;
};
export default function Skeleton({ times, type }: SkeletonProps) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => <div key={i}>Loading...{i}</div>);
  return <div>{boxes}</div>;
}
