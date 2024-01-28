import { getServices } from '@/api/admin/service/service.api';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';

const ServiceList = () => {
  const {
    isLoading,
    isError,
    data: services,
    error,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data?.data?.map((service) => {
        return {
          _id: service._id,
          name: service.name,
          description: service.description,
          price: service.price,
        };
      });

      return services;
    },
  });

  // console.log(data);
  // console.log(error);
  // console.log(services);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Container className="p-0 mt-10 border rounded-2xl">
        {/* NOTE: When using axios */}

        {/* {data?.data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}

        {/* NOTE: When using fetch */}

        {/* {data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-black">Name</TableHead>
              <TableHead className="font-semibold text-black">
                Description
              </TableHead>
              <TableHead className="font-semibold text-black">Price</TableHead>
              <TableHead className="font-semibold text-black">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service._id}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>${service.price}</TableCell>
                <TableCell>
                  <Button variant="destructive" className="p-2">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Services</TableCell>
              <TableCell>{services.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
    </>
  );
};

export default ServiceList;
