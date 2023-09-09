import { Link } from './Core'
const Header = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Taylor Zhang</h1>
        <ol className="hidden lg:flex space-x-4">
          <li>
            <Link label="About" target="#about" />
          </li>
          <li>
            <Link label="Projects" target="#projects" />
          </li>
          <li>
            <Link label="Contact" target="#contact" />
          </li>
        </ol>
        <ol className="lg:hidden flex space-x-2">
          <li>
            <Link label="About" target="#about" />
          </li>
          <li>
            <Link label="Projects" target="#projects" />
          </li>
          <li>
            <Link label="Contact" target="#contact" />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Header