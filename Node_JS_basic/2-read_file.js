const fs = require('fs');

/**
 * Counts and logs student data synchronously from a CSV file.
 * @param {string} path - Path to the CSV file.
 */
const countStudents = (path) => {
  let content;

  try {
    content = fs.readFileSync(path, { encoding: 'utf-8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split lines and filter out empty ones
  const lines = content.split('\n').filter((line) => line.trim().length > 0);

  // If file is empty or only has a header, handle zero students
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Extract header and student rows
  const students = lines.slice(1);
  console.log(`Number of students: ${students.length}`);

  // Map to store students grouped by field: { CS: ['Name1', 'Name2'], SWE: [...] }
  const fields = {};

  for (const student of students) {
    const fieldsData = student.split(',');
    const firstname = fieldsData[0].trim();
    const field = fieldsData[fieldsData.length - 1].trim();

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  // Log summary per field
  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
};

module.exports = countStudents;
