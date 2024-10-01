import PropTypes from "prop-types"; // ES6

const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <li className="mr-10 px-6 hover:bg-yellow-500">
      <a href={path}>{name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
