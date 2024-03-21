import 'react-datepicker/dist/react-datepicker.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { formatISO } from 'date-fns';
import { de } from 'date-fns/locale';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button, Form, FormField, FormLabel } from '../components';

registerLocale('de', de);

const formDataSchema = z.object({
  date: z.date(),
  title: z.string().optional(),
});

type FormData = z.infer<typeof formDataSchema>;

function NewPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
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
      date: formatISO(date, { representation: 'date' }),
      ...(title && { title }),
    });

    navigate(`/?${searchParams.toString()}`);
  }

  setDefaultLocale(i18n.language);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel htmlFor="title">{t('title')}</FormLabel>
        <input type="text" id="title" className="form__input" {...register('title')} />
        {errors.title && <span>{errors.title.message}</span>}
      </FormField>
      <FormField>
        <FormLabel htmlFor="date">{t('date')}</FormLabel>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              className="form__input"
              icon={<FiCalendar />}
              locale={i18n.language}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              showIcon
              toggleCalendarOnIconClick
            />
          )}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </FormField>
      <Button type="submit">{t('create')}</Button>
    </Form>
  );
}

export default NewPage;
