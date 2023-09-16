# FAQs
# Question - 01 : Add at least 3 Project features
***
The course is about Course Registration. You can choose any course which you like to learn. The project features in this course are - 
* When you choose the courses you want to learn, then you should have click a button called submit. when you clicked that button there a area called Course Name. The courses name will be added on that area. You cannot choose a course twice. if you select than you get a error message.
* There are a area called Total Credit Hour. If you click submit button, your course's credit hour will be added in that area. Also you can select highest 20 hours credit time. If you select more than 20 hours credit time, you can get a error message.
* The limit of credit hour is 20. There are another area called Credit Hour remaining. when you click that submit button, your selected credit hours will be deducted from your remaining credit hours. When the value of remaining credit hour is 0, than you cannot select course more courses. If you select than you get a error message.

# Question - 02 : Discuss how you managed the state in your assignment project.
***
I use 4 states in my assignment. 
* A useState contains Current State and A function that updates the state. The first useState is used for get the data from api. For getting that data, i used useEffect so that the data cannot render more than once. then i show the data on my website.
* The second useState is used for set Course Name on Course Name area. For setting Course Name,
first i created a function in my Courses.jsx component, then i set a onClick function on Submit Button in Course.jsx component. then i wrap that onClick function and call this function and then i sent object by using this function. then i sent the object on Courses.jsx by usings object destructuring. On my Courses.jsx component, i create an array. then i set the current state in an empty array. then i spread that current state and object value which i get from onClick wrapping. then i update the state.
* The third useState is used for setTotalCredit on Total Credit Hour Area. initially i assume Current State 0. then i use find method on my onClick Function. and check if id is matched or not. i assume a value, course.id so that when i click a button it will give me the credit hour. then i will get undefined that's why i use Conditional rendering. and i set toast on my if condition. on my else condition, i added the assume value with second useState current credit hour. if credit Hours is greater than 20, then i use a toast by using if condition. and on that else condition i cut the previous all setState values and paste them this values on my else condition. then i update that state.
* the fourth useState is used for deducted the value of Credit Hour remaining. in this time, i assume current value 20. then on my onClick function, i deducted 20 - creditHours, so that i get the value of remaining credit Hour. then i update the state.