"use client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function PostTitle({ title, date }: { date: string; title: string }) {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="cursor-pointer">
      <h3>{title}</h3>
      <div className="flex gap-3 items-center">
        <Avatar className="not-prose size-8">
          <AvatarImage src="/_static/profile.jpg" alt="profile" />
          <AvatarFallback>DD</AvatarFallback>
        </Avatar>
        <div className="not-prose">
          <p className="font-medium text-sm">Darshan Dhakal</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
    </div>
  );
}
