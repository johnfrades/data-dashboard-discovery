import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import SkeletonLoader from './components/skeleton-loader';

const CompanyList = dynamic(() => import('./components/company-list'), { ssr: false });

const Home = async () => {
  return (
    <div className='p-4 relative h-[calc(100vh-144px)]'>
      <h1 className='text-3xl sm:text-4xl font-bold px-4 pt-3 pb-6'>Companies</h1>
      <Suspense fallback={<SkeletonLoader />}>
        <CompanyList />
      </Suspense>
    </div>
  );
};

export default Home;
