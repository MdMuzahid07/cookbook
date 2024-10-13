import envConfig from "@/config/envConfig";
import ManageUsersAdminComponent from "./_components/ManageUsersAdmin";

const AdminManageUsers = async () => {
    const res = await fetch(`${envConfig.baseApi}/user`, {
        next: {
            tags: ["users"]
        }
    });
    const data = await res.json();
    const users = data?.data;

    return (
        <div>
            <ManageUsersAdminComponent users={users} />
        </div>
    );
}

export default AdminManageUsers;