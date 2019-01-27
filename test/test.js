import test from 'ava'
import execaHelper from '..'

const withCli = execaHelper('./test/cli')
const withNoThrowCli = execaHelper('./test/cli', false)

test('throws error when stderr has content', withCli, async (t, cli) => {
  await t.throwsAsync(async () => cli('--greeting', 'Hello World!'))
})

test('returns stdout when stderr has no content', withCli, async (t, cli) => {
  const { stdout } = await cli('--from', 'Ian', '--greeting', 'Hello World!')
  t.snapshot(stdout)
})

test(`doesn't throw error when configured`, withNoThrowCli, async (t, cli) => {
  const { stdout, stderr } = await cli('--greeting', 'Hello World!')
  t.snapshot(stdout)
  t.snapshot(stderr)
})
