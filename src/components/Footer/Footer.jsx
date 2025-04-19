import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-dark text-light">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="p-6 flex flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                    <Logo width="200px" />
                </div>
            </div>

            {/* Company Links */}
            <div className="p-6">
                <h3 className="tracking-px mb-8 font-bold uppercase text-left text-lg">Company</h3>
                <ul>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Features</Link>
                    </li>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Pricing</Link>
                    </li>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Affiliate Program</Link>
                    </li>
                    <li>
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Press Kit</Link>
                    </li>
                </ul>
            </div>

            {/* Support Links */}
            <div className="p-6">
                <h3 className="tracking-px mb-8 font-bold uppercase text-left text-lg">Support</h3>
                <ul>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Account</Link>
                    </li>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Help</Link>
                    </li>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Customer Support</Link>
                    </li>
                </ul>
            </div>

            {/* Legal Links */}
            <div className="p-6">
                <h3 className="tracking-px mb-8 font-bold uppercase text-left text-lg">Legals</h3>
                <ul>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Terms & Conditions</Link>
                    </li>
                    <li className="mb-4">
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="text-base font-medium text-primary hover:text-accent-500 hover:underline transition-all duration-300" to="/">Licensing</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


  )
}

export default Footer
