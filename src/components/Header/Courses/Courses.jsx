import { useEffect } from "react";
import { useState } from "react";
import Course from "../../Course/Course";
import Registrations from "../../Registrations/Registrations";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const [registrations, setRegistrations] = useState([]);

    const handleSubmit = (course) => {
        const showOnce = registrations.find(registration => registration.id === course.id);
        if (showOnce) {
            alert('added once')
        }
        else {
            const newRegistrations = [...registrations, course];
            setRegistrations(newRegistrations);
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
                    courses.map(course => <Course key={course.id} handleSubmit={handleSubmit} course={course}></Course>)
                }
            </div>
            <div className="w-1/5">
                <Registrations registrations={registrations}></Registrations>
            </div>
        </div>
    );
};

export default Courses;