import React, { useEffect } from 'react';


const Mouse = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
    
        window.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });

        
    }, []);
    return (
        <span className='cursor'></span>
    );
};

export default Mouse;