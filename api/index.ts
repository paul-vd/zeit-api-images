const fs = require('fs')
const path = require('path')
import { NowRequest, NowResponse } from '@now/node'

const ChowChow = fs.readFileSync(path.join(__dirname, `./images/`, `chow.jpg`))

module.exports = (req: NowRequest, res: NowResponse) => {
  const data = {
    data: ChowChow,
    filename: 'chow.jpg',
    knownLength: ChowChow.length,
    contentType: 'image/jpg',
  }

  res.end(JSON.stringify(data))
}
