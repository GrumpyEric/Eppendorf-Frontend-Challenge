export default function Header() {
  return (
    <header className="">
      <div className="w-full z-10 grid grid-cols-3 px-20 sticky top-0 py-4 bg-black">
        <div className='flex gap-5 items-center justify-start'>
          <a 
            className="text-white transition ease-in-out duration-200 hover:text-gray-400 text-xl"
            href='/'>Home
          </a>
          <a 
            className="text-white transition ease-in-out duration-200 hover:text-gray-400 text-xl"
            href='/table'>Table
          </a>
          <a 
            className="text-white transition ease-in-out duration-200 hover:text-gray-400 text-xl"
            href='/form'>Form
          </a>
        </div>

        <div className='text-center'>
          <a 
            className="text-white transition ease-in-out duration-200 hover:text-gray-400 font-bold text-4xl"
            href='/'>Eppendorf Coding Challenge
          </a>
        </div>
      </div>
    </header>
  )
}