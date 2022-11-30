import React, { useEffect, useState } from 'react';

const SellerProvider = (email) => {
    const [isType, setIsType] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://quicker-seven.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsType(data.isType);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isType, isSellerLoading]
};

export default SellerProvider;