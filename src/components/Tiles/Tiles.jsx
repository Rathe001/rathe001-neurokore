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

/**
 * EL E ER
 * DL D DR
 * CL C CR
 * BL B BR
 * AL A AR
 */
const Tiles = () => {
  const classes = useStyles();

  const stateLevelData = useSelector((state) => state.level.levelData.data);
  const stateLevelPosition = useSelector((state) => state.level.position);

  function getCell(yOffset, xOffset) {
    const { x, y, facing } = stateLevelPosition;

    switch (facing) {
      case 'e':
        return stateLevelData
          && stateLevelData[y]
          && stateLevelData[y - xOffset]
          && stateLevelData[y - xOffset].cells
          && stateLevelData[y - xOffset].cells[x + yOffset]
          && stateLevelData[y - xOffset].cells[x + yOffset].faces
          ? stateLevelData[y - xOffset].cells[x + yOffset]
          : { faces: {} };
      case 'w':
        return stateLevelData
          && stateLevelData[y]
          && stateLevelData[y + xOffset]
          && stateLevelData[y + xOffset].cells
          && stateLevelData[y + xOffset].cells[x - yOffset]
          && stateLevelData[y + xOffset].cells[x - yOffset].faces
          ? stateLevelData[y + xOffset].cells[x - yOffset]
          : { faces: {} };
      case 's':
        return stateLevelData
          && stateLevelData[y]
          && stateLevelData[y - yOffset]
          && stateLevelData[y - yOffset].cells
          && stateLevelData[y - yOffset].cells[x + xOffset]
          && stateLevelData[y - yOffset].cells[x + xOffset].faces
          ? stateLevelData[y - yOffset].cells[x + xOffset]
          : { faces: {} };
      default:
        return stateLevelData
          && stateLevelData[y]
          && stateLevelData[y + yOffset]
          && stateLevelData[y + yOffset].cells
          && stateLevelData[y + yOffset].cells[x + xOffset]
          && stateLevelData[y + yOffset].cells[x + xOffset].faces
          ? stateLevelData[y + yOffset].cells[x + xOffset]
          : { faces: {} };
    }
  }

  function getFace(face) {
    const { facing } = stateLevelPosition;

    switch (facing) {
      case 's':
        if (face === 'n') {
          return 's';
        }
        if (face === 'w') {
          return 'e';
        }
        if (face === 'e') {
          return 'w';
        }
        return 'n';
      case 'e':
        if (face === 'n') {
          return 'e';
        }
        if (face === 'w') {
          return 'n';
        }
        if (face === 'e') {
          return 's';
        }
        return 'w';
      case 'w':
        if (face === 'n') {
          return 'w';
        }
        if (face === 'w') {
          return 's';
        }
        if (face === 'e') {
          return 'n';
        }
        return 'e';
      default:
        return face;
    }
  }

  const AL = getCell(0, -1);
  const A = getCell(0, 0);
  const AR = getCell(0, 1);
  const BL = getCell(1, -1);
  const B = getCell(1, 0);
  const BR = getCell(1, 1);
  const CL = getCell(2, -1);
  const C = getCell(2, 0);
  const CR = getCell(2, 1);
  const DL = getCell(3, -1);
  const D = getCell(3, 0);
  const DR = getCell(3, 1);
  const EL = getCell(4, -1);
  const E = getCell(4, 0);
  const ER = getCell(4, 1);

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
        AL={AL.faces[getFace('n')]}
        A={A.faces[getFace('n')]}
        AR={AR.faces[getFace('n')]}
        BL={BL.faces[getFace('n')]}
        B={B.faces[getFace('n')]}
        BR={BR.faces[getFace('n')]}
        CL={CL.faces[getFace('n')]}
        C={C.faces[getFace('n')]}
        CR={CR.faces[getFace('n')]}
        DL={DL.faces[getFace('n')]}
        D={D.faces[getFace('n')]}
        DR={DR.faces[getFace('n')]}
        EL={EL.faces[getFace('n')]}
        E={E.faces[getFace('n')]}
        ER={ER.faces[getFace('n')]}
      />
      <RightWall
        A={A.faces[getFace('e')]}
        B={B.faces[getFace('e')]}
        C={C.faces[getFace('e')]}
        D={D.faces[getFace('e')]}
        E={E.faces[getFace('e')]}
      />
      <LeftWall
        A={A.faces[getFace('w')]}
        B={B.faces[getFace('w')]}
        C={C.faces[getFace('w')]}
        D={D.faces[getFace('w')]}
        E={E.faces[getFace('w')]}
      />
    </div>
  );
};

export default Tiles;
