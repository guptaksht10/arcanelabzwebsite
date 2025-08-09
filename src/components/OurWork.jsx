const projects = [
    {
      id: 1,
      title: "Our Website Redesign",
      category: "UI/UX Design",
      description:
        "Complete website redesign for a bold look and escaping mediocrity. New style more elegant, more smoothness while scrolling, and a better UI/UX.",
      image: "/src/assets/images/project1.png", // replace with your actual image
      link: "#",
    },
    {
      id: 2,
      title: "Versa Website",
      category: "UI/UX Design",
      description:
        "Complete website redesign for a bold look and escaping mediocrity. New style more elegant, more smoothness while scrolling, and a better UI/UX.",
      image: "/src/assets/images/project2.png", // replace with your actual image
      link: "#",
    },
    {
      id: 3,
      title: "Bonita App",
      category: "UI/UX Design",
      description:
        "Complete website redesign for a bold look and escaping mediocrity. New style more elegant, more smoothness while scrolling, and a better UI/UX.",
      image: "/src/assets/images/project3.png", // replace with your actual image
      link: "#",
    },
  ];
  
  const OurWork = () => {
    return (
      <section className="bg-black py-20 px-6 sm:px-12">
        {/* Title */}
        <h2 className="text-white text-6xl font-bold mb-12 font-dm-sans">
          Our Work
        </h2>
  
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
  
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-green-200 text-green-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
  
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base flex-1">
                  {project.description}
                </p>
  
                <a
                  href={project.link}
                  className="mt-6 text-white font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurWork;
  