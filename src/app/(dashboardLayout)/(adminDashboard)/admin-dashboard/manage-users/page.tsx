import envConfig from "@/config/envConfig";
import ManageUsersAdminComponent from "./_components/ManageUsersAdmin";
import { Suspense } from "react";

const AdminManageUsers = async () => {
    const res = await fetch(`${envConfig.baseApi}/user`, {
        cache: "no-store",
        next: {
            tags: ["users"]
        }
    });
    const data = await res.json();
    const users = data?.data;

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ManageUsersAdminComponent users={users} />
        </Suspense>
    );
}

export default AdminManageUsers;