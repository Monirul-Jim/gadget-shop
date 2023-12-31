import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    // const clearWaitingQueue = () => {
    //     toast.clearWaitingQueue();
    // }

    let customId = "success1";

    let notify = () => {
        toast.success("Welcome to Unity Mart!", {
            pauseOnFocusLoss: false
        }, {
            toastId: customId
        }, {
            theme: "dark"
        });
    }

    const [setCNotify] = useState(notify);

    const Updating = () => {
        notify = () => {
            toast(<div className='flex justify-center items-center'>
                <img className='w-24' src="https://i.ibb.co/1TdmzMg/apple-watch-1.png" alt="" />
                <div>
                    <p>Someone buy this apple watch</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            },
                {
                    theme: "dark"
                });
            toast(<div className='flex justify-center items-center'>
                <img className='w-24' src="https://i.ibb.co/JtB5FWQ/google-pixel-blue.jpg" alt="" />
                <div>
                    <p>Someone buy this google pixel</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            }, {
                theme: "dark"
            });
            toast(<div className='flex justify-center items-center'>
                <img className='w-24' src="https://i.ibb.co/0Xfks40/headphone-2.png" alt="" />
                <div>
                    <p>Someone buy this beats headphone</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            },
                { toastId: customId }, {
                theme: "dark"
            });
        }
        setCNotify(notify);
    }

    setTimeout(Updating, 15000)
    return (
        <div>
            <ToastContainer
                position='bottom-left'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
                dismissAll={25000}
            />
        </div>
    );
}
export default Notify;