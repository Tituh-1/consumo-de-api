import { Link } from "react-router-dom";


function NavigateButton({ path, nome }) {
  return (
    <Link to={path} className="navigation">
      {nome}
    </Link>
  );
}

export default NavigateButton;