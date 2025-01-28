import { InvoiceTable } from "./BillingInvoice";
import { PaymentForm } from "./PaymentForm";
import { PricingPlans } from "./Pricing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function BillingPage() {
  return (
    <main className="flex-1 p-6">
      <Tabs defaultValue="plans">
        <TabsList>
          <TabsTrigger value="plans">My Plan</TabsTrigger>
          <TabsTrigger value="payment">Credit Card</TabsTrigger>
          <TabsTrigger value="invoice">Invoice</TabsTrigger>
        </TabsList>
        <TabsContent value="plans" className="mt-6">
          <PricingPlans />
        </TabsContent>
        <TabsContent value="payment" className="mt-6">
          <PaymentForm />
        </TabsContent>
        <TabsContent value="invoice" className="mt-6">
          <InvoiceTable />
        </TabsContent>
      </Tabs>
    </main>
  );
}
