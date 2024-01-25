import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1250px] px-5 mx-auto bg-green-500">
      {children}
    </div>
  );
};

export default Container;
