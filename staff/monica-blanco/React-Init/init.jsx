const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'Josh Perez';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
root.render(<h1>Hello, world!!! {name}, {formatName(user)}</h1>);