import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Trophy, Calendar, Clock, Target } from "lucide-react";

interface Achievement {
  title: string;
  date: string;
}

interface UpcomingSession {
  title: string;
  date: string;
  time: string;
}

interface ProgressOverviewProps {
  totalProgress?: number;
  coursesCompleted?: number;
  totalCourses?: number;
  hoursSpent?: number;
  achievements?: Achievement[];
  upcomingSessions?: UpcomingSession[];
}

const ProgressOverview = ({
  totalProgress = 65,
  coursesCompleted = 8,
  totalCourses = 12,
  hoursSpent = 24,
  achievements = [
    { title: "Digital Marketing Basics", date: "2024-03-15" },
    { title: "Social Media Strategy", date: "2024-03-10" },
  ],
  upcomingSessions = [
    { title: "Advanced SEO Workshop", date: "2024-03-20", time: "14:00" },
    {
      title: "Content Marketing Masterclass",
      date: "2024-03-22",
      time: "15:30",
    },
  ],
}: ProgressOverviewProps) => {
  return (
    <div className="w-full space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Overall Progress */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={totalProgress} className="h-2" />
              <p className="text-2xl font-bold">{totalProgress}%</p>
            </div>
          </CardContent>
        </Card>

        {/* Courses Completed */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Courses Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-500" />
            <p className="text-2xl font-bold">
              {coursesCompleted}/{totalCourses}
            </p>
          </CardContent>
        </Card>

        {/* Hours Spent Learning */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Hours Spent Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-green-500" />
            <p className="text-2xl font-bold">{hoursSpent}h</p>
          </CardContent>
        </Card>

        {/* Latest Achievement */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Latest Achievement
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="font-medium">{achievements[0]?.title}</p>
              <p className="text-sm text-gray-500">{achievements[0]?.date}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent Achievements */}
        <div>
          <h3 className="font-semibold mb-2">Recent Achievements</h3>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>{achievement.title}</span>
                </div>
                <Badge variant="secondary">{achievement.date}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h3 className="font-semibold mb-2">Upcoming Sessions</h3>
          <div className="space-y-2">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>{session.title}</span>
                </div>
                <Badge variant="outline">
                  {session.date} at {session.time}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;
