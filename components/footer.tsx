'use client';

import useCompanyStore from '@/store/company';
import { Button } from './ui/button';

const Footer = () => {
  const { companiesSelected, deleteCompanies } = useCompanyStore();
  const selectedCount = companiesSelected.length;

  return (
    <footer className='bg-background border-t z-10 px-6' role='contentinfo'>
      <div className='flex items-center justify-between py-4 gap-4'>
        <p className='text-sm md:text-base text-muted-foreground' aria-live='polite'>
          {selectedCount > 0 && (
            <>
              <span className='sr-only'>Number of </span>
              {selectedCount} {selectedCount === 1 ? 'company' : 'companies'} selected
            </>
          )}
        </p>
        <Button
          disabled={selectedCount === 0}
          className='shadow-lg'
          aria-label={`Delete ${selectedCount} selected ${selectedCount === 1 ? 'company' : 'companies'}`}
          onClick={deleteCompanies}
        >
          Delete
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
