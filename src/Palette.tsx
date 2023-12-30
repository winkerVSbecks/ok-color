import * as Slider from '@radix-ui/react-slider';
import { motion } from 'framer-motion';

const chipVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
};

export const Palette = ({
  colors,
  count,
  onCountChange,
}: {
  colors: Color[];
  count: number;
  onCountChange: (value: number[]) => void;
}) => (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      className="palette bg-black pa4"
    >
      <div className="flex flex-column flex-row-l items-center-l justify-between mb4 mb6-l">
        <h2 className="f7 ttu tracked near-white fw4 mx0 mt0 mb3 mb0-l">
          Palette
        </h2>
        <form className="flex items-center w5">
          <label className="f7 ttu tracked near-white fw4 mr3" htmlFor="count">
            Count
          </label>
          <Slider.Root
            className="SliderRoot"
            value={[count]}
            onValueChange={onCountChange}
            min={4}
            max={40}
            step={1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb
              className="SliderThumb"
              id="count"
              aria-label="Count"
            />
          </Slider.Root>
          <div className="f7 ttu tracked near-white fw4 ml3 number">
            {count}
          </div>
        </form>
      </div>
      <div className="ba b--primary bw2">
        {colors.map((c) => (
          <motion.div
            key={c.css}
            className="flex-auto flex justify-center items-center tc f4 fw8 h3 w-100 chip"
            style={{
              backgroundColor: c.css,
              color: c.contrast.white < c.contrast.black ? '#000' : '#fff',
            }}
            variants={chipVariants}
          >
            <motion.span
              variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
            >
              {c.printValue}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
);
