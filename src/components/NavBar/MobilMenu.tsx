import { NavItem } from "./NavItem";


type MobileMenuProps = {
  isOpen: boolean;
  navItems: NavItem[];
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${
      isOpen ? "block" : "hidden"} bg-sky-800 py-2`
      }
      >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-4 py-2 text-gray-200 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
