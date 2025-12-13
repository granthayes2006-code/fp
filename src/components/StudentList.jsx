function StudentList({ students, deleteStudent, setEditingStudent }) {
  return (
    <div className="list-group">
      {students.map(student => (
        <div key={student.id} className="list-group-item d-flex justify-content-between">
          <div>
            <strong>{student.firstName} {student.lastName}</strong><br />
            Grad Year: {student.gradYear} | Major: {student.major}
          </div>
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => setEditingStudent(student)}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => deleteStudent(student.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StudentList
