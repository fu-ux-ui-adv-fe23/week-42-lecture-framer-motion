import { motion } from 'framer-motion'; 

function BasicAnimations() {
  return (
    <section className="section">
        <motion.figure 
            className="ball"
            initial={{
                backgroundColor: '#0000ff',
                y: '-20rem'
            }}
            animate={{
                backgroundColor: '#8a2be2',
                y: 0
            }}
            transition={{
                duration : 1,
                ease: 'backInOut',
                repeat: Infinity,
                repeatType: 'mirror' 
            }}
        ></motion.figure>
        <motion.figure 
            className="ball"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                times: [0, 0.1, 0.8, 0.9, 1]
            }}
        ></motion.figure>
    </section>
  )
}

export default BasicAnimations
