import { zodResolver } from "@hookform/resolvers/zod";
import { formatISO } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formDataSchema = z.object({
  date: z.date(),
  title: z.string().optional(),
});

type FormData = z.infer<typeof formDataSchema>;

function NewPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
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
          {t("title")}
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
          {t("date")}
        </label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              className="form__input"
              icon={<FiCalendar />}
              onChange={(date) => field.onChange(date)}
              placeholderText="Select date"
              selected={field.value}
              showIcon
              toggleCalendarOnIconClick
            />
          )}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </div>
      <button type="submit" className="button button--primary button--pill">
        {t("create")}
      </button>
    </form>
  );
}

export default NewPage;
