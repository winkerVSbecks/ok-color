import { Card } from '../Card';

export const Lightness = ({
  lightness,
  onLightnessChange,
}: {
  lightness: Lightness;
  onLightnessChange: (value: Lightness) => void;
}) => {
  return (
    <Card
      title="Saturation"
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
      ...
    </Card>
  );
};
