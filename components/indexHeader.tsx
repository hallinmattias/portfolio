import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"


const IndexHeader = () => (
    <div className="w-full lg:h-screen flex-none lg:max-w-sm overscroll-contain flex flex-col justify-between p-10 sm:content-center">
        <motion.h1 
            initial={{
                opacity: 0,
                translateX:-100
            }}
            animate={{ 
                opacity: 1,
                translateX: 0
            }}
            transition={{ 
                duration: 0.5 
            }} 
            className="text-3xl text-left font-medium text-primary-dark"
        >
            Mattias Hallin
        </motion.h1>
        <motion.p
            initial={{
                opacity: 0,
                translateX: -100
            }}
            animate={{ 
                opacity: 1,
                translateX: 0
            }}
            transition={{ 
                delay: 0.1,
                duration: 0.5 
            }}
            className="text-xl text-right text-primary"
        >            
            I’m a <span className="font-semibold text-primary-dark">UX Designer</span><br/>
            and <span className="font-semibold text-primary-dark">Front End Developer</span><br/>
            specialised in <span className="font-semibold text-primary-dark">User Interfaces</span><br/>
            and <span className="font-semibold text-primary-dark">UX Research</span><br/>
            <Link href="/about">
                <a className="text-lg text-primary-dark hover:text-primary">Learn More..</a>
            </Link>
        </motion.p>
        <motion.div 
            initial={{
                opacity: 0,
                translateX: -50
            }}
            animate={{ 
                opacity: 1,
                translateX: 0
            }}
            transition={{ 
                delay: 0.2,
                duration: 0.5 
            }}
            className="space-x-6 self-center text-primary-dark"
        >
            <a href="">
                <FontAwesomeIcon className="hover:text-primary-" size="2x" icon={['fab', 'instagram']} />
            </a>
            <a href="https://www.linkedin.com/in/mattias-hallin-594304177/">
                <FontAwesomeIcon className="hover:text-primary" size="2x" icon={['fab', 'linkedin-in']} />  
            </a>
            <a href="">
                <FontAwesomeIcon className="hover:text-primary" size="2x" icon={['fab', 'github']} />
            </a>
        </motion.div>
    </div>
)
export default IndexHeader;
