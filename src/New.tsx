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
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" {...register("title")} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
            })}
          />
          {errors.date && <span>{errors.date.message}</span>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewPage;
