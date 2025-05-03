// import RoleGuard from "@/components/auth/RoleGuard";

// export default function DashboardPage() {
//   return (
//     <RoleGuard allowedRoles={["Admin", "Manager"]}>
//       <div className="p-4">

//       </div>
//     </RoleGuard>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Calendar,
  Clock,
  DollarSign,
  Droplet,
  Users,
  AlertTriangle,
  TrendingUp,
  Truck,
  Activity,
  Check,
  Link,
} from "lucide-react";
import { api } from "@/api/api";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import {
  EmployeeDto,
  FuelDispenserCreateDto,
  FuelTankDto,
} from "@/type/data-contracts";
import { useFuelTanks } from "@/hooks/useFuelTanks";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const [salesByFuel, setSalesByFuel] = useState([]);
  const [salesTrend, setSalesTrend] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [petrolPumpId, setPetrolPumpId] = useState(
    "00000000-0000-0000-0000-000000000000"
  ); // Default or from user context
  const [timeRange, setTimeRange] = useState("week");

  useEffect(() => {
    // Fetch data for dashboard
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch dashboard summary
        const summaryResponse = await fetch(
          `/api/Dashboard/summary/${petrolPumpId}`
        );
        const summaryData = await summaryResponse.json();
        setSummary(summaryData);

        // Fetch sales by fuel type
        const salesByFuelResponse = await fetch(
          `/api/Dashboard/sales-by-fuel/${petrolPumpId}?timeRange=${timeRange}`
        );
        const salesByFuelData = await salesByFuelResponse.json();
        setSalesByFuel(salesByFuelData);

        // Fetch sales trend
        const salesTrendResponse = await fetch(
          `/api/Dashboard/sales-trend/${petrolPumpId}/${timeRange}`
        );
        const salesTrendData = await salesTrendResponse.json();
        setSalesTrend(salesTrendData);

        // Fetch inventory levels
        const inventoryResponse = await fetch(
          `/api/Dashboard/inventory/${petrolPumpId}`
        );
        const inventoryData = await inventoryResponse.json();
        setInventory(inventoryData);

        // Fetch recent transactions
        const transactionsResponse = await fetch(
          `/api/Dashboard/recent-transactions/${petrolPumpId}/5`
        );
        const transactionsData = await transactionsResponse.json();
        setRecentTransactions(transactionsData);

        // Fetch alerts
        const alertsResponse = await fetch(
          `/api/Dashboard/alerts/${petrolPumpId}/5`
        );
        const alertsData = await alertsResponse.json();
        setAlerts(alertsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [petrolPumpId, timeRange]);

  // Mock data for demonstration
  const mockSummary = {
    totalSalesToday: 12500.75,
    totalLitersSold: 450.5,
    // activeEmployees: 10,
    activePumps: 8,
    lowStockFuels: 1,
    alertCount: 3,
  };

  const mockSalesByFuel = [
    { name: "Petrol", value: 65 },
    { name: "Diesel", value: 30 },
    { name: "Premium", value: 5 },
  ];

  const mockSalesTrend = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 6390 },
    { name: "Sun", sales: 3490 },
  ];



  const mockTransactions = [
    {
      id: 1,
      date: "2025-05-02 09:15",
      fuelType: "Petrol",
      liters: 25.5,
      amount: 2805.0,
      employee: "John Doe",
    },
    {
      id: 2,
      date: "2025-05-02 09:30",
      fuelType: "Diesel",
      liters: 40.0,
      amount: 3400.0,
      employee: "Jane Smith",
    },
    {
      id: 3,
      date: "2025-05-02 10:00",
      fuelType: "Premium",
      liters: 15.2,
      amount: 2432.0,
      employee: "Mike Johnson",
    },
    {
      id: 4,
      date: "2025-05-02 10:15",
      fuelType: "Petrol",
      liters: 10.0,
      amount: 1100.0,
      employee: "John Doe",
    },
    {
      id: 5,
      date: "2025-05-02 10:30",
      fuelType: "Diesel",
      liters: 30.5,
      amount: 2592.5,
      employee: "Jane Smith",
    },
  ];

  const mockAlerts = [
    {
      id: 1,
      type: "Sales Discrepancy",
      message: "Nozzle #3 reading differs by 1.5L from reported sales",
      timestamp: "2025-05-02 09:45",
      severity: "high",
    },
    {
      id: 2,
      type: "Low Inventory",
      message: "Premium fuel below 25% capacity",
      timestamp: "2025-05-02 08:30",
      severity: "medium",
    },
    {
      id: 3,
      type: "Maintenance Due",
      message: "Dispenser #2 scheduled for maintenance",
      timestamp: "2025-05-02 07:15",
      severity: "low",
    },
  ];

  // Use mock data for demonstration
  const displaySummary = summary || mockSummary;
  const displaySalesByFuel = salesByFuel.length ? salesByFuel : mockSalesByFuel;
  const displaySalesTrend = salesTrend.length ? salesTrend : mockSalesTrend;
  // const displayInventory = inventory.length ? inventory : mockInventory;
  const displayTransactions = recentTransactions.length
    ? recentTransactions
    : mockTransactions;
  const displayAlerts = alerts.length ? alerts : mockAlerts;

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Set alert variant based on severity
  const getAlertStyles = (severity) => {
    switch (severity) {
      case "high":
        return {
          borderColor: "border-red-200",
          bgColor: "bg-red-50",
          iconBg: "bg-red-100",
          iconColor: "text-red-500",
        };
      case "medium":
        return {
          borderColor: "border-yellow-200",
          bgColor: "bg-yellow-50",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-500",
        };
      default:
        return {
          borderColor: "border-blue-200",
          bgColor: "bg-blue-50",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-500",
        };
    }
  };

  // fuel inventory
  const { data: fuelTanksData, isLoading, error } = useFuelTanks();
  const [fuelTanks, setFuelTanks] = useState<FuelTankDto[]>([]);

  console.log("fuelTanksData", fuelTanksData);

  // Use useEffect to update state after client-side hydration
  useEffect(() => {
    if (fuelTanksData) {
      console.log("fuelTanksData", fuelTanksData);
      setFuelTanks(Array.isArray(fuelTanksData) ? fuelTanksData : []);
    }
  }, [fuelTanksData]);
  // active dispensers
  const fetchDispensers = async () => {
    const res = await api.fuelDispenserList();
    if (res.status !== 200) {
      toast.error("Failed to fetch fuel dispensers ");
      return [];
    }
    return res.data;
  };
  const { data: fuelDispensers = [], isLoading: isLoadingDispensers } =
    useQuery({
      queryKey: ["fuelDispensers"],
      queryFn: fetchDispensers,
    });
  const activeFuelDispensers = fuelDispensers.filter(
    (fuelDispenser: FuelDispenserCreateDto) => fuelDispenser.status
  ).length;

  // active employee
  const fetchEmployees = async () => {
    const res = await api.employeeList();
    if (res.status !== 200) {
      toast.error("Failed to fetch employees");
      return [];
    }
    return res.data.data; // return employee array
  };

  const { data: employees = [], isLoading: isLoadingEmployees } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const activeEmployees = employees.filter(
    (emp: EmployeeDto) => emp.isActive
  ).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen rounded-xl">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-xl mb-6">
        Pump365 Dashboard
      </h1>

      {/* Time range selector in shadcn style */}
      <div className="mb-6">
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
          <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              timeRange === "day"
                ? "bg-background text-foreground shadow-sm"
                : ""
            }`}
            onClick={() => setTimeRange("day")}
          >
            Today
          </button>
          <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              timeRange === "week"
                ? "bg-background text-foreground shadow-sm"
                : ""
            }`}
            onClick={() => setTimeRange("week")}
          >
            This Week
          </button>
          <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              timeRange === "month"
                ? "bg-background text-foreground shadow-sm"
                : ""
            }`}
            onClick={() => setTimeRange("month")}
          >
            This Month
          </button>
        </div>
      </div>

      {/* Summary KPIs in shadcn card style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <DollarSign className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Sales Today</p>
              <p className="text-xl font-semibold">
                {formatCurrency(displaySummary.totalSalesToday)}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <Droplet className="text-green-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Liters Sold Today</p>
              <p className="text-xl font-semibold">
                {displaySummary.totalLitersSold.toFixed(2)} L
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <Users className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Employees</p>
              <p className="text-xl font-semibold">
                {isLoading ? "Loading..." : activeEmployees}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-cyan-100 p-3 mr-4">
              <Activity className="text-cyan-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Dispensers</p>
              <p className="text-xl font-semibold">
                {isLoading ? "Loading..." : activeFuelDispensers}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <Truck className="text-yellow-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Low Stock Fuels</p>
              <p className="text-xl font-semibold">
                {fuelTanks?.filter((tank) => tank.isLowStock).length ?? 0}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex items-center">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Alerts</p>
              <p className="text-xl font-semibold">
                {displaySummary.alertCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row in shadcn card style */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Trend */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-2">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Sales Trend
            </h3>
          </div>
          <div className="p-6 pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={displaySalesTrend}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#0088FE"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Fuel Type */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Sales by Fuel Type
            </h3>
          </div>
          <div className="p-6 pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={displaySalesByFuel}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {displaySalesByFuel.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Inventory and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Inventory Levels */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Fuel Inventory
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {fuelTanks.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">
                      {item.fuelType}
                    </span>
                    <span className="text-gray-600">
                      {item.currentStock?.toFixed(0) ?? "0"} /{" "}
                      {item.capacityInLiters?.toFixed(0) ?? "0"} L
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        (item.stockPercentage ?? 0) < 25
                          ? "bg-red-500"
                          : (item.stockPercentage ?? 0) < 50
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${item.stockPercentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Recent Transactions
            </h3>
            <a
              href="/transactions"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              <Link className="h-4 w-4 mr-2" />
              View All
            </a>
          </div>
          <div className="p-6 pt-0">
            <div className="rounded-md border">
              <div className="w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Time
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Fuel
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Liters
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {displayTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle">
                          {formatDate(transaction.date)}
                        </td>
                        <td className="p-4 align-middle">
                          {transaction.fuelType}
                        </td>
                        <td className="p-4 align-middle">
                          {transaction.liters.toFixed(2)} L
                        </td>
                        <td className="p-4 align-middle">
                          {formatCurrency(transaction.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
        <div className="flex justify-between items-center p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Recent Alerts
          </h3>
          <a
            href="/alerts"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <Link className="h-4 w-4 mr-2" />
            View All
          </a>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {displayAlerts.map((alert) => {
              const styles = getAlertStyles(alert.severity);

              return (
                <div
                  key={alert.id}
                  className={`p-4 border rounded-lg flex items-start ${styles.borderColor} ${styles.bgColor}`}
                >
                  <div className={`rounded-full p-2 mr-4 ${styles.iconBg}`}>
                    <AlertTriangle className={styles.iconColor} size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-semibold">{alert.type}</h3>
                      <span className="text-xs text-gray-500">
                        {formatDate(alert.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
