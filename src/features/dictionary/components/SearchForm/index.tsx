import { useForm } from "react-hook-form";

import SubmitButton from "@/ui/components/SubmitButton";

type Props = {
  loading: boolean;
  submitSearch: (keyword: string) => void;
};

type SearchForm = {
  keyword: string;
};

export default function SearchForm(props: Props) {
  const { loading, submitSearch } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SearchForm>();

  const onSubmit = async (data: SearchForm) => {
    await submitSearch(data.keyword);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Let&apos;s Search!!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("keyword", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
          <p className="text-red-500 mt-2 text-right text-sm">
            ※アルファベットのみ入力可能です。
          </p>

          <div className="text-center mt-2">
            <SubmitButton text="検索" disabled={!isValid || loading} />
          </div>
        </form>
      </div>
    </div>
  );
}
