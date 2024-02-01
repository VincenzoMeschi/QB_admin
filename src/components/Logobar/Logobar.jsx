import "./logobar.scss";
import logo from "../../assets/Ruff_Logo-min.svg";

const Logobar = () => {
  return (
    <div className="logobar">
      <img
        src={
          "https://assets-global.website-files.com/60c27b463f005335cfba29e9/60c29a17b05f08e62e90d0c8_logo.svg"
        }
        width={273.09}
        height={64}
        alt=""
      />
      <h3>Throw It Deep Admin</h3>
    </div>
  );
};

export default Logobar;
