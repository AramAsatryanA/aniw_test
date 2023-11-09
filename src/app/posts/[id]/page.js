import PostItemPageContent from "@/components/pages/PostItemPage/PostItemPageContent";

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};
export default function PostItemPage({ params }) {
  const { id } = params;

  return <PostItemPageContent postId={id} />;
}
