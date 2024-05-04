import ContentDisplay from "@/components/ContentDisplay";

function SubContentPage({ params }) {
  return <ContentDisplay id={params.subContentId} />;
}

export default SubContentPage;
