import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const cloudDevOpsSkills = [
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD (Jenkins, ArgoCD)",
    "Docker",
    "Prometheus & Grafana"
  ];

  const networkingSkills = [
    "TCP/IP",
    "DNS & DHCP",
    "VLANs",
    "Subnetting",
    "Routing Protocols (OSPF, BGP, EIGRP)",
    "Load Balancing"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Experienced Cloud DevOps Engineer with expertise in cloud-native solutions, networking, automation, and infrastructure as code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Networking</h3>
                <div className="flex flex-wrap gap-2">
                  {networkingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> M.S. in Information Technology </strong> - Florida State University (2023-2024)
                </li>
                <li>
                  <strong> B.Tech in Information Technology </strong> - JNTUH, India (2017-2021)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold"> Cloud Net-DevOps Engineer at Business Integrated Solutions (2023 - 2024) </h4>
                  <p>
                    Optimized cloud security, managed DNS/DHCP, and implemented AWS solutions for enterprise scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold"> Cloud DevOps Engineer at HSBC (2021 - 2022) </h4>
                  <p>
                    Automated infrastructure using Terraform, built CI/CD pipelines, and optimized Kubernetes clusters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold"> Software Engineer at Cognizant (2019) </h4>
                  <p>
                    Developed cloud-native applications using AWS services and automated CI/CD workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};