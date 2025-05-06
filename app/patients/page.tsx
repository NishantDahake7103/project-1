import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Download, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

export default function PatientsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Patients</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Management</CardTitle>
          <CardDescription>View and manage all patient records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search patients..." className="flex-1" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Patients</SelectItem>
                    <SelectItem value="admitted">Admitted</SelectItem>
                    <SelectItem value="outpatient">Outpatient</SelectItem>
                    <SelectItem value="discharged">Discharged</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "P-1001",
                      name: "John Smith",
                      age: 45,
                      gender: "Male",
                      contact: "(555) 123-4567",
                      status: "Admitted",
                      lastVisit: "May 6, 2025",
                    },
                    {
                      id: "P-1002",
                      name: "Sarah Johnson",
                      age: 32,
                      gender: "Female",
                      contact: "(555) 234-5678",
                      status: "Outpatient",
                      lastVisit: "May 6, 2025",
                    },
                    {
                      id: "P-1003",
                      name: "Michael Brown",
                      age: 58,
                      gender: "Male",
                      contact: "(555) 345-6789",
                      status: "Discharged",
                      lastVisit: "May 5, 2025",
                    },
                    {
                      id: "P-1004",
                      name: "Emily Davis",
                      age: 7,
                      gender: "Female",
                      contact: "(555) 456-7890",
                      status: "Emergency",
                      lastVisit: "May 5, 2025",
                    },
                    {
                      id: "P-1005",
                      name: "Robert Wilson",
                      age: 62,
                      gender: "Male",
                      contact: "(555) 567-8901",
                      status: "Admitted",
                      lastVisit: "May 5, 2025",
                    },
                    {
                      id: "P-1006",
                      name: "Jennifer Taylor",
                      age: 29,
                      gender: "Female",
                      contact: "(555) 678-9012",
                      status: "Outpatient",
                      lastVisit: "May 4, 2025",
                    },
                    {
                      id: "P-1007",
                      name: "David Martinez",
                      age: 41,
                      gender: "Male",
                      contact: "(555) 789-0123",
                      status: "Discharged",
                      lastVisit: "May 4, 2025",
                    },
                    {
                      id: "P-1008",
                      name: "Lisa Anderson",
                      age: 36,
                      gender: "Female",
                      contact: "(555) 890-1234",
                      status: "Outpatient",
                      lastVisit: "May 3, 2025",
                    },
                  ].map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="font-medium">{patient.id}</TableCell>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.age}</TableCell>
                      <TableCell>{patient.gender}</TableCell>
                      <TableCell>{patient.contact}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
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
                        </span>
                      </TableCell>
                      <TableCell>{patient.lastVisit}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit patient</DropdownMenuItem>
                            <DropdownMenuItem>Medical records</DropdownMenuItem>
                            <DropdownMenuItem>Schedule appointment</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete patient</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1</strong> to <strong>8</strong> of <strong>100</strong> results
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Next page</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
