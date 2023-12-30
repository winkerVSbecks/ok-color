export const Nav = ({ randomizeConfig }: { randomizeConfig: () => void }) => (
  <header className="flex bg-surface justify-between pa3 pa4-ns">
    <nav className="nav">
      <a className="link dim primary b f6 f5-ns dib mr3" href="#">
        OK Color
      </a>
      <a className="link dim silver f6 f5-ns dib mr3" href="#hue">
        Hue
      </a>
      <a className="link dim silver f6 f5-ns dib mr3" href="#saturation">
        Saturation
      </a>
      <a className="link dim silver f6 f5-ns dib mr3" href="#lightness">
        Lightness
      </a>
    </nav>
    <div>
      <button
        onClick={randomizeConfig}
        className="f7 white hover-primary bg-black ba border-box b--currentcolor"
      >
        Randomize
      </button>
    </div>
  </header>
);
