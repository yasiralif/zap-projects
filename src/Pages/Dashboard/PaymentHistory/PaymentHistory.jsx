import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const PaymentHistory = () => {
    const parcels = [
    {
      product: "Liquid Cleanser",
      name: "Shokil",
      address: "আব্দুল্লাহ, গাজীপুর সদর, গাজীপুর",
      phone: "01773639877",
      tracking: "568352",
      payment: "৳ 121 (Paid)",
    },
    {
      product: "Liquid Cleanser",
      name: "Anika",
      address: "অনিকাশার, আদাবর, সাভার, ঢাকা",
      phone: "01987654321",
      tracking: "568352",
      payment: "৳ 121 (Paid)",
    },
    {
      product: "Liquid Cleanser",
      name: "Rameez",
      address: "রামিজ, কুড়িল, ঢাকা",
      phone: "01823456789",
      tracking: "568352",
      payment: "৳ 121 (Paid)",
    },
  ];
  const axios =useAxios();
  const {user}= useAuth();
  const {data:percel=[]}=useQuery({
    queryKey:['payment',user?.email],
    queryFn: async()=>{
        const res = await axios.get(`/payment?email=${user?.email}`)
       return res.data
    } 
  })
  console.log(percel);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Top Stats */}
      <h1 className="text-3xl font-bold mb-6">Manage Parcel</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <p className="text-gray-600">Unpaid</p>
          <p className="text-3xl font-bold">129</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <p className="text-gray-600">Ready Pick UP</p>
          <p className="text-3xl font-bold">1,325</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <p className="text-gray-600">In Transit</p>
          <p className="text-3xl font-bold">50</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <p className="text-gray-600">Ready to Deliver</p>
          <p className="text-3xl font-bold">50</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <p className="text-gray-600">Delivered</p>
          <p className="text-3xl font-bold">50</p>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3">Parcel Info</th>
              <th className="py-3">Recipient Info</th>
              <th className="py-3">Tracking Number</th>
              <th className="py-3">Payment Info</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {percel.map((p, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">

                <td className="py-4">{p?.percelName}</td>

                <td className="py-4">
                  <p className="font-semibold">{p?.percelAddress}</p>
                  <p className="text-gray-600">{p?.address}</p>
                  <p className="text-gray-600">{p?.phone}</p>
                </td>

                <td className="py-4">{p?.transtionId}</td>

                <td className="py-4 font-semibold">{p?.amount}</td>

                <td className="py-4">
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                    View
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};


export default PaymentHistory;