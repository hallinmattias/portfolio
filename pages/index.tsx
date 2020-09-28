import PageHead from '../components/pageHead'
import IndexHeader from '../components/indexHeader'
import IndexProjects from '../components/indexProjects'

export default function IndexPage() {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden overscroll-none">
      <PageHead />
      <IndexHeader />
      <IndexProjects/>
    </div>
  )
}
