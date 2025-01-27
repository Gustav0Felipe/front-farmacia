import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
        
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    function handleClick(){
        if(openMenu)
            setOpenMenu(false)
        else
            setOpenMenu(true)
        console.log(openMenu)
    }
    
    return (
        <>
            <div className='w-full bg-blue-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmacia</Link>

                    <div>
                    {!openMenu &&
                        <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                        }
                        {openMenu && <>	
                            <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                            <nav id="menu">
                                <ul>
                                    <li><Link to={"/home"}> Home </Link></li>
                                </ul>
                            </nav>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar