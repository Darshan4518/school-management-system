import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Eye, Pencil, Send, Trash } from "lucide-react";

const messages = [
  {
    id: 1,
    from: "Alice Johnson",
    subject: "Regarding homework",
    date: "2023-07-10",
    status: "Unread",
  },
  {
    id: 2,
    from: "Bob Smith",
    subject: "Absence notification",
    date: "2023-07-09",
    status: "Read",
  },
  {
    id: 3,
    from: "Charlie Brown",
    subject: "Extra credit question",
    date: "2023-07-08",
    status: "Replied",
  },
  {
    id: 4,
    from: "Diana Ross",
    subject: "Parent-teacher meeting",
    date: "2023-07-07",
    status: "Unread",
  },
];

export default function TeacherMessages() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>

      <Card>
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <CardDescription>Manage your messages</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>From</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.from}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>{message.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compose Message</CardTitle>
          <CardDescription>Send a new message</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="to" className="text-sm font-medium">
                To
              </label>
              <Input id="to" placeholder="Enter recipient" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Enter subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
