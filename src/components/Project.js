import React from 'react';

const Project = () => {
    const projectData = [
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/a1.jpg"

        },
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/an1.jpg"

        },
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/e1.jpg"

        },
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/e2.jpg"

        },
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/e3.jpg"

        },
        {
            subTitle: "The Subtitle",
            title: "Lorem Ipsum",
            description: "Mollit non est enim labore irure ex ad nulla tempor quis incididunt elit nisi. Commodo fugiat voluptate elit aute veniam do cillum dolor labore ad ut nulla ipsum. Et elit elit esse fugiat eiusmod cupidatat in ipsum culpa in laborum.",
            projectLink: "#",
            imageLink: "images/u.jpg"

        }
    ]
    return (
        <section class="text-gray-600 body-font animate__animated animate__fadeInDown transition">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Project</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Proident amet culpa cupidatat velit reprehenderit sint.</p>
    </div>
    <div class="flex flex-wrap -m-4 transition">
        {projectData.map(data => (
                  <div class="lg:w-1/3 sm:w-1/2 p-4 	">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={data.imageLink}/>
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-md title-font font-medium text-indigo-500 mb-1">{data.subTitle}</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{data.title}</h1>
                      <p class="text-md leading-relaxed">{data.description}</p>
                      <a href={data.projectLink} class="mt-5 inline-block border border-red-600 text-red-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300">See Project</a>
                    </div>
                  </div>
                </div>
        ))}
    </div>
  </div>
</section>
    )
}

export default Project;