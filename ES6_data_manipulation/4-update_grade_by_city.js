/**
 * Updates the grades of students in a specific city based on a given list of new grades.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The target city.
 * @param {Array} newGrades - The array of grade objects containing studentId and grade.
 * @returns {Array} A new array of student objects with updated grade properties.
 */
const updateStudentGradeByCity = (students, city, newGrades) => {
    return students
      // 1. Filter out students who aren't in the target city
      .filter((student) => student.location === city)
      // 2. Map over the filtered students to attach or update their grade
      .map((student) => {
        // Find a matching grade object for the current student's id
        const gradeRecord = newGrades.find((g) => g.studentId === student.id);
  
        return {
          ...student,
          // If a grade record exists, use it; otherwise, default to 'N/A'
          grade: gradeRecord ? gradeRecord.grade : 'N/A'
        };
      });
  };
  
  export default updateStudentGradeByCity;
