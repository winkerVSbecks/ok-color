import { Card } from '../Card';
import { EaseSelect } from '../EaseSelect';
import { Graph } from '../Graph';
import * as Tabs from '@radix-ui/react-tabs';

const tabItems = [
  {
    label: 'Ease',
    value: 'ease',
    content: 'Ease' /* <Ease ease={ease} count={count} /> */,
  },
  {
    label: 'Color Harmony',
    value: 'color-harmony',
    content: 'ColorHarmony' /* <ColorHarmony ease={ease} count={count} /> */,
  },
];

export const Hue = ({ ease, count }: { ease: Ease; count: number }) => (
  <Card>
    <Tabs.Root className="TabsRoot" defaultValue={tabItems[0].value}>
      <div className="flex align-center justify-between mb6">
        <h2 className="f7 ttu tracked near-white fw4 ma0">Hue</h2>
        <Tabs.List className="TabsList" aria-label="Hue Mode">
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
      </div>
      <Tabs.Content className="TabsContent" value="ease">
        <Ease ease={ease} count={count} />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="color-harmony">
        Color Harmony
      </Tabs.Content>
    </Tabs.Root>
  </Card>
);

function Ease({ ease, count }: { ease: Ease; count: number }) {
  return (
    <div>
      <Graph points={ease.points} count={count} label="Hue" />
      <form className="near-white">
        <EaseSelect name="Hue" />
        {/* hStart : Math.random() * 360, // hue at the start of the ramp
        hCycles : 1, // number of full hue cycles // (.5 = 180°, 1 = 360°, 2 = 720°, etc.)
        hStartCenter */}
        <div className="mb3">
          <label htmlFor="hCycles" className="f6 b db mb2">
            Hue Cycles
          </label>
          <input
            id="hCycles"
            className="input-reset ba b--near-white near-white f6 bg-black pa2 mb2 db w-100"
            type="text"
            aria-describedby="hCycles-desc"
          />
          <small id="hCycles-desc" className="f6 silver db mb2">
            Number of full hue cycles (.5 = 180°, 1 = 360°, 2 = 720°, etc.)
          </small>
        </div>
        <div className="mb3">
          <label htmlFor="name" className="f6 b db mb2">
            Name <span className="normal silver">(optional)</span>
          </label>
          <input
            id="name"
            className="input-reset ba b--near-white near-white f6 bg-black pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
          />
          <small id="name-desc" className="f6 silver db mb2">
            Helper text for the form control.
          </small>
        </div>
      </form>
    </div>
  );
}

{
  /* <label className="f7 ttu tracked">
  {label}
  <select>
    {Object.values(eases).map((e) => (
      <option key={e.name} value={e.name}>
        {e.name}
      </option>
    ))}
  </select>
</label>; */
}

{
  /* <div className="flex">
  {Array.from({ length: count }).map((_, idx) => (
    <div
      key={idx}
      className="flex-auto tc f7 code"
      style={{ color: textColor }}
    >
      {idx}
    </div>
  ))}
</div>; */
}
