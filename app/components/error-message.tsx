const ErrorMessage = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>Error loading companies</h1>
        <p className='text-gray-600'>Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
