import * as solid from './solid'
import * as regular from './regular'
import * as brands from './brands'

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
    Object.assign(
        {},
        {
            ...solid,
            ...regular,
            ...brands,
        },
    ))
