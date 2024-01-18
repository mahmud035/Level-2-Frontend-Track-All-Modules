import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import cn from '../../utils/cn';
import Button from '../ui/Button';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, 'Too short password'),
});

type TSchema = z.infer<typeof schema>;

const NormalForm = () => {
  const { register, handleSubmit } = useForm<TSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: TSchema) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'w-full mt-4 p-5 mx-auto border border-gray-300 shadow-sm rounded-lg',
        {
          'max-w-5xl': double,
          'max-w-md': !double,
        }
      )}
    >
      {/* Basic Input Element Section */}
      <div
        className={cn('grid grid-cols-1 gap-5  justify-items-center', {
          'md:grid-cols-2': double,
        })}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
          />
        </div>

        {/* <div className="w-full max-w-md">
          <label htmlFor="password" className="block font-medium">
            Select
          </label>
          <select>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div> */}

        {/* <div className="w-full max-w-md">
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
        </div> */}

        {/* <div className="w-full max-w-md">
          <label htmlFor="radio" className="block font-medium">
            Radio
          </label>
          <input type="radio" name="" id="" />
        </div> */}
      </div>

      {/* Form Submit Section */}
      <div
        className={cn('grid grid-cols-1 gap-5 justify-items-center my-8', {
          'md:grid-cols-2': double,
        })}
      >
        <div className="flex justify-end w-full max-w-md col-start-1 md:col-start-2">
          <Button className="w-full md:w-fit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
