import { useForm } from "react-hook-form";

import SubmitButton from "@/ui/components/SubmitButton";
import Input from "@/ui/components/Input/input";

type SearchProps = {
  loading: boolean;
  submitSearch: (keyword: string) => void;
};

type SearchFormType = {
  keyword: string;
};

export const SearchForm = (props: SearchProps) => {
  const { loading, submitSearch } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SearchFormType>();

  const onSubmit = async (data: SearchFormType) => {
    await submitSearch(data.keyword);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Let&apos;s Search!!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="keyword"
            register={register}
            required={true}
          />

          <div className="text-center mt-2">
            <SubmitButton text="検索" disabled={!isValid || loading} />
          </div>
        </form>
      </div>
    </div>
  );
};
