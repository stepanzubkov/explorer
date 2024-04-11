import { MouseEvent } from "react";

export type NAVIGATION_TYPE = "back" | "forward" | "reload" | "above";
export type NAVIGATION_HANDLER = (e: MouseEvent, type: NAVIGATION_TYPE) => any;
type NAVIGATION_HEADER_PROPS = {
  path: string;
  disabledActions: NAVIGATION_TYPE[];
  onNavigate: NAVIGATION_HANDLER;
};

function ArrowLeft() {
  return (
    <svg width="24px" height="24px" viewBox="0 -6.5 36 36" fill="currentColor">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-342.000000, -159.000000)" fillRule="nonzero">
          <g transform="translate(50.000000, 120.000000)">
            <path
              d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z"
              transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -6.5 36 36"
      version="1.1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-212.000000, -159.000000)" fillRule="nonzero">
          <g transform="translate(50.000000, 120.000000)">
            <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

function ArrowReload() {
  return (
    <svg
      fill="currentColor"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z" />
    </svg>
  );
}

function ArrowAbove() {
  return (
    <svg
      fill="currentColor"
      width="24px"
      height="24px"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z" />
    </svg>
  );
}

function NavigationHeaderButton({
  disabled,
  action,
  children,
  onNavigate,
}: {
  disabled: boolean;
  action: NAVIGATION_TYPE;
  children: any;
  onNavigate: NAVIGATION_HANDLER;
}) {
  const className = `header-icon-${disabled ? "disabled" : "enabled"} ${
    "header-icon-" + action
  }`;
  return (
    <a
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(e, action);
      }}
    >
      {children}
    </a>
  );
}
export function NavigationHeader({
  path,
  onNavigate,
  disabledActions,
}: NAVIGATION_HEADER_PROPS) {
  /**
   * Header that displays navigation data and used to navigate within explorer
   */

  // TODO: Allow to search, fill header with bar, etc
  return (
    <div className="header">
      <div className="header-left-icon-tab">
        <NavigationHeaderButton
          onNavigate={onNavigate}
          disabled={disabledActions.includes("back")}
          action="back"
        >
          <ArrowLeft />
        </NavigationHeaderButton>

        <NavigationHeaderButton
          onNavigate={onNavigate}
          disabled={disabledActions.includes("forward")}
          action="forward"
        >
          <ArrowRight />
        </NavigationHeaderButton>

        <NavigationHeaderButton
          onNavigate={onNavigate}
          disabled={disabledActions.includes("above")}
          action="above"
        >
          <ArrowAbove />
        </NavigationHeaderButton>

        <NavigationHeaderButton
          onNavigate={onNavigate}
          disabled={disabledActions.includes("reload")}
          action="reload"
        >
          <ArrowReload />
        </NavigationHeaderButton>
      </div>
      <div className="header-path-bar">
        <span>{path}</span>
      </div>
    </div>
  );
}