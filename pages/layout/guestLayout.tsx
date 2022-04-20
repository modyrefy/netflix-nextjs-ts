import React from "react";

export default function GuestLayout({ children }:LayoutProps) {

    return (
        <>
            <p>Guest-Layout</p>
            <p>NavBar</p>
            <main>{children}</main>
            <p>Footer</p>
        </>
    )
}