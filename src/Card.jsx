import coctele from './images/coctele.png'; // Import images properly
import kiwi from './images/kiwi.png';
import touta from './images/touta.png';

export default function Card() {
    return (
        <section className="text-gray-600 body-font md:overflow-hidden">
            <div className="container px-12 py-24 mx-auto">
                <div className="flex flex-col text-center md:text-start w-full mb-20">
                    <h1 className="title-font font-serif sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
                        Explore best  
                        <br className="hidden lg:inline-block" /> menu selections
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center items-center -m-4">
                    {/* Card 1 */}
                    <div className="p-4 md:w-1/3 hover:scale-105 duration-300">
                        <div className="card bg-base-100 w-full md:w-96 shadow-xl bg-gradient-to-r from-orange-300 to-yellow-200">
                            <figure>
                                <img className="w-60" src={coctele} alt="coctele" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Mango Bliss Burst</h2>
                                <p>Description of the item</p>
                                <div className="card-actions justify-start">
                                    <p className=""><span className="text-red-600 font-bold">$</span> 10.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 md:w-1/3 hover:scale-105 duration-300">
                        <div className="card bg-base-100 w-full md:w-96 shadow-xl bg-gradient-to-r from-orange-300 to-yellow-200">
                            <figure>
                                <img className="w-80 md:w-60" src={kiwi} alt="kiwi" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Pure Kiwi Joy</h2>
                                <p>Description of the item</p>
                                <div className="card-actions justify-start">
                                    <p className=""><span className="text-red-600 font-bold">$</span> 15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 md:w-1/3 hover:scale-105 duration-300">
                        <div className="card bg-base-100 w-full md:w-96 shadow-xl bg-gradient-to-r from-orange-300 to-yellow-200">
                            <figure>
                                <img className="w-5/6" src={touta} alt="touta" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">Berry Burst Bliss</h2>
                                <p>Description of the item</p>
                                <div className="card-actions justify-start">
                                    <p className=""><span className="text-red-600 font-bold">$</span> 11.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
