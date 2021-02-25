import * as Types from "@app/types";

const LIMIT = 5;

function isClick(delta: Types.Position) {
  return Math.abs(delta.x) < LIMIT && Math.abs(delta.y) < LIMIT;
}

export {isClick};