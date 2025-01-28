import { StatusCard } from "../components/StatusCard";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  MessageSquare,
  ThumbsUp,
  CheckCircle,
  XCircle,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

export default function InquiriesPage() {
  const statuses = [
    {
      title: "Inquiry",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/inquiries/new",
    },
    {
      title: "Interested",
      icon: <ThumbsUp className="h-8 w-8" />,
      href: "/inquiries/interested",
    },
    {
      title: "Confirmation",
      icon: <CheckCircle className="h-8 w-8" />,
      href: "/inquiries/confirmed",
    },
    {
      title: "Rejected",
      icon: <XCircle className="h-8 w-8" />,
      href: "/inquiries/rejected",
    },
    {
      title: "Shortlisted",
      icon: <ClipboardList className="h-8 w-8" />,
      href: "/inquiries/shortlisted",
    },
    {
      title: "Admission",
      icon: <GraduationCap className="h-8 w-8" />,
      href: "/inquiries/admission",
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">All user Inquiries</h1>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter By Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Student Name" className="w-[200px]" />
            <Input placeholder="Search By Enquiry" className="w-[200px]" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {statuses.map((status) => (
            <StatusCard
              key={status.title}
              title={status.title}
              icon={status.icon}
              href={status.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
