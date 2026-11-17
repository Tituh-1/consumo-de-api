import { Link } from "react-router-dom";


function NavigateButton({ path, nome }) {
  return (
    <Link to={path}>
      {nome}
    </Link>
  );
}

export default NavigateButton;