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
          <input type="text" id="name" {...register('name')} />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input type="email" id="email" {...register('email')} />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input type="password" id="password" {...register('password')} />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Select
          </label>
          <select>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Textarea
          </label>
          <textarea name="" id="" cols={30} rows={5}></textarea>
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="checkbox" className="block font-medium">
            Checkbox
          </label>
          <input type="checkbox" name="" id="" />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="radio" className="block font-medium">
            Radio
          </label>
          <input type="radio" name="" id="" />
        </div>
      </div>

      {/* <Button>Submit</Button> */}
    </form>
  );
};

export default NormalForm;
