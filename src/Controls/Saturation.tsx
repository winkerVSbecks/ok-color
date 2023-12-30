import * as Slider from '@radix-ui/react-slider';
import { EaseSelect } from '../EaseSelect';
import { Card } from '../Card';
import eases from '../eases';
import { Graph } from '../Graph';

export const Saturation = ({
  count,
  saturation,
  onSaturationChange,
}: {
  count: number;
  saturation: Saturation;
  onSaturationChange: (value: Saturation) => void;
}) => {
  const { sEasing, sRange } = saturation;

  return (
    <Card
      title="Saturation"
      summary={
        <div className="flex flex-column flex-row-ns flex-wrap justify-between g3 near-white">
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Min</dd>
            <dd className="f3 fw6 ml0">{saturation.sRange[0]}</dd>
          </dl>
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Max</dd>
            <dd className="f3 fw6 ml0">{saturation.sRange[1]}</dd>
          </dl>
          <dl className="db lh-title mv0">
            <dd className="f6 fw4 ml0">Easing</dd>
            <dd className="f3 fw6 ml0">{sEasing?.name}</dd>
          </dl>
        </div>
      }
    >
      <div>
        <Graph points={sEasing!.points} count={count} label="Hue" />
        <form className="near-white">
          <EaseSelect
            name="Saturation"
            value={saturation.sEasing!.name}
            onChange={(value) => {
              onSaturationChange({ ...saturation, sEasing: eases[value] });
            }}
          />
          {/* Range */}
          <div className="mb4">
            <div className="f6 b mb2">
              Saturation Range{' '}
              <span className="number">
                ({sRange[0]} — {sRange[1]})
              </span>
            </div>
            <Slider.Root
              aria-label="Saturation Range"
              className="SliderRoot"
              value={sRange}
              onValueChange={(values) =>
                onSaturationChange({
                  ...saturation,
                  sRange: values as [number, number],
                })
              }
              min={-2}
              max={2}
              step={0.1}
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
