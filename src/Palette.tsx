import { motion } from 'framer-motion';

const chipVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
};

export const Palette = ({
  colors,
  count,
}: {
  colors: Color[];
  count: number;
}) => (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      style={{ gridRow: '1 / -1' }}
      className="flex flex-column overflow-hidden bg-black pa4"
    >
      <div className="flex align-center justify-between mb6">
        <h2 className="f7 ttu tracked near-white fw4 ma0">Palette</h2>
        <div className="f7 ttu tracked near-white fw4">
          Color Count: {count}
        </div>
      </div>
      {colors.map((c) => (
        <motion.div
          key={c.css}
          className="flex-auto flex justify-center items-center tc f4 fw8 w-100 w-80-ns ml-auto chip"
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
    </motion.div>
  </>
);
