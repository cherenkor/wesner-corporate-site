import ControlledInput from '@components/shared/controlled-input';
import { Button, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

interface IProps {
  onSubmit(values: FieldValues): void;
}

export default function ContactUsForm({ onSubmit }: IProps): JSX.Element {
  const methods = useForm();
  const { handleSubmit } = methods;
  const t = useTranslations();

  return (
    <FormProvider {...methods}>
      <Stack component="form" mb={{ xs: 2, lg: 3 }} gap={4}>
        <ControlledInput
          name="name"
          variant="filled"
          label={t('contactUsPage.nameLabel')}
        />
        <ControlledInput
          name="email"
          variant="filled"
          label={t('contactUsPage.emailLabel')}
        />
        <ControlledInput
          name="company"
          variant="filled"
          label={t('contactUsPage.companyLabel')}
        />
        <ControlledInput
          name="message"
          variant="filled"
          multiline
          label={t('contactUsPage.textareaLabel')}
          minRows={4}
          maxRows={4}
        />
      </Stack>
      <Button type="submit" fullWidth={true} onClick={handleSubmit(onSubmit)}>
        {t('contactUs.button')}
      </Button>
    </FormProvider>
  );
}
