//[0 dependency split pane]https://dev.to/seif_ghezala/how-to-make-your-own-splitpane-react-component-with-0-dependencies-gjg
import React from 'react'

const splitPaneContext = React.createContext();

const SplitPane = ({ children, ...props }) => {
  const [topHeight, setTopHeight] = React.useState(null);
  // The component re-renders every time there is a drag due to state change.
  // (https://reactjs.org/docs/hooks-reference.html#useref)React.useRef() can be used to maintian mutable values across renders
  const separatorYPosition = React.useRef(null);

  const splitPaneRef = React.createRef();
// Need to detect 3 mouse movements: Holds down on the line/seperator
// 2. Dragging the seperator
// 3. When the seperator was realed to reset the drag value.
  const onMouseDown = e => {
    separatorYPosition.current = e.clientY;
  };

  const onMouseMove = e => {
    if (!separatorYPosition.current) {
      return;
    }

    const newTopHeight = topHeight + e.clientY - separatorYPosition.current;
    separatorYPosition.current = e.clientY;

    setTopHeight(newTopHeight);
  };

  const onMouseUp = () => {
    separatorYPosition.current = null;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div {...props} className="split-pane" ref={splitPaneRef}>
      <splitPaneContext.Provider value={{ topHeight, setTopHeight }}>
        {children[0]}
        <div className="separator" onMouseDown={onMouseDown} />
        {children[1]}
      </splitPaneContext.Provider>
    </div>
  );
}

SplitPane.Top = function SplitPantTop(props) {
    return <div {...props} className="split-pane-top" />
}

SplitPane.Bottom = function SplitPaneBottom(props) {
    return <div {...props} className="split-pane-bottom" />;
};

export default SplitPane