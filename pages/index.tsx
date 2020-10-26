import PageHead from "../components/PageHead";
import IndexHeader from "../components/IndexHeader";
import IndexProjects from "../components/IndexProjects";

export default function IndexPage() {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row overscroll-none">
      <PageHead />
      <IndexHeader />
      <IndexProjects />
    </div>
  );
}
