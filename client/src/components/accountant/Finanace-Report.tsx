import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Download } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 50000, expenses: 30000 },
  { month: "Feb", revenue: 55000, expenses: 32000 },
  { month: "Mar", revenue: 60000, expenses: 34000 },
  { month: "Apr", revenue: 58000, expenses: 31000 },
  { month: "May", revenue: 62000, expenses: 35000 },
  { month: "Jun", revenue: 65000, expenses: 36000 },
];

const balanceSheetData = [
  { category: "Assets", value: 500000 },
  { category: "Liabilities", value: 200000 },
  { category: "Equity", value: 300000 },
];

export default function FinancialReports() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Financial Reports</h1>

      <div className="flex justify-between items-center">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="income">Income Statement</SelectItem>
            <SelectItem value="balance">Balance Sheet</SelectItem>
            <SelectItem value="cashflow">Cash Flow Statement</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income Statement</CardTitle>
          <CardDescription>Revenue and expenses over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Balance Sheet</CardTitle>
          <CardDescription>Assets, liabilities, and equity</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={balanceSheetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Ratios</CardTitle>
          <CardDescription>Key financial health indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Current Ratio</p>
              <p className="text-2xl font-bold">1.5</p>
              <p className="text-xs text-muted-foreground">Healthy liquidity</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Debt-to-Equity Ratio</p>
              <p className="text-2xl font-bold">0.7</p>
              <p className="text-xs text-muted-foreground">Good leverage</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Return on Assets (ROA)</p>
              <p className="text-2xl font-bold">8.5%</p>
              <p className="text-xs text-muted-foreground">
                Efficient asset utilization
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Profit Margin</p>
              <p className="text-2xl font-bold">15%</p>
              <p className="text-xs text-muted-foreground">
                Healthy profitability
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
