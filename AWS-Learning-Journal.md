# August 9, 2026

## IAM & AWS Permissions

- Explored AWS Identity and Access Management (IAM) users, roles, and permissions.
- Investigated a Lambda deployment failure related to AWS KMS permissions.
- Learned how AWS managed keys differ from customer managed keys.
- Determined that using the default Lambda configuration avoided the KMS permission issue.
- Gained experience troubleshooting AWS service configuration errors.

---

## EC2 Web Server

- Launched an Amazon Linux 2023 EC2 instance.
- Connected to the instance using SSH from Windows PowerShell.
- Installed the Apache HTTP Server (`httpd`) using `dnf`.
- Started and enabled the Apache service.
- Created a custom HTML homepage.
- Configured the EC2 Security Group to allow HTTP (port 80) traffic.
- Verified the website was publicly accessible through the instance's public IPv4 address.
- Learned the differences between traditional virtual servers (EC2) and serverless computing.
- Terminated the EC2 instance after testing to avoid unnecessary charges.

---

## AWS Lambda Serverless Web Application

- Created an AWS Lambda function using Python 3.14.
- Learned the structure of a Python Lambda handler (`lambda_handler(event, context)`).
- Created and executed test events within the Lambda console.
- Verified successful function execution using Lambda test events.
- Configured a public Lambda Function URL with **NONE** authentication for demonstration purposes.
- Modified the function to return HTML instead of plain text.
- Used inline HTML and CSS inside the Lambda function to generate a formatted webpage.
- Successfully deployed a serverless webpage that could be accessed through a public HTTPS URL.
- Learned that Lambda automatically provisions compute resources and only runs code when invoked.
- Compared the Lambda deployment model with the earlier EC2 web server deployment.

---

## Amazon Bedrock Playground

- Explored Amazon Bedrock and the Playground interface.
- Selected the Amazon Nova Lite foundation model.
- Learned how to interact with a large language model using natural language prompts.
- Generated explanations about serverless computing.
- Compared Amazon EC2 and AWS Lambda using AI-generated responses.
- Used the model to generate Python source code.
- Generated content suitable for a software developer portfolio, including a welcome message, professional biography, and portfolio slogan.
- Explored the Bedrock Model Catalog and observed the variety of available foundation models from Amazon and third-party providers.
- Gained experience using generative AI services hosted within AWS.

---

## Reflection

Today's work demonstrated three different areas of AWS: cloud infrastructure, serverless computing, and generative AI.

Using **Amazon EC2** required provisioning and managing a virtual server, installing software, configuring networking, and maintaining the operating system. In contrast, **AWS Lambda** eliminated server management by executing Python code only when requests were received, making it a true serverless solution.

I also gained valuable troubleshooting experience by resolving an AWS KMS permission issue during Lambda deployment. Identifying the root cause and selecting the appropriate configuration allowed the deployment to succeed.

Finally, I explored **Amazon Bedrock**, AWS's generative AI platform. By interacting with the Nova Lite foundation model, I generated technical explanations, Python code, and professional portfolio content, demonstrating how foundation models can assist with software development, documentation, and content creation.

Overall, today's activities strengthened my understanding of several core AWS services and highlighted how AWS supports both traditional cloud infrastructure and modern serverless and AI-powered application development.