import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, WrenchScrewdriverIcon, CodeBracketIcon, BriefcaseIcon, SparklesIcon, PhoneIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { useMemo } from 'react';

const Dock = () => {
  const location = useLocation();

  const items = useMemo(
    () => [
      { path: '/', label: 'Home', icon: HomeIcon },
      { path: '/skills', label: 'Skills', icon: WrenchScrewdriverIcon },
      { path: '/projects', label: 'Projects', icon: CodeBracketIcon },
      { path: '/internships', label: 'Intern', icon: BriefcaseIcon },
      { path: '/achievements', label: 'Wins', icon: SparklesIcon },
      { path: '/contact', label: 'Contact', icon: PhoneIcon },
    ],
    []
  );

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/80 backdrop-blur px-2 py-2 shadow-lg">
        {items.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <Link key={path} to={path} className="group">
              <motion.div
                whileHover={{ y: -3 }}
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition-colors ${
                  active ? 'bg-secondary text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] mt-1">{label}</span>
              </motion.div>
            </Link>
          );
        })}
        <div className="ml-1 pl-2 border-l border-border">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Dock;


