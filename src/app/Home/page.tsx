import Typewriter from "typewriter-effect";
import Image from 'next/image';


export default function Home() {
  
    const photos = [
      { src: "/Hamburg.jpg", alt: "Hamburg, Germany"},
      { src: "/Eze.jpg", alt: "Èze, France"},
      { src: "/FitExpo.jpg", alt: "Los Angeles Fitness Expo"},
      { src: "/Tahoe.jpg", alt: "Lake Tahoe, California"},
      { src: "/Graduation.jpg", alt: "Cal Poly Pomona"},
      { src: "/Berlin.jpg", alt: "Berlin, Germany"},
    ]

    return (
      <main className="flex justify-center items-center min-h-screen bg-gray cursor-default">
        {/* Centered Box */}
        <div className="bg-gray text-white w-[40rem] min-h-screen p-5">

          {/* Header section */}
            <h1 className="text-3xl sm:text-5xl font-extrabold font-standard inline-flex">H
            <Typewriter
                    options={{delay:35}}
                    onInit={(typewriter) => {
                        typewriter.typeString('ello there, I\'m Roy').start();}}
                    />
            </h1>

          {/* Blurb underneath header */}
          <h3 className="text-xl sm:text-2xl font-light font-standard mt-3">
            I&apos;m a new grad <span className="font-bold">software engineer</span> based in Los Angeles, CA. If I&apos;m not coding I&apos;m probably lifting weights or playing guitar.
          </h3>

          {/* Photo Gallery */}
          <div className="mt-9">
            <h2 className="text-2xl sm:text-3xl font-bold font-standard mb-4">Some photos of me</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
                  {/* Image */}
                  <Image
                    src={photo.src}
                    width={500}
                    height={500}
                    alt={photo.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-transform group-hover:scale-105">
                    <p className="text-white text-lg font-medium font-standard">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

            


        </div>
      </main>
    );
  }

  