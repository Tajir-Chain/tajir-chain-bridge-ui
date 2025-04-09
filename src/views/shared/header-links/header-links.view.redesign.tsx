import { useEffect, useRef, useState } from "react";
import { useHeaderLinksRedesignStyles } from "./header-links.styles";
import { ReactComponent as ArrowRight } from "src/assets/icons/arrow-right-white.svg";
import { ReactComponent as BurgerMenuIcon } from "src/assets/icons/burger-menu.svg";
import { ReactComponent as LogoGatewayfm } from "src/assets/icons/chains/logo-gatewayfm.svg";

type LinkItem = { title: string; url: string };

export const HeaderLinks = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const classes = useHeaderLinksRedesignStyles();
  const isMobile = window.innerWidth < 768;

  const linksList: LinkItem[] = [
    { title: "Rollup", url: "https://gateway.fm/presto" },
    { title: "Stakeway", url: "https://stakeway.com/" },
    { title: "RPC", url: "https://gateway.fm/rpc" },
    { title: "Blog", url: "https://gateway.fm/blog" },
    { title: "About", url: "https://gateway.fm/about" },
    { title: "Careers", url: "https://boards.eu.greenhouse.io/gatewayfm" },
    ...(isMobile ? [{ title: "Deploy rollup", url: "https://presto.gateway.fm/onboarding" }] : []),
  ];

  const onOpenBurgerMenu = () => {
    setOpenBurgerMenu((prev) => !prev);
  };

  const redirectToPrestoOnboarding = () => {
    window.open("https://presto.gateway.fm/onboarding", "_blank");
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      // If the click is inside the menu container:
      if (menuRef.current && menuRef.current.contains(target)) {
        // If the clicked element is not inside an anchor element, close the menu
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        if (!(target as HTMLElement).closest("a")) {
          setOpenBurgerMenu(false);
        }
      } else if (
        // Otherwise, if the click is outside the burger icon as well, close the menu.
        burgerIconRef.current &&
        !burgerIconRef.current.contains(target)
      ) {
        setOpenBurgerMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.linksAndLogoContainer}>
        <LogoGatewayfm
          className={classes.logo}
          onClick={() => window.open("https://gateway.fm/", "_blank")}
        />
        <div ref={burgerIconRef}>
          <BurgerMenuIcon
            className={`${classes.burgerMenu} ${
              openBurgerMenu ? classes.openedBurgerMenuIcon : ""
            }`}
            onClick={onOpenBurgerMenu}
          />
        </div>
        <div
          className={classes.linksContainer}
          ref={menuRef}
          style={{ display: openBurgerMenu || !isMobile ? "flex" : "none" }}
        >
          {linksList.filter(Boolean).map(({ title, url }, index) => (
            <a
              className={classes.linkItem}
              href={url}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <button className={classes.button} onClick={redirectToPrestoOnboarding}>
        Deploy rollup <ArrowRight className={classes.icon} />
      </button>
    </div>
  );
};
