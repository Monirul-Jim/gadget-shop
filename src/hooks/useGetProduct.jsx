import { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import useAxiosSecure from './useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: product = [] } = useQuery({
        queryKey: ['product-added-database', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/product-added-database?email=${user?.email}`)
            return res.data;
        },
    })

    return [product, refetch]
};

export default useGetProduct;

// import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
// const useCart = () => {
//     const { user, loading } = useAuth();
//     // const token = localStorage.getItem('access-token');
//     const [axiosSecure] = useAxiosSecure();
//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['carts', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure(`/carts?email=${user?.email}`)
//             console.log('res from axios', res)
//             return res.data;
//         },
//     })

//     return [cart, refetch]

// }
// export default useCart;

// queryFn: async () => {
//     const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },