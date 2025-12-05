import React from 'react';
import useAxios from '../../../../Hooks/useAxios';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RiderTask = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const { data: percels = [], refetch } = useQuery({
        queryKey: ['delivery-status', user?.email, 'rider-assign'],
        queryFn: async () => {
            // refetch()
            const res = await axiosSecure.get(`/percel/rider?riderEmail=${user?.email}&deliveryStatus=rider-assign`)
            return res.data
        }
    })
    const handelRide = (rider, status) => {
        const statusUpdate = {
            deliveryStatus: status
        }
        console.log(statusUpdate);
        axiosSecure.patch(`/percel/${rider._id}/status`, statusUpdate)
            .then(res => {
                refetch()
                console.log(res.data);
                if (res.data.matchedCount) {
                    Swal.fire({
                        title: "Are you Sure?",
                        text: `You Request Checking Your Request`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, I Agree"
                    })
                }

            })

    }
    // const handelRejectsRide= (rider)=>{
    //     const statusUpdate ={
    //         deliveryStatus: "pending-pickup"
    //     }
    //     axiosSecure.patch(`/percel/${rider._id}/status`,statusUpdate)
    //     .then(res=>{
    //         refetch()
    //         console.log(res.data);
    //         if(res.data.matchedCount){
    //               Swal.fire({
    //                         title: "Are you Sure?",
    //                         text: `You Request Checking`,
    //                         icon: "warning",
    //                         showCancelButton: true,
    //                         confirmButtonColor: "#3085d6",
    //                         cancelButtonColor: "#d33",
    //                         confirmButtonText: "Yes, I Agree"
    //                     })
    //         }

    //     })

    // }
    // const handelPickUp= (rider)=>{
    //     const statusUpdate ={
    //         deliveryStatus: "percel_pickup"
    //     }
    //     axiosSecure.patch(`/percel/${rider._id}/status`,statusUpdate)
    //     .then(res=>{
    //         refetch()
    //         console.log(res.data);
    //         if(res.data.matchedCount){
    //               Swal.fire({
    //                         title: "Are you Sure?",
    //                         text: `You Request Checking`,
    //                         icon: "warning",
    //                         showCancelButton: true,
    //                         confirmButtonColor: "#3085d6",
    //                         cancelButtonColor: "#d33",
    //                         confirmButtonText: "Yes, I Agree"
    //                     })
    //         }

    //     })

    // }
    console.log(percels);
    return (
        <div>
            this is rider task {percels?.length}


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Reciver Phone Number</th>

                            <th>Loaction</th>

                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            percels.map((percel, i) => (<tr key={percel._id}>
                                <th>{i + 1}</th>
                                <td>{percel?.parcelName}</td>
                                <td>{percel?.senderEmail}</td>
                                <td>{percel?.cost}</td>
                                <td>{percel?.receiverPhone}</td>


                                <td>{percel?.receiverDistrict}</td>



                                <td>
                                    {
                                        percel?.deliveryStatus === "rider_arriving" ? (
                                            // Rider already arriving → Show Reject Ride
                                            <button
                                                onClick={() => handelRide(percel, "pending-pickup")}
                                                className="btn btn-ghost bg-red-300 btn-xs"
                                            >
                                                Reject Ride
                                            </button>
                                        ) : (
                                            // Default → Show Accept Ride
                                            <button
                                                onClick={() => handelRide(percel, "rider_arriving")}
                                                className="btn btn-ghost bg-green-300 btn-xs"
                                            >
                                                Accept Ride
                                            </button>
                                        )
                                    }
                                </td>

                                <td>
                                    {
                                        percel?.deliveryStatus === "rider_arriving" ? (
                                            // Rider arrived but pickup not yet → show Mark as Picked Up
                                            <button
                                                onClick={() => handelRide(percel, "parcel_picked_up")}
                                                className="btn btn-ghost bg-blue-300 btn-xs"
                                            >
                                                Mark As Picked Up
                                            </button>
                                        ) : percel?.deliveryStatus === "parcel_picked_up" ? (
                                            // Already picked up → show Mark Delivered
                                            <button
                                                onClick={() => handelRide(percel, "parcel_delivered")}
                                                className="btn btn-ghost bg-green-300 btn-xs"
                                            >
                                                Mark As Delivered
                                            </button>
                                        ) : (
                                            // Default fallback
                                            <button
                                                className="btn btn-ghost bg-gray-300 btn-xs"
                                                disabled
                                            >
                                                Waiting...
                                            </button>
                                        )
                                    }
                                </td>




                            </tr>))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RiderTask;