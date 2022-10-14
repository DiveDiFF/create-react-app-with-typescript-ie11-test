import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TextFieldFormProps = {
  type?: 'active' | 'readonly' | 'disabled';
  maxLength?: number;
  defaultValue?: string;
};

export default function TextFieldForm({
  type = 'active',
  maxLength = 999,
  defaultValue,
}: TextFieldFormProps) {
  const formMethods = useForm<{ text: string }>({
    mode: 'onChange',
    defaultValues: { text: defaultValue || '' },
  });

  const onSubmit: SubmitHandler<{ text: string }> = useCallback((formData) => {
    console.log('[SUBMIT] : ', formData);
  }, []);

  const watchTextValue = formMethods.watch('text', '').length;

  console.log(formMethods.formState.errors, formMethods.formState.isValid);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '93px' }}>
          <Controller
            name="text"
            control={formMethods.control}
            rules={{ maxLength }}
            render={({ field }) => (
              <Box sx={{ width: '100%', position: 'relative' }}>
                <TextField
                  {...field}
                  fullWidth
                  rows={3}
                  multiline
                  placeholder="내용이 있을수도 있습니다."
                  sx={{ height: '100%' }}
                  error={!!formMethods.formState.errors.text}
                  disabled={type === 'disabled'}
                  inputProps={{ readOnly: type === 'readonly' }}
                />
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ position: 'absolute', bottom: 0, right: '8px' }}
                  color={
                    formMethods.formState.errors.text?.type === 'maxLength' ? 'error' : 'grey.500'
                  }
                >
                  {watchTextValue}
                </Typography>
              </Box>
            )}
          />
          {formMethods.formState.isDirty && (
            <Button
              type="submit"
              variant="outlined"
              sx={{ height: '100%', width: '100px' }}
              disabled={formMethods.formState.errors.text?.type === 'maxLength'}
            >
              Save
            </Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );
}
