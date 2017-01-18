import utils from '../utils'

import { name } from '../../../config'

describe('Electron UI', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function (done) {
    this.timeout(10000);

    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal(name)
	done()
      })
  })
})
