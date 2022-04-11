import hero from "./images/hero.svg";
function App() {
  return (
    <div className="App">
      <div className="container h-8 mx-auto p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="bg-gradient-to-r from-red-600 to-black w-10 h-10 rounded-lg"></div>
            <h1 className="text-3xl text-gray-600 ml-2"> E-Shop </h1>
          </div>
          <div className="mt-2">
            <a href="/" className="text-gray-600 hover:text-yellow-700 p-4">
              Home
            </a>
            <a href="/" className="text-gray-600 hover:text-yellow-700 p-4">
              Shop
            </a>
            <a href="/" className="text-gray-600 hover:text-yellow-700 p-4">
              Blog
            </a>
            <a href="/" className="text-gray-600 hover:text-yellow-700 p-4">
              Contact
            </a>
            <a
              href="/"
              className=" bg-purple-300 text-black-600 hover:bg-purple-700 p-3 px-5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart (0)
            </a>
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="w-2/5 flex flex-col justify-center">
            <h2 className="font-serif text-5xl text-gray-800 ">
              Welcome to E-shop
            </h2>
            <p>Best Electronics Collection</p>
            <p>Reasonable Price & Excelent Quality</p>
          </div>
          <div className="w-3/5 ">
            <img src={hero} alt="hero" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
