import { Company } from '@/types/company';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

type CompanyCardProps = {
  company: Company;
  companiesSelected: Company[];
  selectCompany: (company: Company) => void;
};

const CompanyCard: React.FC<CompanyCardProps> = ({ company, companiesSelected, selectCompany }) => {
  const companyExists = companiesSelected.find(
    (checkedCompany) => checkedCompany.id === company.id
  );

  return (
    <Card
      className={cn(
        'cursor-pointer flex flex-col transition-all duration-300 ease-in-out hover:bg-secondary/20',
        companyExists
          ? 'shadow-[0_0_0_2px_hsl(var(--primary))] hover:shadow-[0_0_0_2px_hsl(var(--primary)),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]'
          : 'shadow-sm hover:shadow-lg'
      )}
      onClick={() => selectCompany(company)}
      data-testid={`company-${company.id}`}
    >
      <CardHeader className='flex-grow'>
        <CardTitle className='text-lg flex justify-between items-center'>
          <span className='truncate pr-10'>{company.name}</span>
          <Checkbox checked={!!companyExists} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CompanyCard;
