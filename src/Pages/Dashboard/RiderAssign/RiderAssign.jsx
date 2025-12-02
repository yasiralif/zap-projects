import React, { useRef, useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const RiderAssign = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const [selectedpercel, setselectedpercel] = useState(null)
    const riderAssignRef = useRef();
    const { data: percels = [] } = useQuery({
        queryKey: ['delivery-status', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percel?deliveryStatus=pending-pickup`)
            return res.data
        }
    })
    const openRiderAssignModal = percel => {
        setselectedpercel(percel)
        riderAssignRef.current.showModal()
    }

    const { data: assignRiders = [] ,refetch} = useQuery({
        queryKey: ['assignRiders', selectedpercel?.receiverDistrict, 'avilable'],
        enabled: !!selectedpercel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=approved&district=${selectedpercel?.receiverDistrict}&workStatus=avilable`)
            refetch()
            return res.data
        }
    })

    const handelAssignRider= rider=>{
        const riderUpdateInfo={
            name: rider.name,
            email: rider.email,
            riderId: rider._id,
            phoneNumber: rider.phoneNumber,
            percelId: selectedpercel._id,
        }
        // console.log(rider);
        axiosSecure.patch(`/percel/${selectedpercel._id}`,riderUpdateInfo)
        .then( res=>{
            
            // console.log(res.data);
            // console.log(selectedpercel._id);
        })

    }


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>cost</th>
                            <th>Paid Time</th>
                            <th>receiverDistrict</th>
                            <th>Delivery Status</th>
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

                                <td>{percel?.paidAt}</td>
                                <td>{percel?.receiverDistrict}</td>
                                <td>{percel?.deliveryStatus}</td>


                                <td>

                                    <button
                                        onClick={() => openRiderAssignModal(percel)}
                                        className="btn btn-ghost bg-green-300 btn-xs">Assign Riders</button>
                                </td>
                            </tr>))
                        }


                    </tbody>
                </table>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog ref={riderAssignRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Rider: {assignRiders?.length}
                    </h3>

                    {/* Table */}
                    <div className="overflow-x-auto my-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Work Status</th>
                                    <th>Rider District</th>
                                    <th>Assign Riders</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                  assignRiders.map((r,i)=>   <tr  key={r._id} className="bg-base-200">
                                    <th>{i+1}</th>
                                    <td>{r.name}</td>
                                    <td>{r.workStatus}</td>
                                    <td>{r.district}</td>
                                    <td>
                                         <button
                                        onClick={()=>handelAssignRider(r) }
                                        className="btn btn-ghost bg-green-300 btn-xs">Assign Riders</button>
                                    </td>
                                </tr>)  
                                }
                             

                              
                                
                            </tbody>
                        </table>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default RiderAssign;