import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../authprovider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useSeller = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: isSeller, isLoading: isSellerLoading } = useQuery({
        enabled: !!localStorage.getItem('access-token'),
        queryKey: ['isSeller', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/seller/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isSeller, isSellerLoading]
};

export default useSeller;