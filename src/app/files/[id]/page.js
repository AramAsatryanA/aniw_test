import FileItemPageContent from "@/components/pages/FileItemPage/FileItemPageContent";

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};
export default function FileItemPage({ params }) {
  const { id } = params;

  return <FileItemPageContent fileId={id} />;
}
