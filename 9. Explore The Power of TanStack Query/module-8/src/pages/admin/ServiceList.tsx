import { getServices } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.data.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ServiceList;
