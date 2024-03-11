import { zodResolver } from "@hookform/resolvers/zod";
import { formatISO } from "date-fns";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formDataSchema = z.object({
  date: z.date(),
  title: z.string().optional(),
});

type FormData = z.infer<typeof formDataSchema>;

function NewPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  function onSubmit(data: FormData) {
    const { date, title } = data;
    const searchParams = new URLSearchParams({
      date: formatISO(date, { representation: "date" }),
      ...(title && { title }),
    });

    navigate(`/?${searchParams.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__field">
        <label htmlFor="title" className="form__label">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form__input"
          {...register("title")}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div className="form__field">
        <label htmlFor="date" className="form__label">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="form__input"
          {...register("date", {
            valueAsDate: true,
          })}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </div>
      <button type="submit" className="button button--primary button--pill">
        Create
      </button>
    </form>
  );
}

export default NewPage;
