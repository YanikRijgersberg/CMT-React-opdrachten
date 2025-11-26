import { useState } from "react";

export default function WorkcationCard() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">

        <button
          onClick={() => setDark(!dark)}
          className="mb-4 px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 text-sm"
        >
          Toggle Theme
        </button>

        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-xl p-6 max-w-sm text-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80"
            alt="Beach"
            className="rounded-lg mb-4"
          />

          <h1 className="text-2xl font-bold leading-tight">
            You can work from <br />
            anywhere.{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Take <br /> advantage of it.
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you’re not on
            vacation.
          </p>

          <button className="bg-blue-600 dark:bg-blue-700 text-white mt-5 px-4 py-2 rounded-md text-sm font-medium">
            BOOK YOUR ESCAPE
          </button>
        </div>
      </div>
    </div>
  );
}
