import { getServices } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  // console.log(data);
  // console.log(error);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {/* NOTE: When using axios */}

      {data?.data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}

      {/* NOTE: When using fetch */}

      {/* {data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}
    </div>
  );
};

export default ServiceList;
