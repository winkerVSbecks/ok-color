import { colorScheme, debugPalette } from './colors';
import Random from 'canvas-sketch-util/random';
import eases from './eases';
import { Nav } from './Nav';
import { setAppPalette } from './app-palette';
import { Palette } from './Palette';
import { Hue, Saturation, Lightness } from './Controls';
import { useEffect, useState } from 'react';

const randomEase = () => Random.pick(Object.values(eases));

function useColorScheme() {
  const [count, setCount] = useState(8);
  const [hue, setHue] = useState<Hue>({
    hStart: 179.157,
    hStartCenter: 0.5,
    hEasing: randomEase(),
    hCycles: 1.0,
  });
  const [saturation, setSaturation] = useState<Saturation>({
    sRange: [0.4, 0.96],
    sEasing: randomEase(),
  });
  const [lightness, setLightness] = useState<Lightness>({
    lRange: [0.04, 0.973],
    lEasing: randomEase(),
  });

  const [palette, setPalette] = useState<Color[]>([]);

  useEffect(() => {
    const _palette = colorScheme({
      total: count,
      hStart: hue.hStart,
      hStartCenter: hue.hStartCenter,
      hCycles: hue.hCycles,
      hEasing: hue.hEasing?.function,
      sRange: saturation.sRange,
      sEasing: saturation.sEasing!.function,
      lRange: lightness.lRange,
      lEasing: lightness.lEasing!.function,
    });
    const colors = _palette.map((c) => c.css);
    debugPalette(colors);
    setPalette(_palette);
    setAppPalette(_palette);
  }, [count, hue, saturation, lightness]);

  return {
    palette,
    count,
    hue,
    setHue,
    setCount,
    saturation,
    setSaturation,
    lightness,
    setLightness,
  };
}

function App() {
  const {
    palette,
    count,
    hue,
    setHue,
    setCount,
    saturation,
    setSaturation,
    lightness,
    setLightness,
  } = useColorScheme();

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
      <main className="pa3">
        <Palette
          colors={palette}
          count={count}
          onCountChange={(values) => setCount(values[0])}
        />
        <div className="controls flex flex-column g3">
          <Hue hue={hue} onHueChange={setHue} count={count} />
          <Saturation
            saturation={saturation}
            onSaturationChange={setSaturation}
          />
          <Lightness lightness={lightness} onLightnessChange={setLightness} />
        </div>
      </main>
    </>
  );
}

export default App;
