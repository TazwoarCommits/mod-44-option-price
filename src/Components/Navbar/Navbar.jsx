import { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Line , RiCloseLine } from "react-icons/ri";
    

const Navbar = () => {

    const [open , setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];

    return (
        <nav className='text-black'>
            <div className=' md:hidden' onClick={() => setOpen(!open)}>
             {
               open === true ?  <RiCloseLine className='text-2xl'></RiCloseLine> :
               <RiMenu2Line className="flex text-2xl font-black"> </RiMenu2Line> 
              
            
             }

            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-16': '-top-60'} bg-yellow-200 px-4`}>
            {  
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
      </nav>
    );
};

export default Navbar;