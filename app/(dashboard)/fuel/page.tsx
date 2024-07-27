"use client"
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react";
import { columns, ResponseTypeFuel } from "./columns";
import { useNewFuel } from "@/features/fuels/hooks/use-new-fuel";



const fuelPage = () => {
    const newFuel = useNewFuel();

    const calculatePrice = (distance: number) => {
        // Example calculation logic for predicted cost
        const costPerMile = 0.5; // Example cost per mile
        return distance * costPerMile;
    };

    const dummyFuelData = [
        {
            id: "1",
            vehicleName: "Toyota Corolla",
            vehicleOwner: "John Doe",
            mileage: 30000,
            distance: 500,
            actualCost: 50,
            predictedCost: calculatePrice(500)
        },
        {
            id: "2",
            vehicleName: "Honda Civic",
            vehicleOwner: "Jane Smith",
            mileage: 45000,
            distance: 600,
            actualCost: 60,
            predictedCost: calculatePrice(600)
        },
        {
            id: "3",
            vehicleName: "Ford Focus",
            vehicleOwner: "Mike Johnson",
            mileage: 12000,
            distance: 300,
            actualCost: 30,
            predictedCost: calculatePrice(300)
        },
        {
            id: "4",
            vehicleName: "Chevrolet Malibu",
            vehicleOwner: "Sara Davis",
            mileage: 80000,
            distance: 700,
            actualCost: 70,
            predictedCost: calculatePrice(700)
        },
        {
            id: "5",
            vehicleName: "BMW 3 Series",
            vehicleOwner: "Chris Wilson",
            mileage: 15000,
            distance: 400,
            actualCost: 40,
            predictedCost: calculatePrice(400)
        },
        {
            id: "6",
            vehicleName: "Audi A4",
            vehicleOwner: "Patricia Brown",
            mileage: 22000,
            distance: 450,
            actualCost: 45,
            predictedCost: calculatePrice(450)
        },
        {
            id: "7",
            vehicleName: "Mercedes-Benz C-Class",
            vehicleOwner: "David Lee",
            mileage: 50000,
            distance: 550,
            actualCost: 55,
            predictedCost: calculatePrice(550)
        },
        {
            id: "8",
            vehicleName: "Volkswagen Jetta",
            vehicleOwner: "Linda Martinez",
            mileage: 35000,
            distance: 600,
            actualCost: 60,
            predictedCost: calculatePrice(600)
        },
        {
            id: "9",
            vehicleName: "Subaru Impreza",
            vehicleOwner: "Mark Anderson",
            mileage: 28000,
            distance: 480,
            actualCost: 48,
            predictedCost: calculatePrice(480)
        },
        {
            id: "10",
            vehicleName: "Mazda 3",
            vehicleOwner: "Nancy Clark",
            mileage: 32000,
            distance: 520,
            actualCost: 52,
            predictedCost: calculatePrice(520)
        }
    ];


    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">Fuel Consumption Monitoring</CardTitle>
                    <Button onClick={newFuel.onOpen} size="sm">
                        {/* <Button onClick={newAccount.onOpen} size="sm"> */}
                        <Plus className="size-4 mr-2" />
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable
                        filterkey="email"
                        columns={columns}
                        data={dummyFuelData}
                    // onDelete={(row) => {
                    //     const ids = row.map((r) => r.original.id);
                    //     deleteAccounts.mutate({ ids });
                    // }}
                    // disabled={isDisabled}
                    />

                </CardContent>
            </Card>
        </div>
    )
}

export default fuelPage;