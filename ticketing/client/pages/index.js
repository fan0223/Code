import axios from 'axios'

const LandingPage = ({currentUser}) => {
  console.log(currentUser)
  return <h1> Landing page</h1>;
};

LandingPage.getInitialProps = async() => {
  const response = await axios.get('http://ticketing.dev/api/users/currentuser')

  return response;
};

export default LandingPage;
