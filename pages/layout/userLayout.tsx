import React from "react";

export default function UserLayout({ children }:LayoutProps) {

    return (
        <>
            <p>User-Layout</p>
            <p>NavBar</p>
            <main>{children}</main>
            <p>Footer</p>
        </>
    )
}