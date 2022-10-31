export default function MyForm() {
  return (
    <form
      action='/api/login'
      method='post'
      className='flex flex-col max-w-md gap-y-4'
    >
      <input className='border' type='text' name='username' />
      <input type='password' className='border' name='password' />
      <button
        className='bg-gray-900 bg-opacity-95 font-medium hover:bg-opacity-100 text-gray-200 py-3 rounded-lg'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}
