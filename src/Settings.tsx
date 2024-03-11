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

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="language">Language:</label>
        <select id="language" {...register("language")}>
          <option value="de">German</option>
          <option value="en">English</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SettingsPage;
