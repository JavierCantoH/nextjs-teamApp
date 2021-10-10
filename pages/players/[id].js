// fetch data from external api
// tell next how many pages need to be made based on our data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(player => {
    return {
      params: { id: player.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

// for each page next will fecth each item we need
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { player: data }
  }
}

// pull the data
const Details = ( {player} ) => {
  return (
    <div>
      <h1>{ player.name }</h1>
      <p>{ player.email }</p>
      <p>{ player.website }</p>
      <p>{ player.address.city }</p>
    </div>
  );
}

export default Details;