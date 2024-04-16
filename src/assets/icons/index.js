import * as solid from './solid'
import * as regular from './regular'
import * as brands from './brands'

export default Object.assign(
    {},
    {
        ...solid,
        ...regular,
        ...brands,
    },
)
