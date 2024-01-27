import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/v1/services')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.data));
  // }, []);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/v1/services');
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
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
