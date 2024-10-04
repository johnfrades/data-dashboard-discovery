import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { companyData } from '@/mock/company';
import userEvent from '@testing-library/user-event';
import Layout from '@/app/layout';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ companies: companyData }),
  })
) as jest.Mock;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Homepage', () => {
  it('renders company heading', async () => {
    const PageComponent = (await Page()) as React.ReactElement;
    render(PageComponent);

    const companiesEl = await screen.findByText('Companies');

    expect(companiesEl).toBeInTheDocument();
  });

  it('renders company cards', async () => {
    const PageComponent = (await Page()) as React.ReactElement;
    render(PageComponent);

    const companyOne = await screen.findByText('Evergreen Landscaping');
    const companyTwo = await screen.findByText('Sunrise Bakery');
    const companyThree = await screen.findByText('Blue Ocean Seafood');

    expect(companyOne).toBeInTheDocument();
    expect(companyTwo).toBeInTheDocument();
    expect(companyThree).toBeInTheDocument();
  });

  it('displays the delete button as disabled when no companies are selected', async () => {
    const PageComponent = (await Page()) as React.ReactElement;
    render(<Layout>{PageComponent}</Layout>);

    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    expect(deleteButton).toBeDisabled();
  });

  it('should be able to click on a company card and display 3 companies selected for deletion', async () => {
    const PageComponent = (await Page()) as React.ReactElement;
    render(<Layout>{PageComponent}</Layout>);

    await userEvent.click(await screen.findByTestId('company-1'));
    await userEvent.click(await screen.findByTestId('company-2'));
    await userEvent.click(await screen.findByTestId('company-3'));

    const footerText = await screen.findByText(/3 companies selected/);
    expect(footerText).toBeInTheDocument();

    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    expect(deleteButton).not.toBeDisabled();
  });

  it('should be able to click on the delete button and successfully remove the companies', async () => {
    const PageComponent = (await Page()) as React.ReactElement;
    const { debug } = render(<Layout>{PageComponent}</Layout>);

    await userEvent.click(await screen.findByTestId('company-1'));
    await userEvent.click(await screen.findByTestId('company-2'));
    await userEvent.click(await screen.findByTestId('company-3'));

    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    await userEvent.click(deleteButton);

    expect(screen.queryByText('Evergreen Landscaping')).toBeNull();
    expect(screen.queryByText('Sunrise Bakery')).toBeNull();
    expect(screen.queryByText('Blue Ocean Seafood')).toBeNull();
  });
});
