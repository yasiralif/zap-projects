import React from 'react';
import useAxios from '../../../../Hooks/useAxios';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RiderTask = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const { data: percels = [] ,refetch } = useQuery({
        queryKey: ['delivery-status', user?.email, 'rider-assign'],
        queryFn: async () => {
            // refetch()
            const res = await axiosSecure.get(`/percel/rider?riderEmail=${user?.email}&deliveryStatus=rider-assign`)
            return res.data
        }
    })
    const handelAccepetRide= (rider)=>{
        const statusUpdate ={
            deliveryStatus: "rider_arriving"
        }
        axiosSecure.patch(`/percel/${rider._id}/status`,statusUpdate)
        .then(res=>{
            refetch()
            console.log(res.data);
            if(res.data.matchedCount){
                  Swal.fire({
                            title: "Are you Sure?",
                            text: `You Request Checking`,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, I Agree"
                        })
            }
           
        })
        
    }
    const handelRejectsRide= (rider)=>{
        const statusUpdate ={
            deliveryStatus: "pending-pickup"
        }
        axiosSecure.patch(`/percel/${rider._id}/status`,statusUpdate)
        .then(res=>{
            refetch()
            console.log(res.data);
            if(res.data.matchedCount){
                  Swal.fire({
                            title: "Are you Sure?",
                            text: `You Request Checking`,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, I Agree"
                        })
            }
           
        })
        
    }
    const handelPickUp= (rider)=>{
        const statusUpdate ={
            deliveryStatus: "percel_pickup"
        }
        axiosSecure.patch(`/percel/${rider._id}/status`,statusUpdate)
        .then(res=>{
            refetch()
            console.log(res.data);
            if(res.data.matchedCount){
                  Swal.fire({
                            title: "Are you Sure?",
                            text: `You Request Checking`,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, I Agree"
                        })
            }
           
        })
        
    }
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
                                        percel?.deliveryStatus === "rider_arriving" ? 
                                        
                                        
                                        <>

                                        <button
                                        onClick={()=>handelRejectsRide(percel)}
                                        className="btn btn-ghost bg-green-300 btn-xs">Rejects Rides</button>

                                       
                                        </>
                                        :

                                          <button
                                       onClick={()=> handelAccepetRide(percel)}
                                        className="btn btn-ghost bg-green-300 btn-xs">Accepet Ride</button>
                                    }
                                  
                                   
                                    {/* <button
                                       
                                        className="btn btn-ghost bg-green-300 btn-xs">Rejects Rides</button> */}
                                </td>

                                   <td>

                                      <button
                                        onClick={()=> handelPickUp(percel)}
                                        className="btn btn-ghost mx-2 bg-green-300 btn-xs">Mark As PickUP</button>

                                     
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