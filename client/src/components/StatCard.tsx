import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StatCardProps {
  title: string;
  icon: React.ReactNode;
  total?: string;
  href: string;
}

export function StatCard({ title, icon, total, href }: StatCardProps) {
  return (
    <Link to={href}>
      <Card className="hover:bg-accent/5 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div className="text-[#F7B614]">{icon}</div>
            {total && (
              <div className="text-sm text-muted-foreground">
                Total: {total}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
