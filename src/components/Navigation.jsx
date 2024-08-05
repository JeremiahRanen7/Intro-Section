
const Navigation = () => {
  return (
    <nav className="max-w-full my-0 mx-auto py-6 px-10 font-epilogue">
      <div className="container flex justify-between items-center">
      <div className="left flex justify-center items-center gap-12">
        <div className="logo">
            <img src="/src/images/logo.svg" alt="" />
        </div>
        <ul className="flex justify-center items-center gap-6 text-midGray cursor-pointer">
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
        </ul>
      </div>
      <div className="right flex justify-center items-center gap-6">
        <button className="text-midGray px-4 py-2">Login</button>
        <button className="text-midGray border-2 border-midGray px-4 py-2 rounded-xl hover:bg-black hover:text-white hover:border-black">Register</button>
      </div>
      </div>
    </nav>
  )
}

export default Navigation
