import Link from "next/link";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative mt-8">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold text-black dark:text-white">
               Summer Ecommerce platform
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Create production-ready AI visuals in seconds. Built for speed,
              scale, and creativity.
            </p>

            {/* Contact Info */}
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pt-2 border-t border-gray-200 dark:border-white/10">
              <p>Contact info</p>
              <p>Email:sagardebnath167@gmail.com</p>
              <p>+8801601463266</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/generate">Generate</Link></li>
              <li><Link href="/all-photos">Gallery</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Start creating</h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Generate your first AI image today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium hover:scale-[1.02] transition"
            >
              Get Started
            </Link>
             <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 pt-2">
              <p>Social links</p>
              <div className="flex gap-4 text-xs">
                <p className="cursor-pointer"><BiLogoFacebookCircle className="w-8 h-8"/></p>
                <span className="cursor-pointer"><RxGithubLogo className="w-8 h-8"/></span>
                <span className="cursor-pointer"><BsLinkedin className="w-8 h-8" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;