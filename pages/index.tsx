
import PageHead from '../components/pageHead'

export default function IndexPage() {
  return (
    <div>
      <PageHead />
      
      <div className="w-full bg-grey-300 border-8 border-black">
        <h1>Hello World!</h1>
      </div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Mattias Hallin
        </h1>
      </div>
    </div>
  )
}
