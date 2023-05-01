import SubmitButton from "@/ui/components/SubmitButton";
import { useForm } from "react-hook-form";

type SearchForm = {
  keyword: string;
};

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>();

  const onSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Let's Search!!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("keyword", { required: true })}
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />

          <div className="text-center mt-2">
            <SubmitButton text="検索" />
          </div>
        </form>
      </div>
    </div>
  );
}
