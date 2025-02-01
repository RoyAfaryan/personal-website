import Image from 'next/image'

export default function Experience() {

  const languages = [
    { str: "JavaScript" },
    { str: "TypeScript" },
    { str: "C/C++" },
    { str: "Python" },
    { str: "Java" },
    { str: "C#" },
  ];

  const technologies = [
    { str: "Git", color: "bg-orange-400" },
    { str: "Next.js", color: "bg-blue-500" },
    { str: "React", color: "bg-blue-500" },
    { str: "Unity Game Engine", color: "bg-green-800" },
    { str: "Unreal Engine", color: "bg-green-800" },
    { str: "Firebase", color: "bg-red-400" },
    { str: "DynamoDB", color: "bg-red-400" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray">
      {/* Centered Box */}
      <div className="bg-gray text-white w-[40rem] min-h-screen p-5">
        {/* Education section */}
        <section>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Education
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium font-standard mt-3">
                Cal Poly Pomona
              </h3>
              <h4 className="text-l sm:text-xl font-medium font-standard">
                Bachelor of Science - Computer Science
              </h4>
              <h4 className="text-l sm:text-xl font-medium font-standard">
                GPA: 3.63
              </h4>
            </div>
            <Image src="/calpolyicon.png" height={150} width={100} alt="Cal Poly Icon" />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Projects
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Project 1: Bronco Hackathon: Campus Marketplace */}
          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-medium font-standard">
              Bronco Hackathon: Campus Marketplace
            </h3>
            <p className="text-l sm:text-xl font-standard mt-2">
              A dynamic web application for Cal Poly Pomona students to buy and sell items. Features include user authentication, item listings, and search filters.
            </p>
            <a
              href="https://github.com/your-username/campus-marketplace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-l sm:text-xl font-standard"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2: ManaStorm */}
          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-medium font-standard">
              ManaStorm
            </h3>
            <p className="text-l sm:text-xl font-standard mt-2">
              A 3D game developed using Unity and C#. Features immersive environments, interactive gameplay, and SFX elements. Hosted on itch.io.
            </p>
            <a
              href="https://github.com/your-username/manastorm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-l sm:text-xl font-standard"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3: Asteroid Avoider */}
          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-medium font-standard">
              Asteroid Avoider
            </h3>
            <p className="text-l sm:text-xl font-standard mt-2">
              A 2D mobile game where players navigate a spaceship through a field of asteroids. Features touch controls, power-ups, and a high-score system.
            </p>
            <a
              href="https://github.com/your-username/asteroid-avoider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-l sm:text-xl font-standard"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Technical Skills
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Programming Languages */}
          <h3 className="text-xl sm:text-2xl font-bold font-standard">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-gray-200/50 text-white sm:text-sm text-xs font-semibold py-1 px-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-default"
              >
                {language.str}
              </div>
            ))}
          </div>

          {/* Technologies */}
          <h3 className="text-xl sm:text-2xl font-bold font-standard mt-5">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} text-white sm:text-sm text-xs font-semibold py-1 px-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-default`}
              >
                {tech.str}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}