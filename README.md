# AWS SDK with enable HTTP keep-alive
This is the AWS SDK wrapper with HTTP keep-alive
Ref: https://medium.com/theburningmonk-com/lambda-optimization-tip-enable-http-keep-alive-5c55810f70fe

## Getting started

```bash
$ npm i -S aws-sdk-agent
```

## Usage

```javascript
const createAWSAgent = require('aws-sdk-agent')
const AWS = createAWSAgent()

const client = new AWS.DynamoDB.DocumentClient()
client.scan({
  TableName: 'MyTable'
}).promise()
```

```typescript
import createAWSAgent from 'aws-sdk-agent'

const AWS = createAWSAgent()
const client = new AWS.DynamoDB.DocumentClient()
client.scan({
  TableName: 'MyTable'
}).promise()
```

## with option

You can overwrite agent option.

```javascript
const AWS = createAWSAgent({
  keepAlive: true,
  maxSockets: 50,
  rejectUnauthorized: true
})
```

Parameter can see here.
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/https.d.ts#L14-L17