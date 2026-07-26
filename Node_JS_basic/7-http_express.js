const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Reads student data asynchronously from a CSV file.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<string>} Formatted student list output.
 */
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, { encoding: 'utf-8' }, (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split lines and filter out empty ones
      const lines = content.split('\n').filter((line) => line.trim().length > 0);

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const students = lines.slice(1);
      let output = `Number of students: ${students.length}`;

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

      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(output);
    });
  });
};

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const responseHeader = 'This is the list of our students\n';

  countStudents(DB_FILE)
    .then((data) => {
      res.send(`${responseHeader}${data}`);
    })
    .catch((err) => {
      res.send(`${responseHeader}${err.message}`);
    });
});

app.listen(PORT);

module.exports = app;
