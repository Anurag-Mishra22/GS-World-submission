"use client"

import { useSearchParams } from "next/navigation";
import { ChartComp } from "./chartComp";

export const DataGrid = () => {

    const params = useSearchParams();
    const to = params.get("to") || undefined;
    const from = params.get("from") || undefined;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <h1>DataGrid</h1>
            <ChartComp />
        </div>
    );
}