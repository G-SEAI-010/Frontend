import Student from './components/Student.jsx';

const studentData = {
  id: 1,
  firstName: 'Tom',
  lastName: 'McTest',
  age: 40,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  gpa: 60,
  graduate: false,
};
const studentData2 = {
  id: 2,
  firstName: 'Johan',
  lastName: 'McTest',
  age: 42,
  course: 'Softwareentwicklung',
  city: 'Rostock',
  picture: 'https://randomuser.me/api/portraits/men/2.jpg',
  gpa: 95,
  graduate: true,
};

function App() {
  return (
    <>
      <h1>Displaying Data</h1>
      <main style={{ display: 'flex' }}>
        <Student infos={studentData} />
        <Student infos={studentData2} />
        {/* <Student /> */}
        {/* <Student /> */}
      </main>
    </>
  );
}

export default App;
