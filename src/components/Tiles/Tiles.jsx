import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import styles from './Tiles.styles';
import Ceiling from './Ceiling';
import Floor from './Floor';
import RightWall from './RightWall';
import LeftWall from './LeftWall';
import BackWall from './BackWall';

const useStyles = createUseStyles(styles);

function getCell(data, pos, yOffset, xOffset) {
  return data &&
    data &&
    data[pos.y + yOffset] &&
    data[pos.y + yOffset].cells &&
    data[pos.y + yOffset].cells[pos.x + xOffset] &&
    data[pos.y + yOffset].cells[pos.x + xOffset].faces
    ? data[pos.y + yOffset].cells[pos.x + xOffset]
    : { faces: {} };
}

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Tiles = () => {
  const classes = useStyles();

  const stateLevelData = useSelector(state => state.level.levelData.data);
  const stateLevelPosition = useSelector(state => state.level.position);

  const AL = getCell(stateLevelData, stateLevelPosition, 0, -1);
  const A = getCell(stateLevelData, stateLevelPosition, 0, 0);
  const AR = getCell(stateLevelData, stateLevelPosition, 0, 1);
  const BL = getCell(stateLevelData, stateLevelPosition, 1, -1);
  const B = getCell(stateLevelData, stateLevelPosition, 1, 0);
  const BR = getCell(stateLevelData, stateLevelPosition, 1, 1);
  const CL = getCell(stateLevelData, stateLevelPosition, 2, -1);
  const C = getCell(stateLevelData, stateLevelPosition, 2, 0);
  const CR = getCell(stateLevelData, stateLevelPosition, 2, 1);
  const DL = getCell(stateLevelData, stateLevelPosition, 3, -1);
  const D = getCell(stateLevelData, stateLevelPosition, 3, 0);
  const DR = getCell(stateLevelData, stateLevelPosition, 3, 1);
  const EL = getCell(stateLevelData, stateLevelPosition, 4, -1);
  const E = getCell(stateLevelData, stateLevelPosition, 4, 0);
  const ER = getCell(stateLevelData, stateLevelPosition, 4, 1);

  return (
    <div className={classes.perspective}>
      <Ceiling
        AL={AL.faces.c}
        A={A.faces.c}
        AR={AR.faces.c}
        BL={BL.faces.c}
        B={B.faces.c}
        BR={BR.faces.c}
        CL={CL.faces.c}
        C={C.faces.c}
        CR={CR.faces.c}
        DL={DL.faces.c}
        D={D.faces.c}
        DR={DR.faces.c}
        EL={EL.faces.c}
        E={E.faces.c}
        ER={ER.faces.c}
      />
      <Floor
        AL={AL.faces.f}
        A={A.faces.f}
        AR={AR.faces.f}
        BL={BL.faces.f}
        B={B.faces.f}
        BR={BR.faces.f}
        CL={CL.faces.f}
        C={C.faces.f}
        CR={CR.faces.f}
        DL={DL.faces.f}
        D={D.faces.f}
        DR={DR.faces.f}
        EL={EL.faces.f}
        E={E.faces.f}
        ER={ER.faces.f}
      />
      <BackWall
        AL={AL.faces.n}
        A={A.faces.n}
        AR={AR.faces.n}
        BL={BL.faces.n}
        B={B.faces.n}
        BR={BR.faces.n}
        CL={CL.faces.n}
        C={C.faces.n}
        CR={CR.faces.n}
        DL={DL.faces.n}
        D={D.faces.n}
        DR={DR.faces.n}
        EL={EL.faces.n}
        E={E.faces.n}
        ER={ER.faces.n}
      />
      <RightWall A={A.faces.e} B={B.faces.e} C={C.faces.e} D={D.faces.e} E={E.faces.e} />
      <LeftWall A={A.faces.w} B={B.faces.w} C={C.faces.w} D={D.faces.w} E={E.faces.w} />
    </div>
  );
};

export default Tiles;
