'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import useCompanyStore from '../../store/company';
import CompanyCard from './company-card';
import ErrorMessage from './error-message';
import SkeletonLoader from './skeleton-loader';

const CompanyList = () => {
  const searchParams = useSearchParams();
  const {
    companies,
    isLoading,
    loadMoreCompanies,
    companiesSelected,
    selectCompany,
    totalCount,
    hasMore,
    hasError,
  } = useCompanyStore();

  useEffect(() => {
    if (companies.length === 0) {
      loadMoreCompanies(searchParams);
    }
  }, []);

  const itemCount = hasMore ? companies.length + 1 : companies.length;

  if (hasError) {
    return <ErrorMessage />;
  }

  if (totalCount === 0) {
    return <SkeletonLoader />;
  }

  const loadMoreItems = () => {
    if (!isLoading) {
      loadMoreCompanies(searchParams);
    }
  };

  const isItemLoaded = (index: number) => !hasMore || index < companies.length;

  const Item = (props: { index: number; style: React.CSSProperties }) => {
    const { index, style } = props;
    if (!isItemLoaded(index)) {
      return (
        <div style={style} className='p-4'>
          <SkeletonLoader />
        </div>
      );
    } else {
      return (
        <div style={style} className='p-4'>
          <CompanyCard
            company={companies[index]}
            companiesSelected={companiesSelected}
            selectCompany={selectCompany}
          />
        </div>
      );
    }
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      threshold={1}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          className='List'
          height={window.innerHeight - 250}
          itemCount={itemCount}
          itemSize={100}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width='100%'
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};

export default CompanyList;
