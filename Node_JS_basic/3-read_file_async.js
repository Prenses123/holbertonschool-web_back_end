const fs = require('fs');

/**
 * Counts and logs student data asynchronously from a CSV file.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<void>}
 */
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split lines and filter out empty ones
      const lines = content.split('\n').filter((line) => line.trim().length > 0);

      // Handle empty file or header-only file
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // Extract header and student rows
      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);

      // Map to store students grouped by field
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

      resolve();
    });
  });
};

module.exports = countStudents;
