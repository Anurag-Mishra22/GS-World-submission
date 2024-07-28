import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { z } from "zod";

import { useNewRoster } from "../hooks/use-new-roster";
import { RosterForm } from "./roster-form";

export const NewRosterSheet = () => {
    const { isOpen, onClose } = useNewRoster();

    // Define form schema with necessary fields for RosterForm
    const formSchema = z.object({
        numberPlate: z.string().min(1, "Number Plate is required"),
        vehicleType: z.string().min(1, "Vehicle Type is required"),
        driverName: z.string().min(1, "Driver Name is required"),
        scheduleDate: z.date(),
        startTime: z.string().min(1, "Start Time is required"),
        endTime: z.string().min(1, "End Time is required"),
        purpose: z.string().min(1, "Purpose is required"),
        destination: z.string().min(1, "Destination is required"),
        status: z.string().min(1, "Status is required"),
    });

    type FormValues = z.infer<typeof formSchema>;

    // const mutation = useCreateRoster();

    const onSubmit = (values: FormValues) => {
        // mutation.mutate(values, {
        //     onSuccess: () => {
        //         onClose();
        //     },
        // });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Roster</SheetTitle>
                    <SheetDescription>Create a new roster entry.</SheetDescription>
                </SheetHeader>
                <RosterForm
                    onSubmit={onSubmit}
                    // disabled={mutation.isPending}
                    defaultValues={{
                        numberPlate: "",
                        vehicleType: "",
                        driverName: "",
                        scheduleDate: new Date(),
                        startTime: "",
                        endTime: "",
                        purpose: "",
                        destination: "",
                        status: "",
                    }}
                />
            </SheetContent>
        </Sheet>
    );
};
