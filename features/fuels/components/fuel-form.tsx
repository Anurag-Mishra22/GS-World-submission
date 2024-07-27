import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export type ResponseTypeFuel = {
    id: string;
    vehicleName: string;
    vehicleOwner: string;
    mileage: number;
    distance: number;
    actualCost: number;
    predictedCost: number;
};

const formSchema = z.object({
    vehicleName: z.string().min(1, "Vehicle Name is required"),
    vehicleOwner: z.string().min(1, "Vehicle Owner is required"),
    mileage: z.number().min(0, "Mileage must be a positive number"),
    distance: z.number().min(0, "Distance must be a positive number"),
    actualCost: z.number().min(0, "Actual Cost must be a positive number"),
    predictedCost: z.number().min(0, "Predicted Cost must be a positive number"),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
};

export const FuelForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const handleSubmit = (values: FormValues) => {
        onSubmit(values);
    };

    const handleDelete = () => {
        onDelete?.();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
                <FormField
                    name="vehicleName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vehicle Name</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. Toyota Corolla" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="vehicleOwner"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vehicle Owner</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="mileage"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mileage</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} type="number" placeholder="e.g. 30000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="distance"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Distance</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} type="number" placeholder="e.g. 500" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="actualCost"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Actual Cost</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} type="number" placeholder="e.g. 50" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
                    name="predictedCost"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Predicted Cost</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} type="number" placeholder="e.g. 50" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <Button className="w-full" disabled={disabled}>
                    {id ? "Save changes" : "Create "}
                </Button>
                {
                    !!id && (
                        <Button type="button" disabled={disabled} variant="outline" className="w-full" onClick={handleDelete}>
                            <Trash className="mr-2 size-4" />
                            Delete account
                        </Button>
                    )
                }
            </form>
        </Form>
    );
};
