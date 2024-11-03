"use client"
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: 'a',
        email: 'aa',
        company: 'aa',
        phone: '434',
        message: 'fdfd',
        budget: '434'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formData.message) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Process form data (send to server, etc.)
            console.log('Form submitted:', formData);
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
                budget: ''
            });
            setErrors({});
            alert("Form submitted successfully!");
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-6  lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                   

                    {/* Office Information Section on the Right */}
                    <div className="opacity-100 transform-none">
    <h2 className="font-display text-base font-semibold text-neutral-950">Our offices</h2>
    <p className="mt-6 text-base text-neutral-600">Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.</p>
    <ul role="list" className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <li>
            <address className="text-sm not-italic text-neutral-600">
                <strong className="text-neutral-950">Copenhagen</strong><br />
                1 Carlsberg Gate<br />
                1260, København, Denmark
            </address>
        </li>
        <li>
            <address className="text-sm not-italic text-neutral-600">
                <strong className="text-neutral-950">Billund</strong><br />
                24 Lego Allé<br />
                7190, Billund, Denmark
            </address>
        </li>
    </ul>
    <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
        <h2 className="font-display text-base font-semibold text-neutral-950">Email us</h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            <div>
                <dt className="font-semibold text-neutral-950">Careers</dt>
                <dd>
                    <a className="text-neutral-600 hover:text-neutral-950" href="mailto:careers@studioagency.com">careers@studioagency.com</a>
                </dd>
            </div>
            <div>
                <dt className="font-semibold text-neutral-950">Press</dt>
                <dd>
                    <a className="text-neutral-600 hover:text-neutral-950" href="mailto:press@studioagency.com">press@studioagency.com</a>
                </dd>
            </div>
        </dl>
    </div>
    <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
        <h2 className="font-display text-base font-semibold text-neutral-950">Follow us</h2>
        <ul role="list" className="flex gap-x-10 text-neutral-950 mt-6">
            <li>
                <a aria-label="Facebook" className="transition hover:text-neutral-700" href="https://facebook.com">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a aria-label="Instagram" className="transition hover:text-neutral-700" href="https://instagram.com">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a aria-label="GitHub" className="transition hover:text-neutral-700" href="https://github.com">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.801 8.205 11.388.6.111.82-.261.82-.577v-2.162c-3.338.724-4.038-1.61-4.038-1.61-.546-1.38-1.333-1.749-1.333-1.749-1.085-.742.083-.727.083-.727 1.2.085 1.833 1.237 1.833 1.237 1.066 1.831 2.8 1.303 3.48.996.107-.771.417-1.303.758-1.603-2.664-.303-5.467-1.331-5.467-5.934 0-1.313.468-2.387 1.236-3.227-.124-.303-.536-1.53.117-3.18 0 0 1.007-.322 3.304 1.227a11.52 11.52 0 0 1 3.005-.404c1.021.005 2.054.139 3.004.404 2.297-1.549 3.304-1.227 3.304-1.227.653 1.651.241 2.877.118 3.18.77.84 1.236 1.914 1.236 3.227 0 4.616-2.81 5.624-5.475 5.921.43.371.816 1.103.816 2.227v3.293c0 .318.218.694.825.577C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12Z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a aria-label="Dribbble" className="transition hover:text-neutral-700" href="https://dribbble.com">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M12 0a12 12 0 1 0 12 12A12.012 12.012 0 0 0 12 0Zm7.1 16.84c-.633 2.77-3.174 4.52-6.1 4.52a7.62 7.62 0 0 1-7.6-7.62c0-1.74.607-3.52 1.75-4.93l-2.14-2.14c-1.82 2.14-2.36 4.7-2.36 7.12A12 12 0 0 0 12 24a12 12 0 0 0 12-12c0-1.83-.44-3.59-1.1-5.2l-1.59 1.59c.66 1.15 1.1 2.4 1.1 3.7a9.58 9.58 0 0 1-9.58 9.58A9.48 9.48 0 0 1 5.3 16.3c-.2.82-.3 1.57-.3 2.3a12.069 12.069 0 0 0 8.39 11.37 12 12 0 0 0 11.11-11.61ZM10.9 8.87a3.371 3.371 0 0 1 .22-3.87A7.626 7.626 0 0 0 12 9.16a7.83 7.83 0 0 0 1.3-.04 3.37 3.37 0 0 1-2.4 2.66ZM8.51 7.38a4.111 4.111 0 0 1 1.34 4.61c-1.66.09-3.01.66-3.55 1.54.9 2.82 2.83 4.84 5.09 5.69-.04.01-.08.01-.12.01a5.812 5.812 0 0 1-.62 0A4.191 4.191 0 0 1 6 16.83a4.11 4.11 0 0 1-1.51-7.45c.67-1.02 1.9-1.5 3.02-1.2Z"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</div>

 {/* Form Section on the right */}
 <div >
                        <form onSubmit={handleSubmit}>
                            <h2 className="font-display text-base font-semibold text-neutral-950">Work inquiries</h2>
                            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                                <div className="group relative z-0 transition-all focus-within:z-10">
                                    <input id="name" autoComplete="name" placeholder=" "
                                        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                                        type="text" name="name" value={formData.name} onChange={handleChange} required />
                                    <label htmlFor="name"
                                        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Name</label>
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                <div className="group relative z-0 transition-all focus-within:z-10">
                                    <input id="email" autoComplete="email" placeholder=" "
                                        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                                        type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    <label htmlFor="email"
                                        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Email</label>
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div className="group relative z-0 transition-all focus-within:z-10">
                                    <input id="company" autoComplete="organization" placeholder=" "
                                        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                                        type="text" name="company" value={formData.company} onChange={handleChange} />
                                    <label htmlFor="company"
                                        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Company</label>
                                </div>
                                <div className="group relative z-0 transition-all focus-within:z-10">
                                    <input id="phone" autoComplete="tel" placeholder=" "
                                        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                                        type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                    <label htmlFor="phone"
                                        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Phone</label>
                                </div>
                                <div className="group relative z-0 transition-all focus-within:z-10">
                                    <textarea id="message" placeholder=" "
                                        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                                        name="message" value={formData.message} onChange={handleChange} required></textarea>
                                    <label htmlFor="message"
                                        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Message</label>
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>
                                <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                                    <fieldset>
                                        <legend className="text-base text-neutral-500">Budget</legend>
                                        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                            <label className="flex gap-x-3">
                                                <input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950" type="radio" name="budget" value="Under $500" onChange={handleChange} />
                                                <span className="text-base text-neutral-950">Under $500</span>
                                            </label>
                                            <label className="flex gap-x-3">
                                                <input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950" type="radio" name="budget" value="$500 - $1000" onChange={handleChange} />
                                                <span className="text-base text-neutral-950">$500 - $1000</span>
                                            </label>
                                            <label className="flex gap-x-3">
                                                <input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950" type="radio" name="budget" value="$1000 - $5000" onChange={handleChange} />
                                                <span className="text-base text-neutral-950">$1000 - $5000</span>
                                            </label>
                                            <label className="flex gap-x-3">
                                                <input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950" type="radio" name="budget" value="Over $5000" onChange={handleChange} />
                                                <span className="text-base text-neutral-950">Over $5000</span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="block w-28 items-center rounded-md bg-neutral-950 px-3 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
