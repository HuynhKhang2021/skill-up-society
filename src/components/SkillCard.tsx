
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link,
}) => {
  return (
    <Card className="skill-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className={`skill-icon ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Link to={link}>
          <Button>Start Learning</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
