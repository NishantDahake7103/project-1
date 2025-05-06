import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Calendar, CreditCard, TrendingUp, Bed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>Add Patient</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8% from yesterday
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bed Occupancy</CardTitle>
                <Bed className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-red-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +5% from last week
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,563</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +18% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
                <CardDescription>Showing the last 5 patient admissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    {
                      id: "P-1001",
                      name: "John Smith",
                      date: "Today, 10:30 AM",
                      status: "Admitted",
                      department: "Cardiology",
                    },
                    {
                      id: "P-1002",
                      name: "Sarah Johnson",
                      date: "Today, 9:15 AM",
                      status: "Outpatient",
                      department: "Neurology",
                    },
                    {
                      id: "P-1003",
                      name: "Michael Brown",
                      date: "Yesterday, 2:45 PM",
                      status: "Discharged",
                      department: "Orthopedics",
                    },
                    {
                      id: "P-1004",
                      name: "Emily Davis",
                      date: "Yesterday, 11:20 AM",
                      status: "Emergency",
                      department: "Pediatrics",
                    },
                    {
                      id: "P-1005",
                      name: "Robert Wilson",
                      date: "May 5, 3:30 PM",
                      status: "Admitted",
                      department: "Oncology",
                    },
                  ].map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{patient.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ID: {patient.id} • {patient.department}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`text-xs px-2 py-1 rounded-full ${
                            patient.status === "Admitted"
                              ? "bg-blue-100 text-blue-800"
                              : patient.status === "Discharged"
                                ? "bg-green-100 text-green-800"
                                : patient.status === "Emergency"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {patient.status}
                        </div>
                        <div className="text-xs text-muted-foreground">{patient.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Next scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { time: "11:00 AM", patient: "Thomas Lee", doctor: "Dr. Jessica Chen", type: "Follow-up" },
                    { time: "11:30 AM", patient: "Maria Garcia", doctor: "Dr. Robert Kim", type: "Consultation" },
                    { time: "12:00 PM", patient: "David Wilson", doctor: "Dr. Sarah Johnson", type: "Checkup" },
                    { time: "1:30 PM", patient: "Jennifer Taylor", doctor: "Dr. Michael Brown", type: "Procedure" },
                    { time: "2:15 PM", patient: "James Anderson", doctor: "Dr. Emily Davis", type: "Follow-up" },
                  ].map((appointment, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Activity className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{appointment.patient}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.doctor} • {appointment.type}
                        </p>
                      </div>
                      <div className="text-sm font-medium">{appointment.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed hospital analytics and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 text-muted-foreground">
                Analytics dashboard content will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view hospital reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 text-muted-foreground">
                Reports dashboard content will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
