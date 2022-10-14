import { Piece, Position, samePosition, TeamType } from "../../Constants";
import {
  tileIsEmptyOrOccupiedByOpponent,
  tileIsOccupied,
  tileIsOccupiedByOpponent,
} from "./GeneralRules";

export const bishopMove = (
  initialPosition: Position,
  desiredPosition: Position,
  team: TeamType,
  boardState: Piece[]
): boolean => {
  //Movement and attack logic for the bishop
  for (let i = 1; i < 8; i++) {
    //Up right movement
    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      let passedPosition: Position = {
        x: initialPosition.x + i,
        y: initialPosition.y + i,
      };
      //Check if the tile is the destination tile
      if (samePosition(passedPosition, desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        //Dealing with passing tile
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    //Bottom right movement
    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      let passedPosition: Position = {
        x: initialPosition.x + i,
        y: initialPosition.y - i,
      };
      //Check if the tile is the destination tile
      if (samePosition(passedPosition, desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    //Bottom left movement
    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      let passedPosition: Position = {
        x: initialPosition.x - i,
        y: initialPosition.y - i,
      };
      //Check if the tile is the destination tile
      if (samePosition(passedPosition, desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    //Top left movement
    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      let passedPosition: Position = {
        x: initialPosition.x - i,
        y: initialPosition.y + i,
      };
      //Check if the tile is the destination tile
      if (samePosition(passedPosition, desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
  }
  return false;
};

export const getPossibleBishopMoves = (
  bishop: Piece,
  boardState: Piece[]
): Position[] => {
  const possibleMoves: Position[] = [];
  //upper right movement
  for (let i = 1; i < 8; i++) {
    const destination: Position = {
      x: bishop.position.x + i,
      y: bishop.position.y + i,
    };
    if (!tileIsOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }
  //bottom right
  for (let i = 1; i < 8; i++) {
    const destination: Position = {
      x: bishop.position.x + i,
      y: bishop.position.y - i,
    };
    if (!tileIsOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }
  //upper left
  for (let i = 1; i < 8; i++) {
    const destination: Position = {
      x: bishop.position.x - i,
      y: bishop.position.y + i,
    };
    if (!tileIsOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }
  //bottom left
  for (let i = 1; i < 8; i++) {
    const destination: Position = {
      x: bishop.position.x - i,
      y: bishop.position.y - i,
    };
    if (!tileIsOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }
  return possibleMoves;
};
