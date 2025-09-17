import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Sidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border p-8 flex flex-col"
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LanguageToggle />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary"
          >
            <img
              src="/assets/profile.jpg.jpg"
              alt="Mohanrao Nangana"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <ThemeToggle />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-foreground text-center"
        >
          Mohanrao Nangana
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-center mt-2"
        >
          Entry-level Developer learning web development
        </motion.p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {[
            { id: 'about', label: 'About' },
            { id: 'stack', label: 'Stack' },
            { id: 'education', label: 'Education' },
            { id: 'projects', label: 'Projects' },
            { id: 'internships', label: 'Internships' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-4"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-md text-center font-medium hover:bg-primary/90 transition-colors"
        >
          Resume
        </a>
      </motion.div>

    </motion.div>
  );
};

export default Sidebar;
