import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Download } from "lucide-react";

export function InvoiceTable() {
  const invoices = [
    {
      issueDate: "23/02/21",
      docNo: "001",
      status: "Pending",
      vendorName: "Mr. D Malhotra",
      dueDate: "03/20",
      tax: "GST",
      amount: "₹5000",
      dateOfPayment: "30/12/2021",
    },
    // Add more invoices as needed
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter Bills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Bills</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input placeholder="Search" className="pl-8 w-[300px]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
            + New
          </Button>
          <Button variant="outline">
            Export <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Issue Date</TableHead>
              <TableHead>Doc No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vendor Name</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date Of Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.docNo}>
                <TableCell>{invoice.issueDate}</TableCell>
                <TableCell>{invoice.docNo}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.vendorName}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>{invoice.tax}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.dateOfPayment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
