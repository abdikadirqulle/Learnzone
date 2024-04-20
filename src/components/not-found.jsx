import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-2">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn &apos;t exist.
      </h1>
      <p>Something went wrong! </p>

      <button className="bg-primaryBlue text-[#E4E4E4] hover:bg-primaryBlue/90 h-10 px-4 py-2 rounded-md">
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
}
