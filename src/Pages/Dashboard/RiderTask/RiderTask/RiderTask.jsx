import React from 'react';
import useAxios from '../../../../Hooks/useAxios';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const RiderTask = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const { data: percels = [] } = useQuery({
        queryKey: ['delivery-status', user?.email, 'rider-assign'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percel/rider?riderEmail=${user?.email}&deliveryStatus=rider-assign`)
            return res.data
        }
    })
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

                                    <button
                                       
                                        className="btn btn-ghost bg-green-300 btn-xs">Accepet Ride</button>
                                    <button
                                       
                                        className="btn btn-ghost mx-2 bg-green-300 btn-xs">Mark As PickUP</button>
                                    <button
                                       
                                        className="btn btn-ghost bg-green-300 btn-xs">Rejects Rides</button>
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