// import { AiOutlineCode, AiOutlineCodeSandbox } from 'react-icons/ai'
// import { MdOutlineDesignServices } from 'react-icons/md'

const About = () => {
  return (
    <div id="about" className="section">
      <div className="flex flex-col mx-auto max-w-2xl py-32 leading-8 sm:py-48 lg:py-56">
        <div>
          <h2 className="mt-6 text-2xl">About Me</h2>
          <p>
            Hello, my name is Taylor and I am a dedicated Software Engineer with
            a proven track record in designing and building robust, scalable
            applications. With a rich background in both development and UI/UX
            design, I bring a unique blend of technical expertise and design
            sensibility to my work.
          </p>
        </div>
        <div className="flex">
          <div className="card">
            {/* <AiOutlineCode size="30px" stroke-width="0" /> */}
            <h3>Frontend Skills</h3>
            <ul className="list-none">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
            </ul>
          </div>
          <div className="card">
            {/* <AiOutlineCodeSandbox size="30px" /> */}
            <h3>Backend Skills</h3>
            <ul className="list-none">
              <li>Python</li>
              <li>Java</li>
              <li>SQL / NoSQL</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="card">
            {/* <MdOutlineDesignServices size="30px" stroke-width="0" /> */}
            <h3>Design Skills</h3>
            <ul className="list-none">
              <li>Adobe CC</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About