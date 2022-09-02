import React from 'react'
import 'tw-elements';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
        <div>
        <nav className="animate__animated animate__fadeIn bg-white relative w-full flex flex-wrap items-center justify-between py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-sm navbar navbar-expand-lg navbar-light backdrop-blur-[2px]">
            <div className="container-fluid w-full flex flex-wrap backdrop-blur-3xl	 items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center justify-center" id="navbarSupportedContent">
                    <ul className="navbar-nav flex flex-col justify-center items-center pl-0 list-style-none">
                        <li className="nav-item px-5">
                            <Link to='/'>
                                <button className="hvr-grow nav-link text-darkBlackColor hover:text-bluePrimaryColor focus:text-gray-700 p-0 font-medium"
                                >Home</button>
                            </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to='/about'>
                            <button className="hvr-grow nav-link text-darkBlackColor hover:text-bluePrimaryColor focus:text-gray-700 p-0 font-medium"
                            >About</button>
                            </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/">
                            <button className="hvr-grow flex items-center text-darkBlackColor hover:text-bluePrimaryColor focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                                <img src="images/logo-menu.svg"
                                    style={{height: "50px"}} alt=""
                                    loading="lazy"/>
                            </button>
                            </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/projects">
                            
                            <button className="hvr-grow nav-link text-darkBlackColor hover:text-bluePrimaryColor focus:text-gray-700 p-0 font-medium"
                            href="#">Projects</button>
                            
                            </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/team">
                            <button className="hvr-grow nav-link text-darkBlackColor hover:text-bluePrimaryColor focus:text-gray-700 p-0 font-medium"
                            href="#">Team</button>
                            </Link>
                        </li> 
                    </ul>
                </div>


                {/*<div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">*/}
                {/*    <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto">*/}
                {/*        <li className="nav-item p-2">*/}
                {/*            <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"*/}
                {/*               href="#">Projects</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}


            </div>
        </nav>
    </div>
  )
}

export default NavBar