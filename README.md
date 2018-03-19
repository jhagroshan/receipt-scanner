# Receipt-Scanner

This program will invoke an aws lambda via serverless.

Steps:
1. npm install -g serverless 
2. auth yourself to aws via awscli (aws configure)
3. create a keyfile.json and append google cloud credentials
4. serverless deploy --stage dev


TODO:
1. Build google vision api functions [done]
2. Change event method to handle post requests
3. Modify data to be integrated with david's app