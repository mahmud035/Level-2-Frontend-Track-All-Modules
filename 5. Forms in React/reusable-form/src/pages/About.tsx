import { FieldValues, useForm } from 'react-hook-form';
import { Form, FormSection, FormSubmit } from '../components/Form';

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="py-2 text-center">Reusable Form</h1>

      {/* Reusable Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input type="text" id="name" {...register('name')} />

            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </div>
  );
};

export default About;
