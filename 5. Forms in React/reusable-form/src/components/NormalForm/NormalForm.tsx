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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-5xl p-5 mx-auto border border-red-500"
    >
      <div className="grid grid-cols-2 gap-5 border border-blue-500 ">
        <div className="w-full">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded"
            {...register('name')}
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded"
            {...register('email')}
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded"
            {...register('password')}
          />
        </div>
      </div>

      {/* <Button>Submit</Button> */}
    </form>
  );
};

export default NormalForm;
