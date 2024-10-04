import { Card, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader = () => {
  return (
    <div className='flex flex-col gap-4'>
      {[...Array(5)].map((_, index) => (
        <Card key={index} className='w-full h-[76px]'>
          <CardHeader className='flex flex-row justify-between align-center'>
            <Skeleton className='h-6 w-2/4' />
            <Skeleton className='h-4 w-4' />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonLoader;
