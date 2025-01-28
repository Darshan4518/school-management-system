import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  linkHref: string;
  linkText: string;
}

export function DashboardCard({
  title,
  value,
  description,
  icon,
  linkHref,
  linkText,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <Button
          asChild
          className="mt-4 w-full bg-[#F7B614] text-black hover:bg-[#e5a913]"
        >
          <Link to={linkHref}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
