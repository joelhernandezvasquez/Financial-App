// const shimmer =
//   'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTable() {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      {/* Table header */}
      <div className="bg-muted/50 p-4">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-8 w-[180px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[100px]" />
        </div>
      </div>

      {/* Table content */}
      <div className="divide-y">
        {/* Column headers */}
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 bg-muted/30">
          <Skeleton className="h-4 col-span-1" />
          <Skeleton className="h-4 col-span-1" />
          <Skeleton className="h-4 col-span-1 hidden md:block" />
          <Skeleton className="h-4 col-span-1" />
          <Skeleton className="h-4 col-span-1" />
        </div>

        {/* Table rows */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4">
            <Skeleton className="h-4 col-span-1" />
            <Skeleton className="h-4 col-span-1" />
            <Skeleton className="h-4 col-span-1 hidden md:block" />
            <Skeleton className="h-4 col-span-1" />
            <Skeleton className="h-4 w-[80px] col-span-1" />
          </div>
        ))}
      </div>

      {/* Table footer/pagination */}
      <div className="p-4 flex items-center justify-between border-t">
        <Skeleton className="h-4 w-[100px]" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
    </div>
  )
}
