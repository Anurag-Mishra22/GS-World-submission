import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

import { CategoryForm } from "./category-form";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";

import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useGetCategory } from "../api/use-get-category";
import { Loader2 } from "lucide-react";
import { useEditCategory } from "../api/use-edit-category";
import { useDeleteCategory } from "../api/use-delete-category";
import { useConfirm } from "@/hooks/use-confirm";

export const EditCategorySheet = () => {
    const { isOpen, onClose, id } = useOpenCategory();

    const formSchema = insertCategorySchema.pick({ name: true });

    type FormValues = z.input<typeof formSchema>;

    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this category."
    )

    const editMutation = useEditCategory(id);
    const categoryQuery = useGetCategory(id);
    const deleteMutation = useDeleteCategory(id);



    const onSubmit = (values: FormValues) => {
        editMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            }
        });
    }

    const defaultValues = categoryQuery.data?.name ? {
        name: categoryQuery.data.name,
    } : {
        name: "",
    }

    const isPending = editMutation.isPending || deleteMutation.isPending;

    const isLoading = categoryQuery.isLoading;

    const onDelete = async () => {
        const ok = await confirm();

        if (ok) {
            deleteMutation.mutate(undefined, {
                onSuccess: () => {
                    onClose();
                }
            })
        }
    }
    return (
        <>

            <ConfirmDialog />

            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent className="space-y-4">
                    <SheetHeader>
                        <SheetTitle>Edit Category</SheetTitle>
                        <SheetDescription>
                            Edit an existing Category.
                        </SheetDescription>
                    </SheetHeader>
                    {
                        isLoading ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="size-4 text-muted-foreground animate-spin" />
                            </div>
                        ) : (
                            <CategoryForm
                                id={id}
                                onSubmit={onSubmit}
                                disabled={isPending}
                                defaultValues={defaultValues}
                                onDelete={onDelete}
                            />
                        )
                    }
                </SheetContent>
            </Sheet>

        </>
    )
}