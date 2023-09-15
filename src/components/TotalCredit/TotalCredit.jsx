const TotalCredit = ({totalCredit}) => {

    return (
        <div className="px-6 py-2">
            <p className="mb-3">Total Credit Hour : {totalCredit}</p>
            <div className="w-full h-0.5 bg-[#1C1B1B33]"></div>
        </div>
    );
};

export default TotalCredit;