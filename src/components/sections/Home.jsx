import cloudIcon from "../../assets/cloud-icon.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Image */}
          <img
             src={cloudIcon}
            alt="Dushyanth Bandaru"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg object-cover"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Dushyanth Bandaru
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m an experienced Cloud DevOps Engineer with a strong background in Networking, Cloud technologies, AWS, Kubernetes,
            CI/CD automation and infrastructure as code. Passionate about building scalable, efficient, and secure cloud-native solutions. 
            My goal is to optimize deployments, enhance automation, and drive innovation in cloud operations.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

