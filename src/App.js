import React, { useState } from "react";
import { Home, Code, Lightbulb, BookMarked } from "lucide-react";
import NavItem from "./components/NavItem";
import HomePage from "./pages/Home";
import CodePage from "./pages/Code";
import ParadigmsPage from "./pages/Paradigms";
import BookshelfPage from "./pages/Bookshelf";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <HomePage />,
    code: <CodePage />,
    paradigms: <ParadigmsPage />,
    bookshelf: <BookshelfPage />,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <div className="fixed inset-0 bg-gray-50 -z-10" />{" "}
      {/* Background layer */}
      <header className="relative py-4 bg-gray-50">
        <nav className="max-w-3xl mx-auto px-4">
          <div className="border-t-2 border-b-2 border-gray-200 py-2">
            <ul className="flex justify-between items-center">
              <NavItem
                icon={<Home size={18} />}
                text="Home"
                isActive={activeSection === "home"}
                onClick={() => setActiveSection("home")}
              />
              <NavItem
                icon={<Code size={18} />}
                text="Code"
                isActive={activeSection === "code"}
                onClick={() => setActiveSection("code")}
              />
              <NavItem
                icon={<Lightbulb size={18} />}
                text="Paradigms"
                isActive={activeSection === "paradigms"}
                onClick={() => setActiveSection("paradigms")}
              />
              <NavItem
                icon={<BookMarked size={18} />}
                text="Bookshelf"
                isActive={activeSection === "bookshelf"}
                onClick={() => setActiveSection("bookshelf")}
              />
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex-grow relative bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {sections[activeSection]}
        </div>
      </main>
      <footer className="relative py-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Ahmed Elfarra. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
