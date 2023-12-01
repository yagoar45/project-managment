import LogoSvg from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Logo({ size, justify }) {
  const height = size === "sm" ? "h-6" : "h-8";
  const fontSize = size === "sm" ? "text-xl" : "text-2xl";

  let classes = "flex items-center gap-3";
  if (justify === "justify-center") classes += " justify-center";
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  return (
    <div className={classes} role="button" onClick={navigateToHome}>
      <img className={height} src={LogoSvg} alt="logo" />
      <h2 className={`${fontSize} tracking-widest font-medium mb-0.5`}>
        get<span className="text-primary">it</span>done.
      </h2>
    </div>
  );
}
