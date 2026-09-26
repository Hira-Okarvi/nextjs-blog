import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-[78px] flex items-center justify-between">
        <Link href="#home" className="flex flex-col leading-none">
          <span className="font-serif italic text-[25px] font-medium text-neutral-900">Hira Ahsan</span>
          <small className="text-[10px] text-neutral-600 mt-[5px]">Web Designer & Developer</small>
        </Link>
        <nav className="hidden md:flex items-center gap-7 ml-auto">
          <Link href="#home" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">Home</Link>
          <Link href="#about" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">About</Link>
          <Link href="#services" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">Services</Link>
          <Link href="#portfolio" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">Portfolio</Link>
          <Link href="#experience" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">Experience</Link>
          <Link href="#contact" className="text-[13px] text-neutral-700 hover:text-black font-medium py-7 transition-colors">Contact</Link>
        </nav>
        <Link 
          href="#contact" 
          className="inline-flex items-center justify-center gap-2.5 rounded-[10px] text-[13px] font-semibold bg-[#171717] text-white px-[18px] py-[13px] hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
        >
          Let's Talk <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
