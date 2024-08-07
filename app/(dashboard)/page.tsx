"use client"
import { DataGrid } from "@/components/data-grid";
import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { UserButton } from "@clerk/nextjs";


export default function DashboardPage() {

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 mt-24">
      <DataGrid />
    </div>
  );
}
