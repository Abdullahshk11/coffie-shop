import { FaArrowRight, FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#241714] px-6 pb-6 pt-16 text-[#f4eee4] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div className="max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d39a6d]">Since 2018</p>
            <h2 className="mt-4 font-serif text-4xl leading-none md:text-5xl">Good coffee.<br /><span className="text-[#d39a6d]">Good company.</span></h2>
            <p className="mt-6 text-sm leading-6 text-[#b9aaa0]">A neighbourhood coffee bar serving thoughtful cups, warm conversations, and slow mornings.</p>
            <div className="mt-7 flex gap-3">
              <a href="#instagram" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d39a6d] hover:text-[#d39a6d]"><FaInstagram /></a>
              <a href="#facebook" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d39a6d] hover:text-[#d39a6d]"><FaFacebookF /></a>
              <a href="#twitter" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d39a6d] hover:text-[#d39a6d]"><FaXTwitter /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#d39a6d]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#d7cbc2]">
              <li><a href="/#menu" className="transition hover:text-[#d39a6d]">Our menu</a></li>
              <li><Link to="/Order" className="transition hover:text-[#d39a6d]">Order online</Link></li>
              <li><a href="#story" className="transition hover:text-[#d39a6d]">Our story</a></li>
              <li><a href="#contact" className="transition hover:text-[#d39a6d]">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#d39a6d]">Visit us</h3>
            <div className="mt-5 space-y-4 text-sm text-[#d7cbc2]">
              <p className="flex gap-3"><FaLocationDot className="mt-1 shrink-0 text-[#d39a6d]" /> 000000<br />Brooklyn, NY 11201</p>
              <p className="flex gap-3"><FaPhone className="mt-1 shrink-0 text-[#d39a6d]" />0000000000</p>
              <p className="leading-6 text-[#9d8e84]">Mon–Fri: 7am–7pm<br />Sat–Sun: 8am–6pm</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#d39a6d]">Stay in the loop</h3>
            <p className="mt-5 text-sm leading-6 text-[#b9aaa0]">Seasonal pours, early access, and occasional good news.</p>
            <form className="mt-5 flex border-b border-white/30 pb-2" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#8f8178]" />
              <button type="submit" aria-label="Subscribe to newsletter" className="pl-3 text-[#d39a6d] transition hover:text-white"><FaArrowRight /></button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.2em] text-[#8f8178] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Coffie Time. Brewed with care.</p>
          <div className="flex gap-5"><a href="#privacy" className="transition hover:text-[#d39a6d]">Privacy</a><a href="#terms" className="transition hover:text-[#d39a6d]">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
