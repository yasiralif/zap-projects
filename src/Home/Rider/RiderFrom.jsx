import React, { useEffect, useState } from 'react';
import riderImage from '../../assets/agent-pending.png'
import { useForm } from 'react-hook-form';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const RiderFrom = () => {
    const [reginospromise, setreginospromise] = useState([])
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch
    } = useForm();
    useEffect(() => {
        fetch("/warehouses.json")
            .then(res => res.json())
            .then(d => setreginospromise(d))
    }, [])

    const dublicateRegions = reginospromise.map(c => c.region)
    const singelRegions = [...new Set(dublicateRegions)]
    const disctritBYRegions = (region) => {
        const discticts = reginospromise.filter(c => c.region === region)
        const disctict = discticts.map(d => d.district)
        return disctict;
    }

    const riderDistict = watch('district')

    const onSubmit = (data) => {
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Are you Sure?",
                        text: `You Request Checking`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, I Agree"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({

                                title: "Confirme",
                                text: "We are chcking your detalis",
                                icon: "success"
                            });
                        }
                    });
                }

            })  
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-start">
            <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Be a Rider</h1>
                    <p className="text-gray-600 mt-2">Fast & reliable parcel delivery, always on time.</p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-semibold text-gray-800 mb-5">Tell us about yourself</h2>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                            </div>

                            <div>
                                <input
                                    type="number"
                                    placeholder="Your age"
                                    className="input input-bordered w-full"
                                    {...register('age', { required: 'Age is required' })}
                                />
                                {errors.age && <p className="text-red-600 text-sm">{errors.age.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="email"
                                    // defaultValue={user?.email}
                                    value={user?.email}
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    {...register('email', { required: 'Email is required' })}
                                />
                                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Contact"
                                    className="input input-bordered w-full"
                                    {...register('contact', { required: 'Contact is required' })}
                                />
                                {errors.contact && <p className="text-red-600 text-sm">{errors.contact.message}</p>}
                            </div>


                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="text"
                                    placeholder="NID"
                                    className="input input-bordered w-full"
                                    {...register('nid', { required: 'NID is required' })}
                                />
                                {errors.nid && <p className="text-red-600 text-sm">{errors.nid.message}</p>}
                            </div>

                            <div>
                                <select
                                    className="select select-bordered w-full"
                                    {...register('district', { required: 'District is required' })}
                                >
                                    <option value="">Select your District</option>
                                    {
                                        singelRegions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                    }
                                </select>
                                {errors.district && <p className="text-red-600 text-sm">{errors.district.message}</p>}
                            </div>
                        </div>


                        <div>
                            <select
                                {...register("senderArea", { required: true })}
                                className="select select-bordered w-full rounded-xl h-14"
                            >
                                <option value="">Select your Area</option>

                                {
                                    disctritBYRegions(riderDistict).map((r, i) => <option value={r} key={i}>{r}</option>)
                                }
                            </select>
                            {errors?.senderArea && <p className="text-red-400">Required</p>}
                        </div>

                        <button
                            type="submit"
                            className="btn w-full bg-lime-300 text-gray-900 hover:bg-lime-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>

                <div className="flex justify-center items-center">
                    <img src={riderImage} alt="Rider Illustration" className="w-80 object-contain" />
                </div>
            </div>
        </div>
    );
}


export default RiderFrom;