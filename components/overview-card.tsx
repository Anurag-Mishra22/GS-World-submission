
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ChartComp } from "./chartComp";


export const OverViewCard = () => {
    return (
        <>
            <div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Budget</CardTitle>
                        <IndianRupee className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">100.00</p>
                        <p className="text-xs text-muted-foreground">Based on 100 charges</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Vehicles </CardTitle>
                        <ShoppingBag className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">+50</p>
                        <p className="text-xs text-muted-foreground">Total Scheduled Vehicles</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Servicing Vehicles</CardTitle>
                        <PartyPopper className="h-4 w-4 text-indigo-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">37</p>
                        <p className="text-xs text-muted-foreground">Total  Vehicles Under Maintenance</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Users</CardTitle>
                        <User2 className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">120</p>
                        <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4  md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                <Card className="xl:col-span-2">
                    <CardHeader>
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>Recent transactions from your store</CardDescription>
                        <CardContent>
                            <ChartComp />
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1 ">
                                <p className="text-sm font-medium">Anurag Mishra</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1 ">
                                <p className="text-sm font-medium">Anurag Mishra</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1 ">
                                <p className="text-sm font-medium">Anurag Mishra</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.0</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1 ">
                                <p className="text-sm font-medium">Anurag Mishra</p>
                                <p className="text-sm text-muted-foreground">test@test.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.0</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}