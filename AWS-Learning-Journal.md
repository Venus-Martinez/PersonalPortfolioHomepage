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

## Reflection

Today demonstrated two different approaches to hosting web content on AWS.

Using **Amazon EC2** required creating and managing a virtual server, installing Apache, configuring networking, and maintaining the operating system. In contrast, **AWS Lambda** eliminated server management entirely, allowing the webpage to be generated directly from a Python function executed on demand.

I also gained practical troubleshooting experience by resolving an AWS KMS permission issue during Lambda deployment. Although the initial deployment failed, identifying the cause and using the appropriate configuration resulted in a successful serverless web application.

This exercise reinforced the differences between infrastructure-based computing (EC2) and serverless computing (Lambda), and showed how AWS provides multiple ways to deploy web applications depending on the project's requirements.