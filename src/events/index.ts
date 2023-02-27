import { Event } from '../types'

import ready from './ready'
import interactioCreate from './interactionCreate'

const events: Event<any>[] = [
  ...interactioCreate,
  ready,
]

export default events