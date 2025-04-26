import React, { useState } from 'react';

export default function StudentGradeTracker() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [threshold, setThreshold] = useState(70);

  const handleAddStudent = () => {
    if (name.trim() === '' || grade === '') return;

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      grade: parseFloat(grade),
    };

    setStudents([...students, newStudent]);
    setName('');
    setGrade('');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Grade Tracker</h1>

      {/* Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="border p-2 mr-2 rounded w-24"
        />
        <button
          onClick={handleAddStudent}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Student
        </button>
      </div>

      {/* Threshold Setter */}
      <div className="mb-6">
        <label className="mr-2 font-medium">Highlight Threshold:</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="border p-2 w-24 rounded"
        />
      </div>

      {/* Students List */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className={
                student.grade >= threshold
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }
            >
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Average Grade (Optional Bonus) */}
      {students.length > 0 && (
        <div className="mt-6 font-medium">
          Average Grade:{" "}
          {(
            students.reduce((sum, s) => sum + s.grade, 0) / students.length
          ).toFixed(2)}
        </div>
      )}
    </div>
  );
}
