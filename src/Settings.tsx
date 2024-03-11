import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formDataSchema = z.object({
  language: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

function SettingsPage() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  function onSubmit(data: FormData) {
    console.log({ data });
  }

  return (
    <div>
      <h1>Settings</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__field">
          <label htmlFor="language" className="form__label">
            Language
          </label>
          <select
            id="language"
            {...register("language")}
            className="form__input"
          >
            <option value="de">German</option>
            <option value="en">English</option>
          </select>
        </div>
        <button type="submit" className="button button--primary button--pill">
          Save
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
