import { colorScheme, debugPalette } from './colors';
import Random from 'canvas-sketch-util/random';
import eases from './eases';
import { Nav } from './Nav';
import { setAppPalette } from './app-palette';
import { Palette } from './Palette';
import { Hue, Saturation, Lightness } from './Controls';
import { useEffect, useState } from 'react';

const randomEase = () => Random.pick(Object.values(eases));

const randomHue = (): Hue => ({
  hStart: Random.rangeFloor(0, 360),
  hStartCenter: 0.5,
  hEasing: randomEase(),
  hCycles: 1.0,
});

const roundToTwo = (n: number) => Math.round(n * 100) / 100;

const randomSaturation = (): Saturation => {
  const sMin = roundToTwo(Random.range(0.2, 0.5));
  return {
    sRange: [sMin, roundToTwo(Random.range(sMin, 1.0))],
    sEasing: randomEase(),
  };
};

const randomLightness = (): Lightness => {
  const lMin = roundToTwo(Random.range(0.1, 0.5));
  return {
    lRange: [lMin, roundToTwo(Random.range(lMin, 0.8))],
    lEasing: randomEase(),
  };
};

function useColorScheme() {
  const [count, setCount] = useState(8);
  const [hue, setHue] = useState<Hue>(randomHue());
  const [saturation, setSaturation] = useState<Saturation>(randomSaturation());
  const [lightness, setLightness] = useState<Lightness>(randomLightness());

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

  function randomConfig() {
    setCount(Random.rangeFloor(4, 12));
    setHue(randomHue());
    setSaturation(randomSaturation());
    setLightness(randomLightness());
  }

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
    randomConfig,
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
    randomConfig,
  } = useColorScheme();

  return (
    <>
      <Nav randomizeConfig={randomConfig} />
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
            count={count}
          />
          <Lightness
            lightness={lightness}
            onLightnessChange={setLightness}
            count={count}
          />
        </div>
      </main>
    </>
  );
}

export default App;
