import { useEffect } from "react";
import { useState } from "react";
import Course from "../../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('./courses.json');
            const data = await response.json();
            setCourses(data);
        }
        fetchData();
    },[])

    return (
        <div className="mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 gap-6">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
        <div className="w-1/5">

        </div>
        </div>
    );
};

export default Courses;