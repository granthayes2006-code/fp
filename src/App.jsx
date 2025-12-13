import { useEffect, useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import SearchBar from './components/SearchBar'

function App() {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [editingStudent, setEditingStudent] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('students')
    if (stored) {
      setStudents(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const addStudent = (student) => {
    setStudents([...students, student])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id))
  }

  const updateStudent = (updated) => {
    setStudents(
      students.map(s => (s.id === updated.id ? updated : s))
    )
    setEditingStudent(null)
  }

  const filteredStudents = students.filter(s =>
    s.firstName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">
        <i className="fa-solid fa-user-graduate"></i> Student CRUD App
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <StudentForm
        addStudent={addStudent}
        editingStudent={editingStudent}
        updateStudent={updateStudent}
      />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />
    </div>
  )
}

export default App
