import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { FuelForm } from "./fuel-form";
import { z } from "zod";
// import { useCreateAccount } from "@/features/accounts/hooks/use-create-account";
import { useNewFuel } from "../hooks/use-new-fuel";

export const NewFuelSheet = () => {
    const { isOpen, onClose } = useNewFuel();

    // Define form schema with necessary fields for FuelForm
    const formSchema = z.object({
        vehicleName: z.string().min(1, "Vehicle Name is required"),
        vehicleOwner: z.string().min(1, "Vehicle Owner is required"),
        mileage: z.number().min(0, "Mileage must be a positive number"),
        distance: z.number().min(0, "Distance must be a positive number"),
        actualCost: z.number().min(0, "Actual Cost must be a positive number"),
        predictedCost: z.number().min(0, "Predicted Cost must be a positive number"),
    });

    type FormValues = z.infer<typeof formSchema>;

    // const mutation = useCreateAccount();

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
                    <SheetTitle>New Fuel</SheetTitle>
                    <SheetDescription>Create a new fuel entry.</SheetDescription>
                </SheetHeader>
                <FuelForm
                    onSubmit={onSubmit}
                    // disabled={mutation.isPending}
                    defaultValues={{
                        vehicleName: "",
                        vehicleOwner: "",
                        mileage: 0,
                        distance: 0,
                        actualCost: 0,
                        predictedCost: 0,
                    }}
                />
            </SheetContent>
        </Sheet>
    );
};
