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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DoctorsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Doctors</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Doctor Management</CardTitle>
          <CardDescription>View and manage all doctors and medical staff</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search doctors..." className="flex-1" />
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
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Doctor</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "D-1001",
                      name: "Dr. Jessica Chen",
                      department: "Cardiology",
                      specialization: "Interventional Cardiology",
                      contact: "(555) 123-4567",
                      status: "Available",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1002",
                      name: "Dr. Robert Kim",
                      department: "Dermatology",
                      specialization: "Cosmetic Dermatology",
                      contact: "(555) 234-5678",
                      status: "In Surgery",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1003",
                      name: "Dr. Sarah Johnson",
                      department: "General Medicine",
                      specialization: "Internal Medicine",
                      contact: "(555) 345-6789",
                      status: "Available",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1004",
                      name: "Dr. Michael Brown",
                      department: "Ophthalmology",
                      specialization: "Retina Specialist",
                      contact: "(555) 456-7890",
                      status: "On Leave",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1005",
                      name: "Dr. Emily Davis",
                      department: "Cardiology",
                      specialization: "Electrophysiology",
                      contact: "(555) 567-8901",
                      status: "Available",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1006",
                      name: "Dr. David Wilson",
                      department: "Neurology",
                      specialization: "Neurophysiology",
                      contact: "(555) 678-9012",
                      status: "With Patient",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1007",
                      name: "Dr. Jennifer Taylor",
                      department: "Pediatrics",
                      specialization: "Neonatology",
                      contact: "(555) 789-0123",
                      status: "Available",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: "D-1008",
                      name: "Dr. James Williams",
                      department: "Orthopedics",
                      specialization: "Sports Medicine",
                      contact: "(555) 890-1234",
                      status: "In Surgery",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((doctor) => (
                    <TableRow key={doctor.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                            <AvatarFallback>
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{doctor.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{doctor.id}</TableCell>
                      <TableCell>{doctor.department}</TableCell>
                      <TableCell>{doctor.specialization}</TableCell>
                      <TableCell>{doctor.contact}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            doctor.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : doctor.status === "In Surgery"
                                ? "bg-red-100 text-red-800"
                                : doctor.status === "With Patient"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {doctor.status}
                        </span>
                      </TableCell>
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
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit details</DropdownMenuItem>
                            <DropdownMenuItem>View schedule</DropdownMenuItem>
                            <DropdownMenuItem>Assign patients</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Remove doctor</DropdownMenuItem>
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
                Showing <strong>1</strong> to <strong>8</strong> of <strong>24</strong> results
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
