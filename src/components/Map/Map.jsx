import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import styles from './Map.styles';

const useStyles = createUseStyles(styles);

const Map = () => {
  const classes = useStyles();

  const statePosX = useSelector((state) => state.level.position.x);
  const statePosY = useSelector((state) => state.level.position.y);
  const statePosFacing = useSelector((state) => state.level.position.facing);
  const stateLevelData = useSelector((state) => state.level.levelData);

  return (
    <div className={classes.map}>
      <div
        className={classes.viewport}
        style={{
          marginLeft: statePosX * -5,
          marginBottom: statePosY * -5,
        }}
      >
        {stateLevelData?.data?.map((row, y) => (
          <div key={row.id} className={classes.row}>
            {row.cells.map((cell, x) => (
              <div
                className={classnames(classes.col, {
                  [classes.cellOpen]: cell.open && cell.explored,
                })}
                key={cell.id}
              >
                <div
                  className={classnames({
                    [classes.activeColN]:
                        y === statePosY && x === statePosX && statePosFacing === 'n',
                    [classes.activeColS]:
                        y === statePosY && x === statePosX && statePosFacing === 's',
                    [classes.activeColE]:
                        y === statePosY && x === statePosX && statePosFacing === 'e',
                    [classes.activeColW]:
                        y === statePosY && x === statePosX && statePosFacing === 'w',
                  })}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
