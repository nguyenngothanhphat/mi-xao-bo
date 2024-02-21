import { ReactNode } from 'react';
import { FormControl, FormErrorMessage, FormLabel, FormControlProps, FormLabelProps } from '@chakra-ui/react';

interface FormFieldProps extends Omit<FormControlProps, 'isInvalid'> {
  label?: string;
  children: ReactNode;
  error?: any;
  name: string;
  labelProps?: FormLabelProps;
}

const FormField = ({ label, children, error, name, labelProps, ...props }: FormFieldProps) => {
    return (
        <FormControl isInvalid={!!error} {...props}>
            {!!label && (
                <FormLabel htmlFor={name} ms="4px" fontSize="sm" fontWeight="normal" {...labelProps}>
                    {label}
                </FormLabel>
            )}
            {children}
            <FormErrorMessage>
                {error?.message}
            </FormErrorMessage>
        </FormControl>
    )
}

export default FormField