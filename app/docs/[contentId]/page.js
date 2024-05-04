import ContentDisplay from "@/components/ContentDisplay";

function ContentPage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}

export default ContentPage;
