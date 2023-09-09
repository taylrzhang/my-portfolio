import Image from 'next/image'
// import Project from '../components/Project'

const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="content-container">
        <h1>Projects</h1>
        <p>General description</p>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-600 opacity-100 dark:opacity-50" />

        {/* <Project
          title="Project 1"
          about="Project 1 description"
          imagesrc="/assets/chronos.png"
        />

        <Image
          priority
          src="/assets/divider.svg"
          height={5}
          width={250}
          alt="divider"
        />

        <Project
          title="Project 2"
          about="Project 2 description"
          imagesrc="/assets/chronos.png"
        /> */}
      </div>
    </div>
  )
}

export default Projects