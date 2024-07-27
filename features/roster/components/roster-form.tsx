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
import { DatePicker } from "@/components/date-picker";

export type ResponseTypeRoster = {
    id: string;
    numberPlate: string;
    vehicleType: string;
    driverName: string;
    scheduleDate: Date;
    startTime: string;
    endTime: string;
    purpose: string;
    destination: string;
    status: string;
};

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

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
};

export const RosterForm = ({
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
                    name="numberPlate"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Number Plate</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. ABC123" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="vehicleType"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vehicle Type</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. Sedan, SUV" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="driverName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Driver Name</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="scheduleDate"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Schedule Date</FormLabel>
                            <FormControl>
                                <DatePicker
                                    value={field.value}
                                    onChange={field.onChange}
                                    disabled={disabled}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="startTime"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start Time</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. 08:00 AM" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="endTime"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>End Time</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. 10:00 AM" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="purpose"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Purpose</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. Business Meeting" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="destination"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Destination</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. City Center" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="status"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. Completed, Scheduled" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" disabled={disabled}>
                    {id ? "Save changes" : "Create Roster"}
                </Button>
                {
                    !!id && (
                        <Button type="button" disabled={disabled} variant="outline" className="w-full" onClick={handleDelete}>
                            <Trash className="mr-2 size-4" />
                            Delete Roster
                        </Button>
                    )
                }
            </form>
        </Form>
    );
};
