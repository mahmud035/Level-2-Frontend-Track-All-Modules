import useGetServices, { TService } from '@/api/admin/service/service.hook';
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
import { Trash2 } from 'lucide-react';

const ServiceList = () => {
  const { isLoading, isError, services, error } = useGetServices();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error!.message}</span>;
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
            {services.map((service: TService) => (
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
