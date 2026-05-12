'use client'
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const { data: session } = authClient.useSession()
    const userr = session?.user;
    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
                <Avatar className="h-20 w-20">
                    <Avatar.Image
                        alt="John Doe"
                        src={userr?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{userr?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-xl font-bold">{userr?.name}</h2>
                <p className="text-muted">{userr?.email}</p>
              
                <UpdateUserModal /> 
                <Link href={'/profileupdate'}>
                 <Button >Updated Profile</Button></Link>
            </Card>
        </div>
    );
};

export default Profile;