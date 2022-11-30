import { useEffect, useState } from 'react';

const VerifySeller = (email) => {
    const [isVerify, setIsVerify] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://quicker-seven.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsVerify(data.isVerify);
                    setIsSellerLoading(false);
            
                })
        }
    }, [email])
    return [isVerify, isSellerLoading]
};

export default VerifySeller;