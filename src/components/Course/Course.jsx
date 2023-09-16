import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
    const Course = ({ course, handleSubmit, ToastContainer }) => {

    const { image, cource_name, details, price, credit_hours } = course;

    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <div className="flex items-center justify-center">
                <img className="w-full" src={image} alt={`${image} of Course`} />
            </div>
            <div className="text-center">
                <h2 className="my-4 text-lg font-semibold text-[#1C1B1B]">{cource_name}</h2>
                <p className="text-[#1C1B1B99] font-medium mb-3">{details}</p>
            </div>
            <div className="my-3 flex justify-between items-center text-[#1C1B1B99] font-medium">
                <p className="flex gap-2 items-center"> <FiDollarSign size='1.5rem' color='#1C1B1B'></FiDollarSign>  Price : {price}</p>
                <p className="flex gap-2 items-center"> <BsBook size='1.5rem' color='#1C1B1B'></BsBook> Credit : {credit_hours}hr</p>
            </div>
            <div>
                <button onClick={()=>handleSubmit(course)} className="my-1 text-lg font-semibold text-center py-3 rounded-xl bg-[#2F80ED] text-white w-full">Submit</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Course;