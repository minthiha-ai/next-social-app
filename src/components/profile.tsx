'use client';
import React from 'react'
import { useSession } from "next-auth/react";

const Profile = () => {
    const session = useSession();

    if (session.data?.user) {
        return <div>From Client: {JSON.stringify(session.data.user)}</div>
    }
    return (
        <div>From Client: user is not signed in</div>
    )
}

export default Profile
