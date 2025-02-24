// Footer.tsx
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.facebook.com/codewavear", icon: FaFacebook, label: "Facebook" },
  { href: "https://twitter.com/codewavear", icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/codewavear/", icon: FaInstagram, label: "Instagram" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-900 text-gray-200 py-4">
      <div className="w-full px-6 flex justify-between items-center">
        <p className="text-left">© {currentYear} Codewave. Todos los derechos reservados.</p>

        <div className="flex gap-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-opacity duration-300 hover:opacity-80"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
