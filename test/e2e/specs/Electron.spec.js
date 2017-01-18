import utils from '../utils'

import { name } from '../../../config'

describe('Electron UI', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal(name)
      })
  }).timeout(10000)
})
