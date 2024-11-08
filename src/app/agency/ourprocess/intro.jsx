export default function Summary() {
  return (
    <article className=" my-16 pb-20 max-w2xl  relative">
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 pt-20 relative">
        
        {/* Summary Heading Column */}
        <div className="ml-12 col-span-1">
          <h1 className="text-3xl font-bold mt-6 lg:mt-8">How We Work</h1>
        </div>
        
        {/* Text Content Column with Vertical Line */}
        <div className="col-span-2 lg:max-w-lg pl-2 mt-10">
          <div className="pl-6 mt-12 relative before:absolute after:absolute before:bg-red-500 after:bg-green-500 before:left-0 before:top-0 before:h-10 before:w-px after:bottom-0 after:left-0 after:top-12 after:w-px">
            <figure className="text-sm space-y-4 mt-16">
              <blockquote className="text-neutral-200 font-display">
                <p>
              Iman Gadzhi's Digital Launchpad equips you for success. It tackles common obstacles that hold most people back. Learn Iman's unique 7-minute exercise to jumpstart your journey and develop the right mindset. 
              The program also guides you in choosing the perfect business model for your personality type.

              Following the foundational training, Iman dives deep into his productivity techniques. Master his "monk mode" 
              strategy for laser focus and peak performance through a detailed breakdown of his daily schedule.

              Digital Launchpad is Iman Gadzhi's introductory program to break free from the bad habits that keep you stuck so you can unlock your full potential.
              Digital Launchpad will help you overcome the roadblocks to success. The program tackles common pitfalls, provides a unique success exercise, and guides you on choosing the right career path. You'll also learn Iman's high-productivity "monk mode" strategy and discover the top 3 paths to make your first $1,000 online, tailored to your personality type, for a maximized chance of success..</p>
              </blockquote>
              <blockquote className="text-neutral-200 font-display">
                <p>The support from Studio has been outstanding. Their expertise in AI solutions was key to our success.</p>
              </blockquote>
              <blockquote className="text-neutral-200 display">
                <p>Their attention to detail and dedication exceeded our expectations. CortexAI truly transformed our project.</p>
              </blockquote>
              <figcaption className="mt-6 font-semibold ">Customer Testimonials</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
