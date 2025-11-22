import React from 'react';

const ReviewsCard = ({review}) => {
    const {userName, user_email , user_photoURL,}=review
    return (
        <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
<div className="flex items-start gap-4">
{/* Quote icon */}
<svg className="w-8 h-8 text-teal-200 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 4.5C7.29 4.5 5.5 6.29 5.5 8.5C5.5 10.71 7.29 12.5 9.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 4.5C16.29 4.5 14.5 6.29 14.5 8.5C14.5 10.71 16.29 12.5 18.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


<p className="text-gray-700 leading-relaxed text-base">
{review.
review
}
</p>
</div>


<hr className="my-6 border-t-2 border-dashed border-gray-200" />


<div className="flex items-center gap-4">
<div className="avatar">
<div className="w-12 rounded-full ring-2 ring-teal-900/10">
<img src={user_photoURL} alt="Awlad Hossin" />
</div>
</div>


<div>
<h3 className="text-teal-900 font-semibold text-lg">{userName}</h3>
<p className="text-gray-500 text-sm">{user_email}</p>
</div>
</div>
</div>
    );
};

export default ReviewsCard;