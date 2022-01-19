import React , { useState } from 'react';

const UserSummary = () =>{
    const [detailsVisible,setDeatilsVisible] = useState(false);
    return(
        <section>
            <p>You can view the details for the user vy clicking the button.</p>
            <div
                style={{
                    boxShadow:'0 2px 6px rgba(0,0,0.26)',
                    padding:'1rem',
                    borderRadius:'10px'
                }}
            >
                <h2>Maximilian</h2>
                
            </div>
        </section>
    )
}