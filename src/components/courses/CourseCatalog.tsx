import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  duration: string;
  lessons: number;
  category: "marketing" | "digital";
}

interface CourseCatalogProps {
  courses?: Course[];
}

const defaultCourses: Course[] = [
  {
    id: "1",
    title: "Digital Marketing Fundamentals",
    description: "Master the basics of digital marketing and online presence",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    progress: 35,
    duration: "2h 30m",
    lessons: 12,
    category: "marketing",
  },
  {
    id: "2",
    title: "Social Media Strategy",
    description: "Learn to create engaging social media campaigns",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
    progress: 0,
    duration: "3h 15m",
    lessons: 15,
    category: "marketing",
  },
  {
    id: "3",
    title: "Web Development Basics",
    description: "Introduction to HTML, CSS, and JavaScript",
    thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&q=80",
    progress: 0,
    duration: "4h 45m",
    lessons: 20,
    category: "digital",
  },
  {
    id: "4",
    title: "Content Creation Mastery",
    description: "Create compelling content for your audience",
    thumbnail:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=500&q=80",
    progress: 15,
    duration: "2h 45m",
    lessons: 10,
    category: "digital",
  },
];

const CourseCatalog = ({ courses = defaultCourses }: CourseCatalogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "marketing" && course.category === "marketing") ||
      (activeTab === "digital" && course.category === "digital");
    return matchesSearch && matchesTab;
  });

  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold">Course Catalog</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="digital">Digital Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  progress={course.progress}
                  duration={course.duration}
                  lessons={course.lessons}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  progress={course.progress}
                  duration={course.duration}
                  lessons={course.lessons}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  progress={course.progress}
                  duration={course.duration}
                  lessons={course.lessons}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseCatalog;
