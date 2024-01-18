import { useForm } from 'react-hook-form';

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block" htmlFor="name">
          Name
        </label>
        <input type="text" id="name" {...register('name')} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
