import * as Tabs from '@radix-ui/react-tabs';
import * as Slider from '@radix-ui/react-slider';
import { Card } from '../Card';
import { EaseSelect } from '../EaseSelect';
import { Graph } from '../Graph';
import eases from '../eases';

const tabItems = [
  {
    label: 'Ease',
    value: 'ease',
    content: 'Ease',
  },
  {
    label: 'Color Harmony',
    value: 'color-harmony',
    content: 'ColorHarmony',
  },
];

export const Hue = ({
  count,
  hue,
  onHueChange,
}: {
  count: number;
  hue: Hue;
  onHueChange: (value: Hue) => void;
  defaultOpen?: boolean;
}) => {
  return (
    <Tabs.Root className="TabsRoot" defaultValue={tabItems[0].value}>
      <Card
        defaultOpen
        title="Hue"
        summary={
          <div className="flex flex-column flex-row-ns flex-wrap justify-between g3 near-white">
            <dl className="db lh-title mv0">
              <dd className="f6 fw4 ml0">Start</dd>
              <dd className="f3 fw6 ml0">{hue.hStart}°</dd>
            </dl>
            <dl className="db lh-title mv0">
              <dd className="f6 fw4 ml0">Center</dd>
              <dd className="f3 fw6 ml0">{hue.hStartCenter}</dd>
            </dl>
            <dl className="db lh-title mv0">
              <dd className="f6 fw4 ml0">Cycles</dd>
              <dd className="f3 fw6 ml0">{hue.hCycles}</dd>
            </dl>
            <dl className="db lh-title mv0">
              <dd className="f6 fw4 ml0">Easing</dd>
              <dd className="f3 fw6 ml0">{hue.hEasing?.name}</dd>
            </dl>
          </div>
        }
        meta={
          <Tabs.List className="TabsList mb4" aria-label="Hue Mode">
            {tabItems.map((item) => (
              <Tabs.Trigger
                key={item.value}
                className="TabsTrigger f7 button-reset ttu tracked fw4"
                value={item.value}
              >
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        }
      >
        <Tabs.Content className="TabsContent" value="ease">
          <Ease hue={hue} onHueChange={onHueChange} count={count} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="color-harmony">
          Color Harmony
        </Tabs.Content>
      </Card>
    </Tabs.Root>
  );
};

function Ease({
  count,
  hue,
  onHueChange,
}: {
  hue: Hue;
  count: number;
  onHueChange: (value: Hue) => void;
}) {
  const { hStart, hStartCenter, hEasing, hCycles } = hue;

  return (
    <div>
      <Graph points={hEasing!.points} count={count} label="Hue" />
      <form className="near-white">
        <EaseSelect
          name="Hue"
          value={hEasing!.name}
          onChange={(value) => {
            onHueChange({ ...hue, hEasing: eases[value] });
          }}
        />
        {/* Hue Start */}
        <div className="mb4">
          <label htmlFor="hStart" className="f6 b db mb2">
            Hue Cycles <span className="number">({hStart}°)</span>
          </label>
          <Slider.Root
            className="SliderRoot"
            value={[hStart]}
            onValueChange={(values) =>
              onHueChange({ ...hue, hStart: values[0] })
            }
            min={-2}
            max={2}
            step={0.1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb
              className="SliderThumb"
              id="count"
              aria-describedby="hStart-desc"
            />
          </Slider.Root>
          <small id="hStart-desc" className="f6 silver db mb2">
            hue at the start of the ramp
          </small>
        </div>
        {/* Hue Start Center */}
        <div className="mb4">
          <label htmlFor="hStartCenter" className="f6 b db mb2">
            Hue Start Center <span className="number">({hStartCenter})</span>
          </label>
          <Slider.Root
            className="SliderRoot"
            value={[hStartCenter]}
            onValueChange={(values) =>
              onHueChange({ ...hue, hStartCenter: values[0] })
            }
            min={0}
            max={1}
            step={0.01}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb
              className="SliderThumb"
              id="count"
              aria-describedby="hStartCenter-desc"
            />
          </Slider.Root>
        </div>
        {/* Hue Cycles */}
        <div className="mb4">
          <label htmlFor="hCycles" className="f6 b db mb2">
            Hue Cycles <span className="number">({hCycles})</span>
          </label>
          <Slider.Root
            className="SliderRoot"
            value={[hCycles]}
            onValueChange={(values) =>
              onHueChange({ ...hue, hCycles: values[0] })
            }
            min={-2}
            max={2}
            step={0.1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb
              className="SliderThumb"
              id="count"
              aria-describedby="hCycles-desc"
            />
          </Slider.Root>
          <small id="hCycles-desc" className="f6 silver db mb2">
            Number of full hue cycles (.5 = 180°, 1 = 360°, 2 = 720°, etc.)
          </small>
        </div>
      </form>
    </div>
  );
}
