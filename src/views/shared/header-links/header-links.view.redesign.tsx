import { useHeaderLinksRedesignStyles } from "./header-links.styles";
import { ReactComponent as ArrowRight } from "src/assets/icons/arrow-right-white.svg";
import { ReactComponent as LogoGatewayfm } from "src/assets/icons/chains/logo-gatewayfm.svg";

export const HeaderLinks = () => {
  const classes = useHeaderLinksRedesignStyles();
  const linksList = [
    { title: "Rollup", url: "https://gateway.fm/presto" },
    { title: "Stakeway", url: "https://stakeway.com/" },
    { title: "RPC", url: "https://gateway.fm/rpc" },
    { title: "Blog", url: "https://gateway.fm/blog" },
    { title: "About", url: "https://gateway.fm/about" },
    { title: "Careers", url: "https://boards.eu.greenhouse.io/gatewayfm" },
  ];

  const redirectToPrestoOnboarding = () => {
    window.open("https://presto.gateway.fm/onboarding", "_blank");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.linksContainer}>
        <LogoGatewayfm
          className={classes.logo}
          onClick={() => window.open("https://gateway.fm/", "_blank")}
        />
        {linksList.map(({ title, url }, index) => {
          return (
            <a
              className={classes.linkItem}
              href={url}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title}
            </a>
          );
        })}
      </div>
      <button className={classes.button} onClick={redirectToPrestoOnboarding}>
        Deploy rollup <ArrowRight className={classes.icon} />
      </button>
    </div>
  );
};
