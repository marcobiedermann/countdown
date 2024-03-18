import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const formDataSchema = z.object({
  language: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

function SettingsPage() {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      language: i18n.language,
    },
  });

  function onSubmit(data: FormData) {
    const { language } = data;

    i18n.changeLanguage(language);
  }

  return (
    <div>
      <h1>{t("settings")}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__field">
          <label htmlFor="language" className="form__label">
            {t("language")}
          </label>
          <select
            id="language"
            {...register("language")}
            className="form__input"
          >
            <option value="de">{t("german")}</option>
            <option value="en">{t("english")}</option>
          </select>
        </div>
        <button type="submit" className="button button--primary button--pill">
          {t("save")}
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
