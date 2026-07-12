/**
 * Extracts ids from an array of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array<number>} An array of student ids, or an empty array if the input is invalid.
 */
const getListStudentIds = (students) => {
    if (!Array.isArray(students)) {
      return [];
    }
  
    return students.map((student) => student.id);
  };
  
  export default getListStudentIds;
