import { useEffect } from "react";
import { useState } from "react";
import Course from "../../Course/Course";
import Registrations from "../../Registrations/Registrations";
import TotalCredit from "../../TotalCredit/TotalCredit";
import CreditHourRemaining from "../../CreditHourRemaining/CreditHourRemaining";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const [registrations, setRegistrations] = useState([]);

    const [totalCredit, setTotalCredit ] = useState(0);

    const [remainingHour, setRemainingHour] = useState(20);

    const handleSubmit = (course) => {
        const showOnce = registrations.find(registration => registration.id === course.id);
        let creditHours = course.credit_hours;
        if (showOnce) {
            toast('You cannot choose a course twice. Thank You!')
        }
        else {
            registrations.forEach(registration => {
                creditHours += registration.credit_hours;
            })
            if (creditHours > 20) {
                toast('Insufficient credit hours.');
            }
            else {
                const remaining = 20 - creditHours;
                setRemainingHour(remaining)
                const newRegistrations = [...registrations, course];
                setRegistrations(newRegistrations);
                setTotalCredit(creditHours)
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./courses.json');
            const data = await response.json();
            setCourses(data);
        }
        fetchData();
    }, [])

    return (
        <div className="mx-16 flex gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 gap-6">
                {
                    courses.map(course => <Course key={course.id} ToastContainer={ToastContainer} handleSubmit={handleSubmit} course={course}></Course>)
                }
            </div>
            <div className="w-1/5">
                <CreditHourRemaining remainingHour={remainingHour}></CreditHourRemaining>
                <Registrations registrations={registrations}></Registrations>
                <TotalCredit totalCredit={totalCredit}></TotalCredit>
            </div>
        </div>
    );
};

export default Courses;