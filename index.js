import execa from 'execa'

export default function execaHelper (cli, throwOnStdErr = true) {
  return async function withCli (t, run) {
    await run(t, async (...params) => {
      const lastParam = params[params.length - 1]
      const options = typeof lastParam === 'object' ? params.pop() : {}
      const result = await execa(cli, params, options)

      // Throw an error if stderr has content so that the test fails.
      if (throwOnStdErr && result.stderr) {
        throw new Error(result.stderr)
      }

      return result
    })
  }
}
