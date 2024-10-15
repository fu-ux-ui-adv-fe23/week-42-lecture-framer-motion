import './planetsNav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PlanetsNav({ setTitle, planets }) {
  return (
    <nav className="planets-nav">
      <ul className="planets-list">
        {
          planets.map((planet, index) => {
            return <Link key={ index } to={ '/planet/' + planet.id }>
                    <motion.li
                      className={ 'planet ' + planet.name.toLowerCase() }
                      onMouseEnter={ () => setTitle(planet.name) }
                      onMouseLeave={ () => setTitle('Solaris Space Center') }
                      key={ index }
                      initial={{
                        opacity: 0,
                        x: '-4rem',
                        scale: 1
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: index * 0.3
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          duration: 0.2,
                          ease: 'backInOut'
                        }
                      }}
                    ></motion.li>
                  </Link>
          })
        }
      </ul>
    </nav>
  )
}

export default PlanetsNav
