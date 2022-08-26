import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type TControlledInput = TextFieldProps & {
  name: string;
};

export default function ControlledInput({
  name,
  ...props
}: TControlledInput): JSX.Element {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          value={value || ''}
          fullWidth={true}
          inputRef={ref}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
          {...props}
        />
      )}
    />
  );
}
