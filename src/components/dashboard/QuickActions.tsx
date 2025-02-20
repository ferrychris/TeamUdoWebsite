import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Calendar,
  MessageSquare,
  BookOpen,
  Download,
  Users,
} from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

interface QuickActionsProps {
  actions?: QuickAction[];
}

const QuickActions = ({
  actions = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Book Mentorship",
      description: "Schedule your next mentoring session",
      action: "Book Now",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Workshops",
      description: "Join upcoming live training sessions",
      action: "View Schedule",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Library",
      description: "Access training materials and guides",
      action: "Browse",
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Downloads",
      description: "Get templates and tools",
      action: "Download",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Network",
      description: "Connect with other learners",
      action: "Connect",
    },
  ],
}: QuickActionsProps) => {
  return (
    <Card className="w-[320px] bg-white h-[580px] overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {action.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
              <div className="mt-3 pl-12">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                >
                  {action.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
