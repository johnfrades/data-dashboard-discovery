'use client';

import { useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import useCompanyStore from '../../store/company';
import SkeletonLoader from './skeleton-loader';
import CompanyCard from './company-card';

const CompanyList = () => {
  const {
    companies,
    isLoading,
    loadMoreCompanies,
    companiesSelected,
    selectCompany,
    totalCount,
    hasMore,
  } = useCompanyStore();

  useEffect(() => {
    if (companies.length === 0) {
      loadMoreCompanies();
    }
  }, []);

  const itemCount = hasMore ? companies.length + 1 : companies.length;
  const loadMoreItems = isLoading ? () => {} : loadMoreCompanies;
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

  if (totalCount === 0) {
    return <SkeletonLoader />;
  }

  return (
    <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
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
