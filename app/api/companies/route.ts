import { NextRequest, NextResponse } from 'next/server';
import { LIMIT } from '@/constants/limit';
import { companyData } from '@/mock/company';

import { CompanyResponse } from '@/types/company';

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 1.5)); // Simulated slow API call
  const searchParams = request.nextUrl.searchParams;

  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || LIMIT.toString(), 10);
  const simulateError = searchParams.get('error') === 'true';
  const offset = (page - 1) * limit;
  const totalCount = companyData.length;
  const companyList = companyData.slice(offset, offset + limit);

  if (simulateError) {
    throw new Error('Error loading companies');
  }

  return NextResponse.json<CompanyResponse>({
    companies: companyList,
    totalCount,
    page,
    limit,
    hasMore: page * limit < totalCount,
  });
}
