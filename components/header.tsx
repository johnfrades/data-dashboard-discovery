import DarkModeToggle from '@/components/dark-mode-toggle';
import { Github } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-4 px-8 bg-white dark:bg-gray-800 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)]'>
      <h1 className='text-xl font-bold text-gray-900 dark:text-white'>Data Dashboard Discovery</h1>
      <div className='flex items-center space-x-4'>
        <Link
          href='https://github.com/johnfrades'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='John Frades GitHub profile'
          className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
        >
          <Github className='w-6 h-6' />
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
