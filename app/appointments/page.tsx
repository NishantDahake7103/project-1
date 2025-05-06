import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Select a date to view appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" selected={new Date()} className="rounded-md border" />

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Filter by Doctor</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Doctors</SelectItem>
                          <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                          <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                          <SelectItem value="dr-williams">Dr. Williams</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Filter by Department</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Appointment Type</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="checkup">Checkup</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="follow-up">Follow-up</SelectItem>
                          <SelectItem value="procedure">Procedure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>May 6, 2025</CardTitle>
                  <CardDescription>Today's appointment schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        time: "9:00 AM",
                        patient: "John Smith",
                        doctor: "Dr. Williams",
                        type: "Checkup",
                        department: "Cardiology",
                        status: "Confirmed",
                      },
                      {
                        time: "10:00 AM",
                        patient: "Sarah Johnson",
                        doctor: "Dr. Chen",
                        type: "Follow-up",
                        department: "Neurology",
                        status: "Confirmed",
                      },
                      {
                        time: "11:00 AM",
                        patient: "Thomas Lee",
                        doctor: "Dr. Jessica Chen",
                        type: "Follow-up",
                        department: "Orthopedics",
                        status: "Pending",
                      },
                      {
                        time: "11:30 AM",
                        patient: "Maria Garcia",
                        doctor: "Dr. Robert Kim",
                        type: "Consultation",
                        department: "Dermatology",
                        status: "Confirmed",
                      },
                      {
                        time: "12:00 PM",
                        patient: "David Wilson",
                        doctor: "Dr. Sarah Johnson",
                        type: "Checkup",
                        department: "General Medicine",
                        status: "Confirmed",
                      },
                      {
                        time: "1:30 PM",
                        patient: "Jennifer Taylor",
                        doctor: "Dr. Michael Brown",
                        type: "Procedure",
                        department: "Ophthalmology",
                        status: "Confirmed",
                      },
                      {
                        time: "2:15 PM",
                        patient: "James Anderson",
                        doctor: "Dr. Emily Davis",
                        type: "Follow-up",
                        department: "Cardiology",
                        status: "Pending",
                      },
                      {
                        time: "3:00 PM",
                        patient: "Lisa Rodriguez",
                        doctor: "Dr. Williams",
                        type: "Consultation",
                        department: "Endocrinology",
                        status: "Confirmed",
                      },
                    ].map((appointment, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-4">
                          <div className="text-center w-16">
                            <p className="font-medium">{appointment.time}</p>
                          </div>
                          <div>
                            <p className="font-medium">{appointment.patient}</p>
                            <p className="text-sm text-muted-foreground">
                              {appointment.doctor} • {appointment.department}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`text-xs px-2 py-1 rounded-full ${
                              appointment.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {appointment.status}
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                            {appointment.type}
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appointment List</CardTitle>
              <CardDescription>View all scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 text-muted-foreground">Appointment list view will be displayed here</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
