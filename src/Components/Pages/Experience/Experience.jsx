import info from "@D/AboutMe.json";

export const Experience = () => {
    return (
        <section className="flex h-full items-center justify-center bg-white p-4">
            <div className="max-w-[1200px] w-full flex flex-col gap-12">
                <h2 className="text-3xl sm:text-4xl font-bold bg-black bg-clip-text text-transparent text-center mb-8">
                    Proyectos
                </h2>

                <div className="bg-gradient-to-r from-[#3B82F6] to-[#EC4899] rounded-lg p-6 shadow-lg border border-[#3B82F6]">
                    <h3 className="text-2xl font-semibold mb-4 text-black">Proyectos Destacados</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                        {info.experience.projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg"
                            >
                                <h4 className="text-xl text-transparent bg-black bg-clip-text font-medium mb-2">{project.name}</h4>
                                <p className="text-sm text-transparent bg-black bg-clip-text">{project.description}</p>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-black">Estudios</h3>
                    <div className="space-y-4">
                        {info.experience.education.map((edu, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg">
                                <h4 className="text-xl text-transparent bg-black bg-clip-text font-medium">{edu.title}</h4>
                                <p className="text-sm text-transparent bg-black bg-clip-text">{edu.institution}</p>
                                <p className="text-sm text-transparent bg-black bg-clip-text">{edu.duration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};