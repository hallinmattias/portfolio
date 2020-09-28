import Link from 'next/link'
import { motion, transform } from "framer-motion"

const IndexProject = (props) => (    
  <div className="p-4 lg:h-screen relative flex">
    <p className="inline-block p-10 text-3xl text-left font-thin absolute left-0 top-0 text-primary-dark">{typeof props.nr != 'string' ? "0" + props.nr : props.nr}.</p>

    <div /*href={props.wip ? '#': `${encodeURIComponent(props.src)}`}*/>
      <a className="m-auto">
        <motion.img 
        className="h-80" 
        src={`${encodeURIComponent("img/"+ props.src +"-index.png")}`} 
        alt={props.imgAlt}
        whileHover={{ 
          scale: 1.1,
          y: -30,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          ease: "easeOut",
          duration: 0.2
        }}
        />
      </a>
    </div>
    
    <div className="inline-block text-left font-thin absolute left-0 p-10 bottom-0 text-primary-dark" >
      <p className="text-xl font-normal">{props.year}</p>
      {/*<p className="text-2xl font-normal">{props.location}</p>*/}
      <p className="text-2xl font-medium">{props.name}</p>
    </div>
    {link(props)}
  </div>    
)

function link(props) {
  if (!props.wip){
    return(
      <div /*href={`${encodeURIComponent(props.src)}`}*/>
        <a className="inline-block absolute bottom-0 right-0 m-10 text-primary-dark hover:text-primary h-12 w-24">
          <svg 
            width="60" 
            height="48" 
            viewBox="0 0 60 48" 
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current m-auto"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M57.4304 23.35L51.54 17.4596L52.4593 16.5404L59.9189 24L52.4593 31.4596L51.54 30.5404L57.4305 24.65L0 24.65V23.35L57.4304 23.35Z"
              
            />
          </svg>
        </a>
      </div>
    )
  }
}

export default IndexProject;
