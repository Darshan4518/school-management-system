import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { MoreHorizontal, Plus, Search, Mail, Send } from "lucide-react";

const messages = [
  {
    id: 1,
    subject: "Regarding upcoming exam",
    from: "John Doe",
    to: "Mary Smith",
    date: "2023-06-15",
    status: "Read",
  },
  {
    id: 2,
    subject: "Parent-Teacher meeting schedule",
    from: "Admin Office",
    to: "All Parents",
    date: "2023-06-20",
    status: "Unread",
  },
  {
    id: 3,
    subject: "Field trip permission",
    from: "Jane Wilson",
    to: "Class 10 Parents",
    date: "2023-07-05",
    status: "Read",
  },
  {
    id: 4,
    subject: "New classroom assignment",
    from: "Principal Brown",
    to: "All Teachers",
    date: "2023-08-01",
    status: "Unread",
  },
  {
    id: 5,
    subject: "Sports day volunteers needed",
    from: "PE Department",
    to: "All Staff",
    date: "2023-08-15",
    status: "Read",
  },
];

export default function Messages() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      <Tabs defaultValue="inbox" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox">
          <Card>
            <CardHeader>
              <CardTitle>Inbox</CardTitle>
              <CardDescription>Manage your received messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search messages..." className="w-64" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Compose
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Compose New Message</DialogTitle>
                      <DialogDescription>
                        Write your message and click send when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="to" className="text-right">
                          To
                        </Label>
                        <Input id="to" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject" className="text-right">
                          Subject
                        </Label>
                        <Input id="subject" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                          Message
                        </Label>
                        <Textarea id="message" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell>{message.subject}</TableCell>
                      <TableCell>{message.from}</TableCell>
                      <TableCell>{message.date}</TableCell>
                      <TableCell>{message.status}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Message</DropdownMenuItem>
                            <DropdownMenuItem>Reply</DropdownMenuItem>
                            <DropdownMenuItem>Forward</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete Message
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent">
          <Card>
            <CardHeader>
              <CardTitle>Sent Messages</CardTitle>
              <CardDescription>View your sent messages</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar structure to Inbox, but with sent messages */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle>Drafts</CardTitle>
              <CardDescription>Manage your draft messages</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar structure to Inbox, but with draft messages */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
