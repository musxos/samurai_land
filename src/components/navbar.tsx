export function Navbar() {
  return (
    <nav className="backdrop-blur fixed top-0 left-0 z-[99999] w-screen md:block hidden">
      <div className="px-8 py-6">
        <div className="flex justify-between">
          <h1 className="font-jakosta text-4xl text-white">Samurai Conquest</h1>

          <div className="flex items-center">
            
            <a href="https://linktr.ee/samuraiconquest" target="_blank">
            <button className="px-4 py-2 text-white w-max rounded font-poppins ml-4">
              Social
            </button>
            </a>
            <button className="px-4 py-2 bg-white font-semibold w-max rounded font-poppins ml-4 disabled">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
