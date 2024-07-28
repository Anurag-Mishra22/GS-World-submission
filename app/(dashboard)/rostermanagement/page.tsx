"use client"
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { columns, ResponseTypeRoster } from "./columns";
import { useNewRoster } from "@/features/roster/hooks/use-new-roster";


const RosterManagementPage = () => {
    const newRoster = useNewRoster();

    const dummyRosterData: ResponseTypeRoster[] = [
        {
            id: "1",
            numberPlate: "ABC123",
            vehicleType: "Sedan",
            driverName: "John Doe",
            scheduleDate: new Date('2023-07-25'),
            startTime: "08:00 AM",
            endTime: "10:00 AM",
            purpose: "Business Meeting",
            destination: "City Center",
            status: "Completed",
        },
        {
            id: "2",
            numberPlate: "XYZ456",
            vehicleType: "SUV",
            driverName: "Jane Smith",
            scheduleDate: new Date('2023-07-26'),
            startTime: "09:00 AM",
            endTime: "11:00 AM",
            purpose: "Client Visit",
            destination: "Downtown",
            status: "Scheduled",
        },
        {
            id: "3",
            numberPlate: "LMN789",
            vehicleType: "Truck",
            driverName: "Mike Johnson",
            scheduleDate: new Date('2023-07-27'),
            startTime: "07:00 AM",
            endTime: "09:00 AM",
            purpose: "Delivery",
            destination: "Warehouse",
            status: "In Progress",
        },
        {
            id: "4",
            numberPlate: "PQR321",
            vehicleType: "Van",
            driverName: "Sara Davis",
            scheduleDate: new Date('2023-07-28'),
            startTime: "06:00 AM",
            endTime: "08:00 AM",
            purpose: "Transport Goods",
            destination: "Factory",
            status: "Completed",
        },
        {
            id: "5",
            numberPlate: "STU654",
            vehicleType: "Bus",
            driverName: "Chris Wilson",
            scheduleDate: new Date('2023-07-29'),
            startTime: "05:00 AM",
            endTime: "07:00 AM",
            purpose: "Field Trip",
            destination: "School",
            status: "Cancelled",
        },
    ];

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">Roster Management</CardTitle>
                    <Button onClick={newRoster.onOpen} size="sm">
                        <Plus className="size-4 mr-2" />
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable
                        filterkey="numberPlate"
                        columns={columns}
                        data={dummyRosterData}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default RosterManagementPage;
