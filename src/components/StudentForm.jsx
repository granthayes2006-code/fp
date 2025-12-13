import { useEffect, useState } from 'react'

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const [form, setForm] = useState({
    id: '',
    firstName: '',
    lastName: '',
    gradYear: '',
    major: ''
  })

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent)
    }
  }, [editingStudent])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingStudent) {
      updateStudent(form)
    } else {
      addStudent({ ...form, id: Date.now() })
    }

    setForm({
      id: '',
      firstName: '',
      lastName: '',
      gradYear: '',
      major: ''
    })
  }

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5>{editingStudent ? 'Edit Student' : 'Add Student'}</h5>

      <input className="form-control mb-2" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
      <input className="form-control mb-2" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      <input className="form-control mb-2" name="gradYear" placeholder="Graduation Year" value={form.gradYear} onChange={handleChange} required />
      <input className="form-control mb-2" name="major" placeholder="Major" value={form.major} onChange={handleChange} required />

      <button className="btn btn-primary">
        <i className="fa-solid fa-save"></i> Save
      </button>
    </form>
  )
}

export default StudentForm
