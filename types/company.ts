export type Company = {
  id: number;
  name: string;
};

export type CompanyResponse = {
  companies: Company[];
  totalCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
