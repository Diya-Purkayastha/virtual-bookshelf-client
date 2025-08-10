import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title =`VRbooK | ${title}`;
    },[ ])
};

export default useTitle;