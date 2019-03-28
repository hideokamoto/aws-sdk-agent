import AWS from 'aws-sdk'
import https from 'https'

const createConfig = (config: https.AgentOptions = {}): https.AgentOptions => {
  return Object.assign({
    keepAlive: true,
    maxSockets: 50,
    rejectUnauthorized: true
  }, config)
}

export default (config: https.AgentOptions = {}) => {
  const agentConfig = createConfig(config)
  const sslAgent = new https.Agent(agentConfig)
  // sslAgent.setMaxListeners(0)
  AWS.config.update({
    httpOptions: {
      agent: sslAgent
    }
  })
  return AWS
}