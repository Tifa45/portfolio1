import { useState } from "react";
import useTheme from "../hooks/useTheme";
import { Menu } from "lucide-react";
import useIsDesktop from "../hooks/useIsDesktop";
import { navLinks } from "../lib/constants";
import useClickOutside from "../hooks/useClickOutside";

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropMenuRef = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={dropMenuRef} className="relative px-2">
      <div className="flex items-center">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={30} />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 absolute top-[100%] left-2 bg-primaryC w-40 px-4 py-2 rounded-md border">
          {navLinks.map((link, index) => (
            <div className={`${index > 0 ? "border-t pt-2" : ""}`}>
              <a
                className={`p-2 hover:bg-hoverC rounded-2xl block`}
                href={link.ref}
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NavBar({
  scrollToSection,
  contactRef,
  aboutRef,
  myWorkRef,
  skillsRef,
  activeSection,
}) {
  const [thetheme, theme, toggleTheme] = useTheme();
  const isDesktop = useIsDesktop();
  return (
    <nav className="flex backdrop-blur-sm rounded-full w-full max-w-7xl items-center mx-auto border px-4 py-2">
      {!isDesktop && <DropMenu />}
      <button
        className={`font-bold px-6 ${
          activeSection === "hero" ? "text-blue-600 font-bold" : ""
        }`}
        onClick={() => window.scrollTo(top)}
      >
        M.Yousry
      </button>

      {isDesktop && (
        <div className="flex gap-12 flex-1 justify-center items-center">
          <button
            className={`cursor-pointer hover-underline-animation ${
              activeSection === "about" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </button>

          <button
            className={`cursor-pointer hover-underline-animation ${
              activeSection === "myWork" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => scrollToSection(myWorkRef)}
          >
            My Work
          </button>

          <button
            className={`cursor-pointer hover-underline-animation ${
              activeSection === "skills" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => scrollToSection(skillsRef)}
          >
            Skills
          </button>
          <button
            className={`p-2 rounded-lg bg-cardC cursor-pointer hover:brightness-125 ${
              activeSection === "contact" ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </button>
        </div>
      )}
      <div className="flex ml-auto">
        <label className="premium-toggle">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <div className="switch">
            <div className="track">
              <div className="magnetic-field"></div>
              <div className="track-shadow"></div>
            </div>
            <div className="handle-container">
              <div className="handle">
                <div className="handle-inner">
                  <div className="handle-ripple"></div>
                  <div className="handle-shine"></div>
                  <div className="handle-texture"></div>
                  <div className="sun-moon">
                    <div className="ray ray1"></div>
                    <div className="ray ray2"></div>
                    <div className="ray ray3"></div>
                    <div className="ray ray4"></div>
                    <div className="crater crater1"></div>
                    <div className="crater crater2"></div>
                    <div className="crater crater3"></div>
                  </div>
                </div>
                <div className="wave-group">
                  <div className="wave wave1"></div>
                  <div className="wave wave2"></div>
                  <div className="wave wave3"></div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </nav>
  );
}

export default NavBar;
