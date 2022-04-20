import React from "react";

export default function AdminLayout({ children }:LayoutProps) {

    return (
        <>
            <p>Admin-Layout</p>
            <p>NavBar</p>
            <main>{children}</main>
            <p>Footer</p>
        </>
    )
}