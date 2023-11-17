const Navbar = () => {
  return (
    <div className="flex mono justify-between items-center h-20 p-5">
      <h1 className="text-5xl font-bold">Skill Match</h1>
      <button className="w-[150px] h-[50px] bg-transparent hover:bg-black hover:text-white transition-all ease-in-out duration-300 border-2 border-black rounded-full">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
