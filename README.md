# @ianwalter/execa-helper
> An [AVA][avaUrl] helper that makes it easier to test CLIs using
> [Execa][execaUrl]

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/execa-helper --dev
```

## Usage

```js
import test from 'ava'
import execaHelper from '@ianwalter/execa-helper'

const withCli = execaHelper('./cli.js')

test('my cli runs without errors', withCli, async (t, cli) => {
  const { stdout } = await cli('run', '--with', 'stuff')
  t.snapshot(stdout)
})
```

## API

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[avaUrl]: https://github.com/avajs/ava
[execaUrl]: https://github.com/sindresorhus/execa
[npmImage]: https://img.shields.io/npm/v/@ianwalter/execa-helper.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/execa-helper
[licenseUrl]: https://github.com/ianwalter/execa-helper/blob/master/LICENSE
