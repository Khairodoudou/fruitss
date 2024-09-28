import logo from './images/logo.png';

export default function Contact(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-12 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">

                    {/* Contact Form */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex flex-col text-center md:text-start w-full mb-20">
                            <h1 className="title-font font-serif sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
                                Contact Us 
                            </h1>
                            <p className="mb-8 leading-relaxed">Send us a message</p>

                            <div className="">
                                <form>
                                    <div className="p-2">
                                        <input type="text" required placeholder="Full name" className="input pb-2 input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="p-2">
                                        <input type="email" required placeholder="Your email" className="input pb-2 input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="p-2">
                                        <textarea
                                            placeholder="Bio"
                                            className="textarea pb-2 textarea-bordered textarea-sm w-full max-w-xs">
                                        </textarea>
                                    </div>
                                    <div className="p-2">
                                        <button className="btn btn-warning text-white w-36">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div className="p-4 w-full md:w-1/3 md:pl-24">
                        <div className="flex flex-col text-center md:text-start w-full mb-20">
                            <h1 className="title-font font-serif sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
                                Sitemap 
                            </h1>
                            <p className="mb-8 leading-relaxed">All our pages</p>

                            <div className="">
                                <ul className="marker:text-yellow-400 list-disc ps-5 ml-2 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                                    <li className="font-semibold text-black">Home</li>
                                    <li className="font-semibold text-black">About Us</li>
                                    <li className="font-semibold text-black">Services</li>
                                    <li className="font-semibold text-black">Blog</li>
                                    <li className="font-semibold text-black">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="p-4 w-full md:w-1/3 md:pl-24">
                        <div className="flex flex-col text-center justify-center items-center md:text-start w-full mb-20">
                            <a className="ml-4 text-xl flex flex-col text-center">
                                <img className="w-32" src={logo} alt="logo" />
                            </a>

                            <div className="">
                                <p className="leading-relaxed flex flex-row space-x-3 text-center justify-center items-center">
                                    <svg className="pt-2" width="20" height="20" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.30038 17.3581C0.318066 17.7432 -0.204778 18.7583 0.0751283 19.7284L1.34263 24.1288C1.59613 24.9989 2.43056 25.604 3.38119 25.604C16.447 25.604 27.0412 15.5729 27.0412 3.20165C27.0412 2.30155 26.4021 1.51147 25.4832 1.27144L20.8357 0.0713196C19.8112 -0.193708 18.7391 0.301342 18.3324 1.23144L16.2199 6.03195C15.8608 6.84703 16.109 7.79213 16.8325 8.34719L19.4362 10.3674C17.6775 13.8878 14.6672 16.7381 10.9492 18.4032L8.82087 15.938C8.22937 15.2529 7.2365 15.0179 6.37566 15.3579L1.30566 17.3581H1.30038Z" fill="#3A2818"/>
                                    </svg>
                                    <span className="text-xl flex flex-col text-center justify-center items-center"> (08) 400 2000</span>
                                </p>
                                <br/>
                                <p className="leading-relaxed flex flex-row space-x-3">
                                    <svg className="pt-2" width="20" height="20" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.7243 3.82646C5.04852 3.82646 4.49562 4.32961 4.49562 4.94456V6.48893L17.7423 16.3841C19.3319 17.5721 21.6127 17.5721 23.2023 16.3841L36.4413 6.48893V4.94456C36.4413 4.32961 35.8884 3.82646 35.2127 3.82646H5.7243ZM4.49562 10.8286V22.8341C4.49562 23.4491 5.04852 23.9522 5.7243 23.9522H35.2127C35.8884 23.9522 36.4413 23.4491 36.4413 22.8341V10.8286L25.5368 18.9767C22.588 21.1779 18.3413 21.1779 15.4002 18.9767L4.49562 10.8286ZM0.80957 4.94456C0.80957 2.47776 3.01352 0.472168 5.7243 0.472168H35.2127C37.9234 0.472168 40.1274 2.47776 40.1274 4.94456V22.8341C40.1274 25.3009 37.9234 27.3065 35.2127 27.3065H5.7243C3.01352 27.3065 0.80957 25.3009 0.80957 22.8341V4.94456Z" fill="#3A2818"/>
                                    </svg>
                                    <span className="text-xl">contact@contact.com</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
