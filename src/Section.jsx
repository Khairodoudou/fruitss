import ananas from './images/ananas.png'; // Use import for images
import ineb from './images/ineb.png';
import batikh from './images/batikh.png';

export default function Section() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-2/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <h1 className="title-font font-serif sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              Why you 
              <br className="hidden lg:inline-block" /> should
              <br className="hidden lg:inline-block" /> choose us?
            </h1>
            <p className="mb-8 leading-relaxed">
              Our commitment to excellence in the realm of juices sets us apart from the competition.
            </p>
          </div>
  
          <div className="flex-grow flex flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="md:w-1/3 w-full px-4">
              <img className="object-cover w-40 object-center rounded" alt="ananas" src={ananas} />
            </div>
  
            <div className="md:w-1/3 w-full px-4">
              <img className="object-cover sm:mr-6 md:ml-10 w-14 md:w-20 object-center rounded" alt="ineb" src={ineb} />
            </div>
            
            <div className="md:w-1/3 w-full px-4">
              <img className="object-cover w-full object-center rounded" alt="batikh" src={batikh} />
            </div>
          </div>
        </div>
      </section>
    );
}
