import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between m-6">
      <span className="flex" onClick={() => setOpen(!open)}>
        { 
        open ? 
         <X className="lg:hidden"></X> : 
         <Menu className="lg:hidden"></Menu> 
        }
        <ul className={`lg:hidden absolute duration-800 
          ${open ? 'top-13 ' : '-top-40'}
          bg-amber-200 
          text-black`}>
          {links}
        </ul>
        <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="lg:flex hidden items-center">
        {
          links
        }
      </ul>

      {/* <ul className="flex">
        {
            navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
        }
      </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

      <button className="btn btn-soft">Sign In</button>
    </nav>
  );
};

export default NavBar;
