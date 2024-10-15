/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { toast } from 'sonner';
import { Avatar, Button, Tooltip } from '@nextui-org/react';
import { useUserBlockUnBlock, useUserPromoteDemote } from '@/hooks/auth.hook';
import { useRouter } from 'next/navigation';


const ManageUsersAdminComponent = ({ users }: any) => {
  const { mutate: blockUnBlockUser, isPending } = useUserBlockUnBlock();
  const { mutate: promoteDemoteUser, isPending: isPromotePending } = useUserPromoteDemote();
  const router = useRouter();


  if (isPending) {
    toast.loading("Working...", { id: "userBlockUnBlockToastId" })
  }


  if (isPromotePending) {
    toast.loading("Working...", { id: "userPromoteDemoteToastId" })
  }


  const handleBlockUnBlock = (id: string) => {
    blockUnBlockUser({ id });
  };

  const handlePromoteDemote = (id: string) => {
    promoteDemoteUser({ id });
  };

  const handleGoProfile = (id: string) => {
    router.push(`/profile/${id}`)
  }


  return (
    <section className="bg-yellow-500 py-20 min-h-screen">
      <section className="max-w-7xl mx-auto overflow-x-auto px-6">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">Manage Users</h1>
        <table className="min-w-full rounded-2xl bg-white overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-8 px-6 text-left">No</th>
              <th className="py-8 px-6 text-left">Image</th>
              <th className="py-8 px-6 text-left">name</th>
              <th className="py-8 px-6 text-left">bio</th>
              <th className="py-8 px-6 text-left">status</th>
              <th className="py-8 px-6 text-left">role</th>
              <th className="py-8 px-6 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user: any, index: any) => (
                <tr key={user?._id} className="border-b hover:bg-gray-100">
                  <td className="py-8 px-6">{index + 1}</td>
                  <td onClick={() => handleGoProfile(user?._id)} className="py-8 px-6 cursor-pointer">
                    <Avatar
                      size="lg"
                      src={user?.avatar}
                      alt={user?.name}
                    />
                  </td>
                  <td onClick={() => handleGoProfile(user?._id)} className="py-8 px-6 cursor-pointer">{user?.name}</td>
                  <td onClick={() => handleGoProfile(user?._id)} className="py-8 px-6 cursor-pointer">{user?.bio}</td>
                  <td onClick={() => handleGoProfile(user?._id)} className="py-8 px-6 cursor-pointer">{user?.isBlocked ? "Blocked" : "Active"}</td>
                  <td onClick={() => handleGoProfile(user?._id)} className="py-8 px-6 cursor-pointer">{user?.role}</td>
                  <td className="py-8 px-6">
                    <section className="flex items-center space-x-4">
                      <Tooltip content="block unblock this user">
                        <Button onClick={() => handleBlockUnBlock(user?._id)} className={`${user?.isBlocked ? "bg-red-500" : "bg-green-500"} font-bold`}>
                          {
                            user?.isBlocked ? (
                              <span>
                                UnBlock
                              </span>
                            ) : (
                              <span>
                                Block
                              </span>
                            )
                          }
                        </Button>
                      </Tooltip>
                      <Tooltip content="promote or demote user">
                        <Button onClick={() => handlePromoteDemote(user?._id)} className={`${user?.role === "user" ? "bg-yellow-500" : "bg-red-500"} font-bold rounded-full`}>
                          {
                            user?.role === "user" ? (
                              <span>
                                Promote Admin
                              </span>
                            ) : (
                              <span>
                                Demote User
                              </span>
                            )
                          }
                        </Button>
                      </Tooltip>
                    </section>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ManageUsersAdminComponent;
