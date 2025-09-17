import { motion } from 'framer-motion';
import { CodeBracketIcon, RocketLaunchIcon, BriefcaseIcon, TrophyIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <section id="about" className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {translations.hero.greeting}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {translations.hero.subtitle}
          </p>
          <div className="text-muted-foreground max-w-2xl whitespace-pre-line">
            {translations.hero.description}
          </div>
        </motion.div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.stack}
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {['React', 'JavaScript', 'Java', 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB', 'Docker', 'Git'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-card border border-border rounded-md text-sm text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.education}
        </motion.h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{translations.education.university}</h3>
            <p className="text-muted-foreground">{translations.education.degree}</p>
            <p className="text-sm text-muted-foreground">{translations.education.period}</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.projects}
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              title: translations.projects.placement.title,
              description: translations.projects.placement.description,
              tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Redux Toolkit'],
              github: 'https://github.com/mohanraonangana/Job-Portal',
              live: 'https://job-portal-teal.vercel.app'
            },
            {
              title: translations.projects.seafood.title,
              description: translations.projects.seafood.description,
              tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Bootstrap'],
              github: 'https://github.com/mohanraonangana/NklSeafoods1.git',
              live: '#'
            },
            {
              title: translations.projects.health.title,
              description: translations.projects.health.description,
              tech: ['Spring Boot', 'MySQL', 'React', 'Redux'],
              github: 'https://github.com/mohanraonangana/HN_Project.git',
              live: '#'
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <CodeBracketIcon className="h-5 w-5" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-foreground">
                    <RocketLaunchIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.internships}
        </motion.h2>
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <BriefcaseIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{translations.internships.title}</h3>
            </div>
            <p className="text-primary font-medium">{translations.internships.company}</p>
            <p className="text-sm text-muted-foreground mb-3">{translations.internships.period}</p>
            <p className="text-muted-foreground">
              {translations.internships.description}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.achievements}
        </motion.h2>
        <div className="space-y-4">
          {[
            {
              title: translations.achievements.hackathon.title,
              event: translations.achievements.hackathon.event,
              description: translations.achievements.hackathon.description
            },
            {
              title: translations.achievements.coding.title,
              event: translations.achievements.coding.event,
              description: translations.achievements.coding.description
            }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrophyIcon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
              </div>
              <p className="text-primary font-medium">{achievement.event}</p>
              <p className="text-muted-foreground mt-2">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          {translations.sections.contact}
        </motion.h2>
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-primary" />
          <a
            href="mailto:nanganamohanrao12@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            {translations.contact.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8">
        <p className="text-center text-muted-foreground">
          {translations.footer}
        </p>
      </footer>
    </div>
  );
};

export default Home;