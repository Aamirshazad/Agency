export default function Summary() {
  return (
    <article className=" my-10 max-w-2xl relative">
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 pt-20 relative">
        
        {/* Summary Heading Column */}
        <div className="ml-12 col-span-1">
          <h1 className="text-3xl font-bold mt-6 lg:mt-8">Summary</h1>
        </div>
        
        {/* Text Content Column with Vertical Line */}
        <div className="col-span-2 lg:max-w-lg pl-6 w-screen  mt-10">
          <div className="pl-6 mt-12  relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-10 before:w-px after:bottom-0 after:left-0 after:top-12 after:w-px">
            <figure className=" space-y-4 mt-16">
              <blockquote className="text-neutral-300 font-display ">
                <p>
                   At CortexAI, we specialize in reshaping the way businesses operate by integrating advanced AI automation solutions that drive efficiency and elevate performance  </p>
              </blockquote>
              <blockquote className="text-neutral-300 font-display">
                <p>  Our team works closely with companies to pinpoint and transform areas ripe for automation, enabling them to streamline daily operations and reduce costs without the need for complex technical skills or coding knowledge.</p>
              </blockquote>
              <blockquote className="text-neutral-400 display">
                <p>By choosing CortexAI as their AI automation partner, businesses unlock the full potential of their operations through intelligent automation, freeing up valuable time and resources.</p>
              </blockquote>
              <blockquote className="text-neutral-400 display">
                <p><strong>Our goal is simple:</strong> to help companies achieve more, spend less, and maximize revenue by creating solutions tailored to their unique needs.</p>
              </blockquote>
              <figcaption className="mt-6 font-semibold text-neutral-950">Customer Testimonials</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
