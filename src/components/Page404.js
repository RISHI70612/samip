import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <h1>404 page</h1>
      <p>THIS URL IS NOT PRESENT</p>
      <Link to="/"> go to home page</Link>
    </div>
  )
}
export default Page404
