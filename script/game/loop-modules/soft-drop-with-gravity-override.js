import input from "../../input.js"
import sound from "../../sound.js"
import { framesToMs } from "../../shortcuts.js"

export default function firmDrop(arg, gravityOverride = 33.33) {
  if (input.getGameDown("softDrop")) {
    arg.piece.gravityOverride = gravityOverride
    if (!arg.piece.isLanded) {
      arg.piece.genPieceParticles()
    }
  } else {
      arg.piece.gravityOverride = 0
  }
}
