import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { PlayCircle, BookOpen } from "lucide-react";

interface CourseCardProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  progress?: number;
  duration?: string;
  lessons?: number;
}

const CourseCard = ({
  title = "Introduction to Digital Marketing",
  description = "Learn the fundamentals of digital marketing and start your journey to becoming an online marketing expert.",
  thumbnail = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  progress = 35,
  duration = "2h 30m",
  lessons = 12,
}: CourseCardProps) => {
  return (
    <Card className="w-[350px] h-[400px] bg-white overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue Learning</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
