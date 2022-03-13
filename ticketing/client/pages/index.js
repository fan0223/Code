import axios from 'axios';
import buildClient from '../api/build-client'

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed</h1> : <h1>You are NOT signed in</h1>
}

LandingPage.getInitialProps = async (context) => {
  const build = buildClient(context)
  const {data} = await build.get('/api/users/currentuser')
  return data
};

export default LandingPage;
