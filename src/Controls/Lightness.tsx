import * as Slider from '@radix-ui/react-slider';
import { EaseSelect } from '../EaseSelect';
import { Card } from '../Card';
import eases from '../eases';
import { Graph } from '../Graph';

export const Lightness = ({
  count,
  lightness,
  onLightnessChange,
}: {
  count: number;
  lightness: Lightness;
  onLightnessChange: (value: Lightness) => void;
}) => {
  const { lEasing, lRange } = lightness;
  return (
    <Card
      title="Lightness"
      summary={
        <div className="flex flex-column flex-row-ns flex-wrap justify-between g3 near-white">
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Min</dd>
            <dd className="f3 fw6 ml0">{lightness.lRange[0]}</dd>
          </dl>
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Max</dd>
            <dd className="f3 fw6 ml0">{lightness.lRange[1]}</dd>
          </dl>
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Easing</dd>
            <dd className="f3 fw6 ml0">{lightness.lEasing?.name}</dd>
          </dl>
        </div>
      }
    >
      <div>
        <Graph points={lEasing!.points} count={count} label="Hue" />
        <form className="near-white">
          <EaseSelect
            name="Lightness"
            value={lightness.lEasing!.name}
            onChange={(value) => {
              onLightnessChange({ ...lightness, lEasing: eases[value] });
            }}
          />
          {/* Range */}
          <div className="mb4">
            <div className="f6 b mb2">
              Lightness Range{' '}
              <span className="number">
                ({lRange[0]} — {lRange[1]})
              </span>
            </div>
            <Slider.Root
              aria-label="Lightness Range"
              className="SliderRoot"
              value={lRange}
              onValueChange={(values) =>
                onLightnessChange({
                  ...lightness,
                  lRange: values as [number, number],
                })
              }
              min={0}
              max={1}
              step={0.01}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" />
              <Slider.Thumb className="SliderThumb" />
            </Slider.Root>
          </div>
        </form>
      </div>
    </Card>
  );
};
