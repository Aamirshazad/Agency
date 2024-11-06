export default function Summary() {
  return (
    <article className=" my-10 max-w-2xl relative">
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 pt-20 relative">
        
        {/* Summary Heading Column */}
        <div className="ml-12 col-span-1">
          <h1 className="text-3xl font-bold mt-6 lg:mt-8">Summary</h1>
        </div>
        
        {/* Text Content Column with Vertical Line */}
        <div className="col-span-2 lg:max-w-lg pl-6 mt-10">
          <div className="pl-6 mt-12 relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-10 before:w-px after:bottom-0 after:left-0 after:top-12 after:w-px">
            <figure className="text-sm space-y-4 mt-16">
              <blockquote className="text-neutral-400 italic">
                <p>Thanks to Studio, our app is running smoothly. They understood the nuances of our product and delivered exactly what we needed.</p>
              </blockquote>
              <blockquote className="text-neutral-400 italic">
                <p>The support from Studio has been outstanding. Their expertise in AI solutions was key to our success.</p>
              </blockquote>
              <blockquote className="text-neutral-400 italic">
                <p>Their attention to detail and dedication exceeded our expectations. CortexAI truly transformed our project.</p>
              </blockquote>
              <figcaption className="mt-6 font-semibold text-neutral-950">Customer Testimonials</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
