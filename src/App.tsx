import { colorScheme, debugPalette } from './colors';
import Random from 'canvas-sketch-util/random';
import eases from './eases';
import { Nav } from './Nav';
import { setAppPalette } from './app-palette';
import { Palette } from './Palette';
import { Hue } from './Controls/Hue';
import { useState } from 'react';

const palette = colorScheme();
const colors = palette.map((c) => c.css);
debugPalette(colors);

const randomEase = () => Random.pick(Object.values(eases));
const lchEases = {
  h: randomEase(),
  c: randomEase(),
  l: randomEase(),
};

setAppPalette(palette);

function App() {
  const [count, setCount] = useState(8);

  return (
    <>
      <Nav />
      {/* <div className="flex pa3">
        {[
          '--primary',
          '--secondary',
          '--tertiary',
          '--surface',
          '--background',
        ].map((v) => (
          <div className="w4 h4 mr3" style={{ background: `var(${v})` }}></div>
        ))}
      </div> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'max-content 1fr max-content 1fr max-content 1fr',
          gap: '1rem',
        }}
        className="vh-100 pa3"
      >
        <Palette
          colors={palette}
          count={count}
          onCountChange={(values) => setCount(values[0])}
        />
        <Hue ease={lchEases.h} count={count} />
      </div>
    </>
  );
}

export default App;
