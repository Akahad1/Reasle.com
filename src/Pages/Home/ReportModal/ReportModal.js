import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ReportModal = ({product}) => {
    const {user}=useContext(AuthContext)
    const {name}=product;

    const reporthandelr=(event)=>{
        event.preventDefault()
        const form=event.target;
        const cause=form.cause.value;
        const report=form.Report.value;
        console.log(cause,report)
        const email=user?.email
        
        const reports={
            productName:name,
            RepoterEmail:email,
            ReportCause:cause,
            Report:report

        }
        fetch(`https://resale-com-server.vercel.app/report`,{
            method:"POST",
            headers:{
                'content-type': 'application/json',
                authorization :`bearer ${localStorage.getItem('accesToken')}`

            },
            body: JSON.stringify(reports)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.acknowledged){
                toast.success('Report add successfully')
                form.reset()
            }
        })

    }
    return (
        <div>
            



<input type="checkbox" id="Report-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="Report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p>Why you Report</p>
    <form onSubmit={reporthandelr}>
    <input type="text" name='cause' placeholder='Type Cause '  className="input input-bordered mt-4 w-full "  required/>
    <p>Enter Report</p>
    <input type="text" name='Report' placeholder='Type Report'  className="input input-bordered mt-4 w-full " required />

<button className='btn'>Submit</button>
    

    </form>
    
  </div>
</div>
            
        </div>
    );
};

export default ReportModal;