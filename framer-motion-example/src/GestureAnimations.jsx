import { motion } from 'framer-motion'; 

function GestureAnimations() {
  return (
    <section className="section">
        <motion.button 
            className="button"
            whileHover={{
                scale: 1.1,
                boxShadow: '5px 5px 15px #000',
                transition: { duration: 0.5}
            }}
            whileTap={{
                scale: 0.9,
                boxShadow: '5px 5px 5px #000',
                rotate: -10
            }}
        >Klicka mig!</motion.button>

        <motion.input 
            type="text" 
            placeholder="Username" 
            whileFocus={{
                scale: 1.2
            }}
        />
        <motion.input 
            type="text" 
            placeholder="Password" 
            whileFocus={{
                scale: 1.2,
                borderColor: '#ff0000',
                padding: '.5rem'
            }}
        />
    </section>
  )
}

export default GestureAnimations
