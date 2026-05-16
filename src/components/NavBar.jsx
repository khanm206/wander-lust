import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <section>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle
              lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/destination"}>Destinations</Link>
              </li>
              <li>
                <Link href={"/my_bookings"}>My Bookings</Link>
              </li>
              <li>
                <Link href={"/add-destination"}>Add Destination</Link>
              </li>
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-base">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/destination"}>Destinations</Link>
              </li>
              <li>
                <Link href={"/my_bookings"}>My Bookings</Link>
              </li>
              <li>
                <Link href={"/add-destination"}>Add Destination</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"} className="w-fit btn btn-ghost">
            <Image
              src={"/assets/Wanderlast.png"}
              alt="logo"
              height={200}
              width={200}
            />
          </Link>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-base">
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
