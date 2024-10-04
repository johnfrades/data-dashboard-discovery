import { Company, CompanyResponse } from '@/types/company';
import { create } from 'zustand';
import { API_URL } from '@/constants/apiUrl';
import { toast } from 'sonner';

type CompanyStore = {
  companies: Company[];
  companiesSelected: Company[];
  isLoading: boolean;
  currentPage: number;
  totalCount: number;
  hasMore: boolean;
  selectCompany: (company: Company) => void;
  loadMoreCompanies: () => Promise<void>;
  deleteCompanies: () => void;
};

const useCompanyStore = create<CompanyStore>((set, get) => ({
  companies: [],
  companiesSelected: [],
  isLoading: false,
  currentPage: 0,
  totalCount: 0,
  hasMore: true,
  deleteCompanies: () =>
    set((state) => {
      const companies = state.companies.filter(
        (company) =>
          !state.companiesSelected.some((selectedCompany) => selectedCompany.id === company.id)
      );

      toast.success('Successfully deleted', {
        description: `${state.companiesSelected.length} companies has been deleted`,
      });

      return {
        companies,
        companiesSelected: [],
      };
    }),
  selectCompany: (company: Company) =>
    set((state) => {
      const companyExists = state.companiesSelected.find(
        (stateCompany) => stateCompany.id === company.id
      );

      if (companyExists) {
        return {
          companiesSelected: state.companiesSelected.filter(
            (stateCompany) => stateCompany.id !== company.id
          ),
        };
      }

      return {
        companiesSelected: [...state.companiesSelected, company],
      };
    }),

  loadMoreCompanies: async () => {
    const { isLoading, currentPage } = get();

    if (isLoading) return;

    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/api/companies?page=${currentPage + 1}`);
      const newCompaniesResponse = (await response.json()) as CompanyResponse;

      set((state) => ({
        companies: [...state.companies, ...newCompaniesResponse.companies],
        currentPage: state.currentPage + 1,
        totalCount: newCompaniesResponse.totalCount,
        hasMore: newCompaniesResponse.hasMore,
      }));
    } catch (error) {
      console.error('Error loading more companies:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCompanyStore;
