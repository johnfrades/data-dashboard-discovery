import DarkModeToggle from '@/components/dark-mode-toggle';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-4 px-8 bg-white dark:bg-gray-800 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)]'>
      <h1 className='text-xl font-bold text-gray-900 dark:text-white'>Data Dashboard Discovery</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
