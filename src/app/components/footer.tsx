import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gray p-6">
      <div className="text-white font-standard text-lg">
        <a 
          href="https://www.linkedin.com/in/your-linkedin-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </footer>
  );
}
