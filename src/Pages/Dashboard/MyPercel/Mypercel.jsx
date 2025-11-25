import React from 'react';

const Mypercel = () => {
    return (
        <div>

            <div class="min-h-screen bg-gray-100 p-6">
                <div class="max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-sm">

                    {/* <!-- Heading --> */}
                    <h1 class="text-4xl font-bold text-teal-900 mb-8">
                        Parcel Details
                    </h1>

                    {/* <!-- Sender + Receiver Info --> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* <!-- Sender Info --> */}
                        <div class="bg-gray-100 p-6 rounded-xl">
                            <h2 class="text-xl font-semibold mb-4">Sender Info</h2>

                            <div class="space-y-2 text-sm">
                                <p><span class="font-semibold">Name</span> : Zahid Hossain</p>
                                <p><span class="font-semibold">Phone</span> : +8801758000056</p>
                                <p><span class="font-semibold">Email</span> : zahid@example.com</p>
                                <p><span class="font-semibold">Region</span> : Dhaka, Bangladesh</p>
                                <p><span class="font-semibold">Address</span> : Gulshan Badda Link Rd, Dhaka 1212</p>
                            </div>
                        </div>

                        {/* <!-- Receiver Info --> */}
                        <div class="bg-gray-100 p-6 rounded-xl">
                            <h2 class="text-xl font-semibold mb-4">Receiver Info</h2>

                            <div class="space-y-2 text-sm">
                                <p><span class="font-semibold">Name</span> : Zahid Hossain</p>
                                <p><span class="font-semibold">Phone</span> : +8801758000056</p>
                                <p><span class="font-semibold">Email</span> : zahid@example.com</p>
                                <p><span class="font-semibold">Region</span> : Dhaka, Bangladesh</p>
                                <p><span class="font-semibold">Address</span> : Gulshan Badda Link Rd, Dhaka 1212</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Parcel Details --> */}
                    <div class="bg-gray-100 p-6 rounded-xl mt-6">
                        <h2 class="text-xl font-semibold mb-4">Parcel details</h2>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                            <p><span class="font-semibold">Title</span> : Zahid Hossain</p>
                            <p><span class="font-semibold">Type</span> : Mango</p>

                            <p><span class="font-semibold">Weight</span> : 5 KG</p>
                            <p><span class="font-semibold">Charge</span> : Tk 320</p>

                            <p><span class="font-semibold">Status</span> : Pending</p>
                            <p><span class="font-semibold">Pickup Instruction</span> : N/A</p>

                            <p><span class="font-semibold">Delivery Instruction</span> : N/A</p>
                            <p><span class="font-semibold">Tracking Number</span> : 25820</p>

                            <p><span class="font-semibold">Pickup OTP</span> : 6345</p>
                            <p><span class="font-semibold">Delivery OTP</span> : 5555</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Mypercel;