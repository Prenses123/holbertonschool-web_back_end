const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Reads student data asynchronously from a CSV file.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<string>} Formatted student list output.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(path, { encoding: 'utf-8' }, (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Split lines and filter out empty lines
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const responseHeader = 'This is the list of our students\n';

    countStudents(DB_FILE)
      .then((data) => {
        res.end(`${responseHeader}${data}`);
      })
      .catch((err) => {
        res.end(`${responseHeader}${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT);

module.exports = app;
