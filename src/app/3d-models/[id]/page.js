import ModelItemPageContent from "@/components/pages/ModelItemPage/ModelItemPageContent";

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};
export default function ModelItemPage({ params }) {
  const { id } = params;

  return <ModelItemPageContent modelId={id} />;
}
