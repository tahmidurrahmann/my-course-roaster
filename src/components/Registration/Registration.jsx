const Registration = ({ registration, index }) => {
    const { cource_name } = registration;
    return (
        <div>
            <div className="px-6">
                <h2 className="text-[#1C1B1B99] my-2">{index + 1} {cource_name}</h2>
            </div>
        </div>
    );
};

export default Registration;