import { Link } from "react-router-dom";
import Barbershop from "../assets/img/bbswall.jpg";
import { Scissors, Comment, Clipboard } from "./icons";

export default function HeroSection() {
  return (
    <div className="m-8 md:w-8/12 ">
      <img
        className="w-full h-3/4 rounded-xl"
        src={Barbershop}
        alt="barbershop img"
      />
      <div className="mt-10 mb-10">
        <span className="text-5xl font-normal dark:text-white mt-16 ">
          BarberShop
        </span>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-2 text-md">
          Calle Tony Start, #2
        </p>
      </div>
      <div className="bg-slate-200 dark:bg-slate-900 rounded-xl p-1 grid grid-cols-1 gap-4 sm:grid-cols-3 [&>a>span]:flex [&>a&>span]:items-center justify-between dark:text-white text-lg ">
        <Link
          className="relative inline-flex items-center justify-center p-0.5 my-2 mx-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          to="/"
        >
          <span className="relative w-full px-5 py-2.5 justify-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Scissors />
            Servicios
          </span>
        </Link>

        <Link
          className="relative inline-flex items-center justify-center p-0.5 my-2 mx-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          to="/details"
        >
          <span className="relative w-full justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Comment />
            Detalles
          </span>
        </Link>

        <Link
          className="relative inline-flex items-center justify-center p-0.5 my-2 mx-2 overflow-hidden text-sm font-medium  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          to="/portfolio"
        >
          <span className="relative w-full px-5 py-2.5 justify-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Clipboard />
            Portfolio
          </span>
        </Link>
      </div>
    </div>
  );
}
