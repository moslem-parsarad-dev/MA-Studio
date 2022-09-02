import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Contact</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Feel free to contact us!
        </h5>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <Link to="/about">
                <span class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                <span class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/team">
                <span class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Team</span>
                </Link>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact Us</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Email Here</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Our Instagram</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Our Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span><a href="/" class="text-blueGray-500 hover:text-gray-800" target="_blank"> M.A Studio</a>
        </div>
        <div>
            Design By <a href="https://parsarad-portfolio.vercel.app/" className='text-blue-600'>Moslem Parsarad</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer;
