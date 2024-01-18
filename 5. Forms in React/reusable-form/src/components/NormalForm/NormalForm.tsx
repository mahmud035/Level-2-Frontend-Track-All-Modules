import { useForm } from 'react-hook-form';
import cn from '../../utils/cn';

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('w-full p-5 mx-auto border border-red-500', {
        'max-w-5xl': double,
        'max-w-md': !double,
      })}
    >
      <div
        className={cn(
          'grid grid-cols-1 gap-5 border border-blue-500 justify-items-center',
          {
            'md:grid-cols-2': double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            {...register('name')}
          />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            {...register('email')}
          />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            {...register('password')}
          />
        </div>
      </div>

      {/* <Button>Submit</Button> */}
    </form>
  );
};

export default NormalForm;
