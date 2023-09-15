import Registration from "../Registration/Registration";

const Registrations = ({registrations}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="px-6">
            <div className="w-full h-0.5 bg-[#1C1B1B33]"></div>
            </div>
            <h1 className="text-[#1C1B1B] text-xl font-bold px-6 mt-4">Course Name</h1>
            <div>
                {
                    registrations.map((registration, index) => <Registration index={index} key={registration.id} registration={registration}></Registration>)
                }
            </div>
        </div>
    );
};

export default Registrations;