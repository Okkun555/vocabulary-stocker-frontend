import axios from "axios";
import { useState } from "react";
import { Vocabulary } from "../types";

export const useSearchWord = () => {
  const [loading, setLoading] = useState(false);
  const [vocabulary, setVocabulary] = useState<Vocabulary | undefined>(
    undefined
  );

  const onSubmitSearch = async (word: string) => {
    setLoading(true);
    try {
      // Fetch関数でjsonの型チェックするのもありかも...
      const response = await axios.get(
        `http://localhost:80/api/dictionary/word-search?word=${word}`
      );

      // TODO: ここでレスポンスの型チェックを実施したい
      setVocabulary({
        ...vocabulary,
        word: response.data.word,
        means: response.data.means,
      });
      // return response.data;
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { vocabulary, setVocabulary, loading, onSubmitSearch };
};
