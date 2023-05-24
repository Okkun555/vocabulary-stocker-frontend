import { CirclesWithBar } from "react-loader-spinner";
import { SearchForm } from "@/features/dictionary/components/search-form";
import VocabularyCard from "@/features/dictionary/components/VocabularyCard";
import { useSearchWord } from "@/features/dictionary/hooks/useSearchWord";
import Layout from "@/ui/components/Layout/Layout";

export default function Search() {
  const { vocabulary, loading, onSubmitSearch } = useSearchWord();

  return (
    <Layout>
      <SearchForm loading={loading} submitSearch={onSubmitSearch} />
      {loading ? (
        <div className="flex justify-center">
          <CirclesWithBar height={100} width="100" color="#4fa94d" />
        </div>
      ) : vocabulary ? (
        <div className="mt-4">
          <VocabularyCard vocabularyDetail={vocabulary} />
        </div>
      ) : (
        <div className="text-center">検索結果はありません。</div>
      )}
    </Layout>
  );
}
