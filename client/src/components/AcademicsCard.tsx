import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface AcademicCardProps {
  title: string;
  href: string;
}

export function AcademicCard({ title, href }: AcademicCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link to={href}>View</Link>
        </Button>
        <Button
          asChild
          className="flex-1 bg-[#F7B614] text-black hover:bg-[#e5a913]"
        >
          <Link to={`${href}/add`}>Add New</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
