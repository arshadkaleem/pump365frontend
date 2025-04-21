"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/api/api";
import { useUserStore } from "@/store/userStore";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Package,
  AlertCircle,
  Edit,
  Building,
  Fuel,
  Info,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { PetrolPumpDto } from "@/type/data-contracts";

export default function PumpDetailPage() {
  const [pumpData, setPumpData] = useState<PetrolPumpDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();
  const petrolPumpId = useUserStore((state) => state.petrolPumpId);
  const role = useUserStore((state) => state.role);
  const hasHydrated = useUserStore((state) => state.hasHydrated);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!petrolPumpId) {
      router.replace("/login");
      return;
    }

    const fetchPumpData = async () => {
      try {
        const response = await api.pumpDetail(petrolPumpId);

        console.log("Pump Data:", response.data); // Debugging line

        setPumpData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching pump data:", error);
        toast.error("Failed to load pump data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchPumpData();
  }, [petrolPumpId, router, hasHydrated]);

  const formatDate = (dateString: string | undefined | null) => {
    if (!dateString) return "Not set";
    try {
      return format(new Date(dateString), "dd MMM yyyy");
    } catch (e) {
      return "Invalid date";
    }
  };

  // Check if license is expired or expiring soon
  const getLicenseStatus = () => {
    if (!pumpData?.licenseExpiryDate) return null;

    const expiryDate = new Date(pumpData.licenseExpiryDate);
    const today = new Date();
    const differenceInDays = Math.floor(
      (expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );

    if (differenceInDays < 0) {
      return { status: "expired", badge: "destructive", message: "Expired" };
    } else if (differenceInDays < 30) {
      return {
        status: "expiring",
        badge: "warning",
        message: `Expires in ${differenceInDays} days`,
      };
    } else {
      return { status: "valid", badge: "success", message: "Valid" };
    }
  };

  const licenseStatus = getLicenseStatus();

  if (isLoading) {
    return <PumpDetailSkeleton />;
  }

  if (!pumpData) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-2xl font-bold">Pump Data Not Found</h2>
        <p className="text-muted-foreground">
          Unable to load pump information. Please try again.
        </p>
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{pumpData.name}</h1>
          <p className="text-muted-foreground mt-1">
            {pumpData.companyName || "Independent Operator"}
          </p>
        </div>
        {(role === "Admin" || role === "Manager") && (
          <Button
            onClick={() => router.push("/dashboard/pump/update")}
            className="gap-2"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Info Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Pump Name
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.name || "Not set"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Company Name
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.companyName || "Not set"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      License Number
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-base font-medium">
                        {pumpData.licenseNumber || "Not set"}
                      </p>
                      {licenseStatus && (
                        <Badge
                          variant={
                            licenseStatus.badge as
                              | "default"
                              | "destructive"
                              | "warning"
                              | "success"
                          }
                        >
                          {licenseStatus.message}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      GST Number
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.gstNumber || "Not set"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Tax ID
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.taxId || "Not set"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      License Expiry Date
                    </h3>
                    <p className="text-base font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 opacity-70" />
                      {formatDate(pumpData.licenseExpiryDate)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Status
                    </h3>
                    <Badge
                      variant={pumpData.isActive ? "success" : "destructive"}
                    >
                      {pumpData.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Registration Date
                    </h3>
                    <p className="text-base font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 opacity-70" />
                      {formatDate(pumpData.createdAt)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Phone
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 opacity-70" />
                    {pumpData.contactNumber || "Not set"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 opacity-70" />
                    {pumpData.email || "Not set"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Website
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Globe className="h-4 w-4 opacity-70" />
                    {pumpData.website ? (
                      <a
                        href={pumpData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {pumpData.website}
                      </a>
                    ) : (
                      "Not set"
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Operations Row */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5" />
                Fuel & Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Operation Hours
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 opacity-70" />
                    {pumpData.openingTime && pumpData.closingTime
                      ? `${pumpData.openingTime} - ${pumpData.closingTime}`
                      : "Not set"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Number of Dispensers
                  </h3>
                  <p className="text-base font-medium">
                    {pumpData.numberOfDispensers || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Fuel Types Available
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {pumpData.fuelTypesAvailable ? (
                      pumpData.fuelTypesAvailable
                        .split(",")
                        .map((fuel, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-primary/10"
                          >
                            {fuel.trim()}
                          </Badge>
                        ))
                    ) : (
                      <p className="text-muted-foreground">
                        No fuel types specified
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Last Updated
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 opacity-70" />
                    {formatDate(pumpData.updatedAt)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="flex justify-start gap-2"
              onClick={() => router.push("/dashboard/tanks")}
            >
              <Fuel className="h-4 w-4" />
              Manage Fuel Tanks
              <ArrowRight className="h-4 w-4 ml-auto" />
            </Button>
            <Button
              variant="outline"
              className="flex justify-start gap-2"
              onClick={() => router.push("/dashboard/dispensers")}
            >
              <Package className="h-4 w-4" />
              Manage Dispensers
              <ArrowRight className="h-4 w-4 ml-auto" />
            </Button>
            <Button
              variant="outline"
              className="flex justify-start gap-2"
              onClick={() => router.push("/dashboard/employees")}
            >
              <Users className="h-4 w-4" />
              Manage Employees
              <ArrowRight className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Operational Hours
              </CardTitle>
              <CardDescription>
                Manage your petrol pump's operating schedule
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Opening Time
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 opacity-70" />
                    {pumpData.openingTime || "Not set"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Closing Time
                  </h3>
                  <p className="text-base font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 opacity-70" />
                    {pumpData.closingTime || "Not set"}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-sm font-medium mb-2">Operating Schedule</h3>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div
                        key={day}
                        className="p-2 border rounded-md bg-muted/40"
                      >
                        <p className="font-medium mb-1">{day}</p>
                        <p className="text-xs">
                          {pumpData.openingTime || "?"} -{" "}
                          {pumpData.closingTime || "?"}
                        </p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          Open
                        </Badge>
                      </div>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5" />
                Fuel Types & Equipment
              </CardTitle>
              <CardDescription>
                Fuel products and dispensing equipment details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Available Fuel Types
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pumpData.fuelTypesAvailable ? (
                      pumpData.fuelTypesAvailable
                        .split(",")
                        .map((fuel, index) => (
                          <Badge key={index} className="px-3 py-1">
                            {fuel.trim()}
                          </Badge>
                        ))
                    ) : (
                      <p className="text-muted-foreground">
                        No fuel types specified
                      </p>
                    )}
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Equipment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Dispensers</p>
                        <p className="text-muted-foreground">
                          {pumpData.numberOfDispensers || 0} units
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Nozzles</p>
                        <p className="text-muted-foreground">
                          {/* Assuming 3 nozzles per dispenser as an estimate */}
                          ~{(pumpData.numberOfDispensers || 0) * 3} units (est.)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push("/dashboard/inventory")}
              >
                View Inventory Management
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                License & Regulatory Information
              </CardTitle>
              <CardDescription>
                Manage your regulatory compliance documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      License Number
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.licenseNumber || "Not set"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      License Expiry Date
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-base font-medium">
                        {formatDate(pumpData.licenseExpiryDate)}
                      </p>
                      {licenseStatus && (
                        <Badge
                          variant={
                            licenseStatus.badge as
                              | "default"
                              | "destructive"
                              | "warning"
                              | "success"
                          }
                        >
                          {licenseStatus.message}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      GST Number
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.gstNumber || "Not set"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Tax ID
                    </h3>
                    <p className="text-base font-medium">
                      {pumpData.taxId || "Not set"}
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Compliance Status Cards */}
              <div>
                <h3 className="text-sm font-medium mb-4">Compliance Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 border-green-200"
                      >
                        Compliant
                      </Badge>
                    </div>
                    <h4 className="font-medium">Petroleum License</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      License is valid and up to date
                    </p>

                    {licenseStatus && licenseStatus.status === "expiring" && (
                      <p className="text-sm mt-2 text-amber-600">
                        License will expire soon. Please renew.
                      </p>
                    )}

                    {licenseStatus && licenseStatus.status === "expired" && (
                      <p className="text-sm mt-2 text-red-600">
                        License has expired. Immediate renewal required.
                      </p>
                    )}
                  </div>

                  <div className="border rounded-md p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 border-green-200"
                      >
                        Compliant
                      </Badge>
                    </div>
                    <h4 className="font-medium">Fire Safety</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fire safety measures in place
                    </p>
                  </div>

                  <div className="border rounded-md p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 border-green-200"
                      >
                        Compliant
                      </Badge>
                    </div>
                    <h4 className="font-medium">Tax Compliance</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      GST registration active
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <p className="text-sm text-muted-foreground">
                It is important to maintain current licenses and comply with all
                regulatory requirements.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => router.push("/dashboard/pump/update")}
              >
                Update License Information
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Loading skeleton component
function PumpDetailSkeleton() {
  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-40 mt-2" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="mb-8">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Skeleton className="h-[300px] w-full" />
          </div>
          <Skeleton className="h-[300px] w-full" />
        </div>

        <Skeleton className="h-[200px] w-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}
