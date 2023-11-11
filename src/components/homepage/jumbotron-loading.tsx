import { Skeleton } from "../ui/skeleton";

const JumbotronLoading = () => {
  return (
    <div className="w-screen h-[40rem] md:h-[50rem]  flex items-center justify-start md:px-40 px-4 ">
      <div className="w-full flex flex-col gap-4">
        <Skeleton className="h-[1.875rem] md:h-[2rem] w-72" />
        <div className="flex gap-4 items-center">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-4 rounded-full" />
          <Skeleton className="w-10 h-4 rounded-full" />
        </div>
        <Skeleton className="h-[1.875rem] md:h-[2rem] w-[22rem]" />
        <Skeleton className="h-[1.875rem] md:h-[2rem] w-[16rem]" />
        <Skeleton className="h-[1.875rem] md:h-[2rem] w-[24rem]" />

        <Skeleton className="w-16 h-8 rounded-sm" />
      </div>
    </div>
  );
};

export default JumbotronLoading;
