import propTypes from 'prop-types';

// function App() {
//   return (
//     <>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("チェンジ！")}}/>
//     </>
//   );
// }

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako"
    }
  ];

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return (
    <div>Hi! I am {props.name}, and {props.age} years old!</div>
  )
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number
}

export default App;
