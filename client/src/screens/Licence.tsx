import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export default function LicensePage() {
  const licenseInfo = {
    type: "Professional",
    expiryDate: "31 Dec 2023",
    totalLicenses: 1000,
    usedLicenses: 750,
  };

  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">License Information</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current License</CardTitle>
          <CardDescription>
            Your school's license details and usage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>License Type:</span>
            <span className="font-medium">{licenseInfo.type}</span>
          </div>
          <div className="flex justify-between">
            <span>Expiry Date:</span>
            <span className="font-medium">{licenseInfo.expiryDate}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>License Usage:</span>
              <span className="font-medium">
                {licenseInfo.usedLicenses} / {licenseInfo.totalLicenses}
              </span>
            </div>
            <Progress
              value={
                (licenseInfo.usedLicenses / licenseInfo.totalLicenses) * 100
              }
            />
          </div>
          <Button className="w-full bg-[#F7B614] text-black hover:bg-[#e5a913]">
            Upgrade License
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
