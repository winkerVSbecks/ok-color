import { Card } from '../Card';
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
        <Graph points={ease.points} count={count} label="Hue" />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="color-harmony">
        Color Harmony
      </Tabs.Content>
    </Tabs.Root>
  </Card>
);

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
