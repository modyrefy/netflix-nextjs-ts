import React from "react";
import AdminLayout from "./adminLayout";
import UserLayout from "./userLayout";
import GuestLayout from "./guestLayout";
//https://dev.to/ramonak/nextjs-dashboard-layout-with-typescript-and-styled-components-3ld6
//https://stackoverflow.com/questions/62115518/persistent-layout-in-next-js-with-typescript-and-hoc
//https://reacttricks.com/nested-dynamic-layouts-in-next-apps/


export default function MainLayout({ children,value }:LayoutProps) {
    // let value:number  =Math.floor(Math.random() * 3)
    // console.log('value',value);
    value = 1;
    switch (value) {
        case 1:
            return <AdminLayout>{children}</AdminLayout>
            break;
        case 2:
            return <UserLayout>{children}</UserLayout>
            break;
        case 3:
        default:
            return <GuestLayout>{children}</GuestLayout>
            break;
    }
}