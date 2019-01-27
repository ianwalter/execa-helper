import execa from 'execa'

export default function execaHelper (cli, throwOnStdErr = true) {
  return async function withCli (t, run) {
    await run(t, async (...params) => {
      const result = await execa(cli, params)

      // Throw an error if stderr has content so that the test fails.
      if (throwOnStdErr && result.stderr) {
        throw new Error(result.stderr)
      }

      return result
    })
  }
}
