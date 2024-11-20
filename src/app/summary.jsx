
  // components/About.js
import Image from 'next/image';
import Link from 'next/link';

export default function Summary() {
  return (
    <section id="about" className="py-16 bg-transparent  mt-14">
      <div className="container mx-10 px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">

         

          {/* Content Section */}
          <div className="lg:w-7/12 "  data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-bold  mb-3">About Us</h3>
            <p className=" mb-8 text-lg text-green-500 ">
            Scale-ups, business around the globe trust our development teams to manage software from ideation to release and beyond. We enrich organizations with talent that boosts scalability, drives growth and brings disruptive ideas to life.
            </p>
            <ul className="space-y-4">

              {/* List Item 1 */}
              <li className="flex gap-4">
                <i className="bi bi-diagram-3 text-blue-700 text-xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800">
                    We believe in the power of AI innovation
                  </h4>
                  <p className="text-neutral-300">
                    Our approach ensures that every AI solution we provide is tailored to deliver maximum impact.
                  </p>
                </div>
              </li>

              {/* List Item 2 */}
              <li className="flex gap-4">
                <i className="bi bi-fullscreen-exit text-blue-500 text-xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800">
                    Innovative Solutions for Complex Challenges
                  </h4>
                  <p className="text-neutral-300">
                    CortixAI specializes in addressing the intricacies of modern AI solutions. Our expert team navigates through multifaceted issues, delivering tailored AI solutions.
                  </p>
                </div>
              </li>

              {/* List Item 3 */}
              <li className="flex gap-4">
                <i className="bi bi-broadcast text-blue-500 text-xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800">
                    Commitment to Excellence in Execution
                  </h4>
                  <p className="text-neutral-300">
                    At CortixAI, our focus is on delivering impactful AI solutions that address immediate needs while anticipating future challenges, ensuring sustained growth and success.
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-green-500 mt-8 ">
              <strong className='text-blue-800'>At CortixAI:</strong> we recognize that navigating the complexities of artificial intelligence can be challenging. Our mission is to simplify these complexities by delivering tailored AI solutions.
            </p>
          </div>
           {/* Image Section */}
           <div className="relative w-full lg:w-6/12" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="About Image"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            ></img>
        
              <a className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="glightbox pulsating-play-btn" />
              </a>
           
          </div>
        </div>
      </div>
    </section>
  );
}
