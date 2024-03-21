import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { z } from 'zod';

import { Button, Form, FormField, FormLabel } from '../components';
import { selectLanguage, setLanguage } from '../slices/settings';
import { useAppDispatch } from '../store';

const formDataSchema = z.object({
  language: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

function SettingsPage() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      language,
    },
    resolver: zodResolver(formDataSchema),
  });

  function onSubmit(data: FormData) {
    const { language } = data;

    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <h1>{t('settings')}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormLabel htmlFor="language">{t('language')}</FormLabel>
          <select id="language" {...register('language')} className="form__input">
            <option value="de">{t('german')}</option>
            <option value="en">{t('english')}</option>
          </select>
        </FormField>
        <Button type="submit">{t('save')}</Button>
      </Form>
    </div>
  );
}

export default SettingsPage;
