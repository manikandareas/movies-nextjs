import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Play } from "lucide-react";

type Props = {};

const JumbotronLoading = (props: Props) => {
  return (
    <div className="w-full h-[40rem] md:h-[50rem]  flex items-center justify-start md:px-40 px-4 ">
      <div className="w-full flex flex-col gap-8">
        <Skeleton className="h-[1.875rem] md:h-[3rem] w-40" />
        <div className="flex gap-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-6 h-2 rounded-full" />
          <Skeleton className="w-6 h-2 rounded-full" />
        </div>
        <Skeleton className="w-42 h-20" />
        <Skeleton className="px-4 py-2  w-8 flex items-center rounded-sm  gap-1.5">
          <Play fill="white" size={12} />
          <Skeleton className="w-10 h-[12px] rounded-md" />
        </Skeleton>
      </div>
    </div>
  );
};

export default JumbotronLoading;
