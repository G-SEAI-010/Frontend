import Grade from './Grade.jsx';

export default function Student({ infos }) {
  // console.log(props);
  return (
    <article className='card'>
      <img src={infos.picture} alt='' className='card-image' />

      <div className='card-body'>
        <h2>
          {infos.firstName} {infos.lastName}
        </h2>
        <p>Age: {infos.age}</p>
        <p>City: {infos.city}</p>
        <p>Course: {infos.course}</p>
        <p>Status: {infos.graduate ? 'Alumni' : 'In progress'}</p>
        <Grade points={infos.gpa} />
      </div>
    </article>
  );
}
