import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addTodo } from '@/redux/features/todo/todoSlice';
import { useAppDispatch } from '@/redux/hooks';
import { FormEvent, useState } from 'react';

const AddTodoModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useAppDispatch();

  const reset = () => {
    setTitle('');
    setDescription('');
    setPriority('');
  };

  // const shouldModalClose =
  //   title.length > 0 && description.length > 0 && priority.length > 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title === '' || description === '' || priority === '') {
      return alert('Please Fill All The Fields.');
    }
    const taskDetails = {
      _id: crypto.randomUUID(),
      status: 'pending',
      title: title,
      description: description,
      priority: priority,
    };
    dispatch(addTodo(taskDetails));
    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-xl font-semibold bg-primary-gradient">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  onBlur={(e) => setTitle(e.target.value)}
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label className="text-right">Priority</Label>
                <Select onValueChange={(e) => setPriority(e)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select Task Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end mt-2">
                <DialogClose asChild>
                  <Button type="submit">Add New Task</Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
