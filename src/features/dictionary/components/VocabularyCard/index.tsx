import SubmitButton from "@/ui/components/SubmitButton";
import { Vocabulary } from "../../types";

type Props = {
  vocabularyDetail: Vocabulary;
};

export default function VocabularyCard(props: Props) {
  const { vocabularyDetail } = props;

  return (
    <div className="mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {vocabularyDetail.word}
        </h5>
      </a>
      <div className="mb-3 font-normal text-gray-700">
        <ol>
          {vocabularyDetail.means.map((mean, index) => (
            <li key={index}>
              <span>
                {index + 1}: {mean}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-4">
        <SubmitButton text="リストに追加" />
      </div>
    </div>
  );
}
