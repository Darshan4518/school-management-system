import { Link } from "react-router";
import { Card, CardContent } from "./ui/card";

interface StatusCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export function StatusCard({ title, icon, href }: StatusCardProps) {
  return (
    <Link to={href}>
      <Card className="hover:bg-accent/5 transition-colors">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="text-[#F7B614] mb-4">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
