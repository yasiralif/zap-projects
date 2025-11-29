import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../Hooks/useAxios';

const RiderCheck = () => {
    const axiosSecure = useAxios();
    const {data:parcel=[] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            // console.log(res.data);
            return res.data


        }
    })
    // console.log(parcel);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>NID Number</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcel.map((d,i)=>(    <tr key={d._id}>
                               <th>{i+1}</th>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.nid}</td>
                            <td>{d?.district}</td>
                            <td>12/16/2020</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">details</button>
                                <button className="btn btn-ghost mx-3 btn-xs">Approve</button>
                                <button className="btn btn-ghost btn-xs">Rejects</button>
                                
                            </td>
                         
                        </tr>))

                        }
                     
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default RiderCheck;