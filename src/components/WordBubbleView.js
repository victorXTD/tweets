import { useDispatch, useSelector } from "react-redux";
import { scale } from "../services";
import slice from "../slice";
import { Responsive } from "./Responsive.js";
import { HorizontalField } from "./HorizontalField.js";

function WordBubbleChart({ width, height }) {
  const dispatch = useDispatch();
  const words = useSelector(({ words }) => words);
  const selectedTopics = useSelector(({ selectedTopics }) => selectedTopics);
  const selectedWords = useSelector(
    ({ selectedWords }) => new Set(selectedWords)
  );
  const minWordCount = useSelector(({ minWordCount }) => minWordCount);

  const margin = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };
  const contentWidth = width - margin.left - margin.right;
  const contentHeight = height - margin.top - margin.bottom;
  const { x, y, s } = scale(words, contentWidth, contentHeight);

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g transform={`translate(${contentWidth / 2},${contentHeight / 2})`}>
          <g transform={`scale(${s})`}>
            <g transform={`translate(${-x},${-y})`}>
              {words.map((item) => {
                return (
                  <g
                    key={item.id}
                    className="is-clickable"
                    opacity={
                      selectedTopics.length === 0
                        ? 1
                        : selectedTopics.filter(
                            (id) => item.topicCount[id] >= minWordCount
                          ).length / selectedTopics.length
                    }
                    style={{
                      transitionProperty: "opacity",
                      transitionDuration: "1s",
                      transitionTimingFunction: "ease",
                    }}
                    transform={`translate(${item.x}, ${item.y})`}
                    onClick={() => {
                      dispatch(slice.actions.toggleWord(item.id));
                    }}
                  >
                    <title>{`${item.word}`}</title>
                    <circle r={item.r} fill={item.color} opacity="0.7" />
                    <circle
                      r={item.r}
                      fill="none"
                      stroke={selectedWords.has(item.id) ? "#363636" : "none"}
                      strokeWidth="2"
                    />
                    <text
                      className="is-unselectable"
                      fontSize={item.fontSize}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontWeight="700"
                      fill="#363636"
                    >
                      {item.word}
                    </text>
                  </g>
                );
              })}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function WordBubbleView({ words, selectedTopics }) {
  const dispatch = useDispatch();
  const minWordCount = useSelector(({ minWordCount }) => minWordCount);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="p-3">
        <HorizontalField label="Min Word Count">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="number"
                min="1"
                value={minWordCount}
                onChange={(event) => {
                  dispatch(
                    slice.actions.updateMinWordCount(+event.target.value)
                  );
                }}
              />
            </div>
          </div>
        </HorizontalField>
      </div>
      <div
        style={{
          position: "absolute",
          top: "64px",
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Responsive
          render={(width, height) => (
            <WordBubbleChart
              words={words}
              selectedTopics={selectedTopics}
              width={width}
              height={height}
            />
          )}
        />
      </div>
    </div>
  );
}
