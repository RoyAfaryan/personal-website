'use client'
import Image from 'next/image'

export default function Experience() {

  const languages = [
    { str: "C/C++" },
    { str: "Python" },
    { str: "C#" },
    { str: "Java" },
    { str: "JavaScript" },
    { str: "C" }
  ];

  const technologies = [
    { str: "Raspberry Pi 5", color: "bg-red-600" },
    { str: "ESP32", color: "bg-gray-600" },
    { str: "ROS2", color: "bg-blue-600" },
    { str: "SystemC", color: "bg-purple-600" },
    { str: "MQTT", color: "bg-orange-500" },
    { str: "Unix", color: "bg-gray-800" },
    { str: "React", color: "bg-blue-500" },
    { str: "Next.js", color: "bg-blue-500" },
    { str: "CSS", color: "bg-blue-400" },
    { str: "Unity", color: "bg-green-800" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Centered Box */}
      <div className="w-[40rem] min-h-screen p-5">
        
        {/* Education section */}
        <section>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Education
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          
          {/* UC Irvine */}
          <div className="flex items-center justify-between mt-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium font-standard">
                University of California, Irvine
              </h3>
              <h4 className="text-l sm:text-xl font-medium font-standard">
                Master of Embedded and Cyber-Physical Systems
              </h4>
              <h4 className="text-sm sm:text-base font-medium font-standard opacity-75">
                Sep 2025 - Dec 2026
              </h4>
            </div>
            <Image src="/uciicon.png" height={150} width={100} alt="UCI Icon" />
          </div>

          {/* Cal Poly Pomona */}
          <div className="flex items-center justify-between mt-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium font-standard">
                Cal Poly Pomona
              </h3>
              <h4 className="text-l sm:text-xl font-medium font-standard">
                Bachelor of Science - Computer Science
              </h4>
              <h4 className="text-sm sm:text-base font-medium font-standard opacity-75">
                Aug 2020 - May 2024
              </h4>
            </div>
            <Image src="/calpolyicon.png" height={150} width={100} alt="Cal Poly Icon" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Experience
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          
          <div className="mt-5">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl sm:text-2xl font-bold font-standard">Legacy Robotics UCI</h3>
              <span className="text-sm sm:text-base font-standard opacity-75">Feb 2026 - Present</span>
            </div>
            <h4 className="text-lg sm:text-xl font-medium font-standard italic mb-2">Graduate Advisor</h4>
            <ul className="list-disc list-inside text-sm sm:text-base font-standard mt-2 space-y-2">
              <li>Advised the undergraduate software team on <strong>system architecture</strong> and <strong>version control</strong> for a custom autonomous Mars rover operating within a distributed <strong>ROS2</strong> environment.</li>
              <li>Collaborated on the autonomous navigation sub-team to integrate a high-precision <strong>GNSS module</strong>, establishing reliable centimeter-level <strong>RTK localization</strong> to guide dynamic <strong>path planning</strong>.</li>
              <li>Developed a responsive mission control GUI using <strong>React</strong> and <strong>Next.js</strong> that parses embedded telemetry and spatial log files, rendering dynamic <strong>data visualizations</strong> and interactive <strong>trajectory maps</strong>.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-standard inline-flex">
            Projects
          </h1>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Project 1: Distributed IoT Monitoring System */}
          <div className="mt-5">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl sm:text-2xl font-bold font-standard">
                Distributed IoT Monitoring System
              </h3>
              <span className="text-sm sm:text-base font-standard opacity-75">Sep 2025 - Dec 2025</span>
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base font-standard mt-2 space-y-2">
              <li>Designed and deployed a multi-node sensor network utilizing <strong>ESP32</strong> and <strong>Raspberry Pi 5</strong> hardware to monitor environmental data across distributed physical locations.</li>
              <li>Implemented a robust communication backbone using <strong>MQTT</strong> with optimized 1-second polling intervals to ensure <strong>low-latency</strong> data transmission and real-time <strong>state synchronization</strong>.</li>
              <li>Engineered an event-driven reset detection system leveraging <strong>GPIO interrupts</strong> to maintain <strong>session persistence</strong> and <strong>data integrity</strong> during unexpected power cycles or hardware failures.</li>
              <li>Developed a high-performance dashboard using <strong>Next.js</strong> and <strong>React</strong>, utilizing optimized component lifecycles to render <strong>real-time telemetry</strong> and statistical summaries for large-scale sensor datasets.</li>
            </ul>
            <a
              href="https://www.linkedin.com/in/roy-afaryan/overlay/Project/1105521037/treasury/?profileId=ACoAADiLL2YBPfBHMCMcFSA3AD57toxWi7ibR1U"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-standard"
            >
              View on LinkedIn
            </a>
          </div>

          {/* Project 2: Canny Edge Detection SoC Model */}
          <div className="mt-8">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl sm:text-2xl font-bold font-standard">
                Canny Edge Detection SoC Model
              </h3>
              <span className="text-sm sm:text-base font-standard opacity-75">Sep 2025 - Dec 2025</span>
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base font-standard mt-2 space-y-2">
              <li>Refactored a monolithic ANSI-C reference implementation into a modular, hardware-ready <strong>SystemC</strong> specification with a <strong>6-stage pipeline</strong> and structural hierarchy.</li>
              <li>Optimized throughput by slicing compute-intensive modules into 4 <strong>parallel worker threads</strong>, synchronized via events to simulate high-performance <strong>GPU/DSP acceleration</strong>.</li>
              <li>Replaced all dynamic memory allocation with <strong>static arrays</strong> to meet hardware synthesis constraints and implemented <strong>fixed-point arithmetic</strong> for a <strong>30% increase</strong> in execution speed.</li>
              <li>Conducted comparative profiling using <strong>gprof</strong> and validated absolute timing on <strong>Raspberry Pi 5</strong> hardware, calibrating the model to process high-resolution drone video streams.</li>
            </ul>
          </div>

          {/* Project 3: Asteroid Avoider */}
          <div className="mt-8">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl sm:text-2xl font-bold font-standard">
                Asteroid Avoider
              </h3>
              <span className="text-sm sm:text-base font-standard opacity-75">Jan 2024 - May 2024</span>
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base font-standard mt-2 space-y-2 mb-2">
              <li>Engineered a complete software release pipeline in <strong>C#</strong> using the <strong>Unity Engine</strong>, managing the full software development life cycle from system architecture to production deployment on the <strong>Google Play Store</strong>.</li>
              <li>Architected persistent user state management and secure data synchronization by integrating <strong>RESTful APIs</strong> and <strong>cloud authentication</strong> services.</li>
              <li>Developed modular, object-oriented <strong>C#</strong> scripts to handle robust state machine management, optimized <strong>physics simulations</strong>, and efficient <strong>spatial collision detection</strong>.</li>
            </ul>
            <a
              href="https://github.com/your-username/asteroid-avoider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-standard"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-10 mb-10">
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
                className="dark:bg-gray-200/50 bg-gray-800 text-white sm:text-sm text-xs font-semibold py-1 px-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-default"
              >
                {language.str}
              </div>
            ))}
          </div>

          {/* Technologies */}
          <h3 className="text-xl sm:text-2xl font-bold font-standard mt-5">
            Technologies & Frameworks
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