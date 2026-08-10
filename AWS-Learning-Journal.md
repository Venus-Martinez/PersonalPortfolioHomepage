# AWS Learning Journal

## August 9, 2026

### IAM & AWS Permissions

- Explored AWS Identity and Access Management (IAM) users, roles, and permissions.
- Investigated a Lambda deployment failure related to AWS KMS permissions.
- Learned how AWS managed keys differ from customer managed keys.
- Determined that using the default Lambda configuration avoided the KMS permission issue.
- Gained experience troubleshooting AWS service configuration errors.

---

### EC2 Web Server

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

### AWS Lambda Serverless Web Application

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

### Amazon Bedrock Playground

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

### Reflection

Today's work demonstrated three different areas of AWS: cloud infrastructure, serverless computing, and generative AI.

Using **Amazon EC2** required provisioning and managing a virtual server, installing software, configuring networking, and maintaining the operating system. In contrast, **AWS Lambda** eliminated server management by executing Python code only when requests were received, making it a true serverless solution.

I also gained valuable troubleshooting experience by resolving an AWS KMS permission issue during Lambda deployment. Identifying the root cause and selecting the appropriate configuration allowed the deployment to succeed.

Finally, I explored **Amazon Bedrock**, AWS's generative AI platform. By interacting with the Nova Lite foundation model, I generated technical explanations, Python code, and professional portfolio content, demonstrating how foundation models can assist with software development, documentation, and content creation.

Overall, today's activities strengthened my understanding of several core AWS services and highlighted how AWS supports both traditional cloud infrastructure and modern serverless and AI-powered application development.

## August 10, 2026

### Amazon RDS & MySQL

#### Objective

Learn how to create, configure, connect to, and manage a relational database hosted in Amazon RDS using MySQL.

---

#### Services Used

- Amazon RDS
- Amazon VPC
- EC2 Security Groups
- AWS Billing
- MySQL Workbench

---

#### What I Built

- Created an Amazon RDS MySQL Community database instance.
- Selected the Free Tier `db.t4g.micro` instance type.
- Configured self-managed database credentials.
- Enabled public accessibility for testing purposes.
- Configured a Security Group to allow MySQL (port 3306) traffic from my public IP address.
- Connected successfully to the RDS instance using MySQL Workbench.

---

#### Concepts Learned

- Amazon RDS is a managed relational database service.
- A DB instance hosts one or more databases.
- Security Groups control network access to the database.
- Public accessibility determines whether external clients can connect.
- MySQL Workbench is a graphical SQL client for interacting with MySQL databases.

---

#### SQL Commands Practiced

Verified the database version:

```sql
SELECT VERSION();
```

Created a database:

```sql
CREATE DATABASE portfolio;
```

Selected the database:

```sql
USE portfolio;
```

Created a table:

```sql
CREATE TABLE visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Inserted a record:

```sql
INSERT INTO visitors (name)
VALUES ('Venus');
```

Queried the table:

```sql
SELECT * FROM visitors;
```

---

#### Skills Learned

- Created an Amazon RDS MySQL database.
- Connected to a cloud-hosted database using MySQL Workbench.
- Learned how VPC Security Groups function as virtual firewalls.
- Enabled public database access for testing.
- Configured inbound MySQL (3306) rules.
- Created databases and tables using SQL.
- Inserted and queried records.
- Verified successful database connectivity from a local computer.

---

#### Problems Encountered

Initially MySQL Workbench could not connect because:

- The RDS instance was not publicly accessible.
- Port 3306 was blocked by the Security Group.

After enabling public access and adding an inbound rule allowing MySQL traffic from my public IP address, the connection succeeded.

---

#### Cleanup

After verifying everything worked correctly:

- Deleted the RDS database instance.
- Removed the temporary inbound MySQL Security Group rule.
- Chose not to retain automated backups or create a final snapshot.
- Verified all practice resources were removed to avoid unnecessary charges.

---

### Reflection

This project introduced me to relational databases hosted in AWS and demonstrated how networking, authentication, and SQL work together. I learned that creating a database is only part of the process—proper VPC configuration and Security Group rules are equally important for successful connectivity. By connecting with MySQL Workbench and executing SQL statements against a live cloud database, I gained practical experience with one of the most common technologies used in modern web applications.

---

### Amazon CloudFront

#### Objective

Learn how to use Amazon CloudFront to distribute a static website globally through AWS edge locations while improving performance, security, and content delivery.

---

#### Services Used

- Amazon CloudFront
- Amazon S3
- AWS Global Edge Network

---

#### What I Built

- Created a CloudFront distribution for my existing Amazon S3 static portfolio website.
- Configured the S3 static website endpoint as the CloudFront origin.
- Used the recommended origin and cache settings.
- Deployed the distribution using the default HTTPS-enabled CloudFront domain.
- Successfully accessed my portfolio website through the CloudFront distribution URL.

---

#### Concepts Learned

- CloudFront is a Content Delivery Network (CDN).
- An **origin** is the source location where CloudFront retrieves content.
- CloudFront caches website content at AWS edge locations around the world.
- Cached content reduces latency and improves website loading performance.
- CloudFront automatically provides HTTPS using an AWS-managed TLS certificate.
- CloudFront can reduce the number of requests sent directly to the origin server or S3 bucket.

---

#### Skills Learned

- Created and configured an Amazon CloudFront distribution.
- Connected CloudFront to an existing Amazon S3 static website.
- Learned the difference between an origin server and an edge location.
- Verified successful website delivery through CloudFront.
- Gained experience configuring content delivery services within AWS.
- Learned how CloudFront fits into modern web application architectures.

---

#### Problems Encountered

While selecting the origin, AWS detected that my S3 bucket had Static Website Hosting enabled and recommended using the S3 website endpoint instead of the standard bucket endpoint.

Using the website endpoint allowed CloudFront to properly serve the existing static website without requiring additional configuration.

---

#### Cleanup

After verifying the CloudFront distribution functioned correctly:

- Disabled the CloudFront distribution.
- Deleted the distribution after it finished disabling.
- Confirmed all temporary resources created for this exercise were removed.

---

### Reflection

This project demonstrated how Amazon CloudFront improves website delivery by placing cached copies of content at edge locations around the world. Unlike serving content directly from Amazon S3, CloudFront reduces latency by delivering cached files from locations closer to users while automatically providing HTTPS support.

Connecting CloudFront to my existing S3 portfolio helped me understand how AWS services are commonly combined in production environments. I now have a clearer understanding of how static websites are hosted, accelerated, and securely delivered at scale using AWS.

---

### Amazon API Gateway

#### Objective

Learn how to create an Amazon API Gateway HTTP API and integrate it with an existing AWS Lambda function to expose a serverless application through a managed API endpoint.

---

#### Services Used

- Amazon API Gateway (HTTP API)
- AWS Lambda
- AWS IAM

---

#### What I Built

- Created an Amazon API Gateway HTTP API.
- Configured the API to invoke an existing AWS Lambda function (`Portfolio-Lambda-Hello`).
- Created a `GET /` route connected to the Lambda integration.
- Used the default `$default` stage with automatic deployment enabled.
- Successfully invoked the API through the generated HTTPS endpoint.
- Verified that the Lambda-generated HTML webpage was returned through API Gateway.

---

#### Concepts Learned

- API Gateway acts as the public entry point for backend services.
- An **API** is a defined interface that applications use to communicate.
- A **route** maps an HTTP request (such as `GET /`) to a backend integration.
- An **integration** connects API Gateway to AWS services such as Lambda.
- A **stage** represents a deployed version of an API.
- API Gateway can automatically invoke Lambda without requiring servers to be managed.
- API Gateway provides a more scalable and feature-rich interface than using Lambda Function URLs alone.

---

#### Skills Learned

- Created an Amazon API Gateway HTTP API.
- Integrated API Gateway with an existing AWS Lambda function.
- Configured HTTP routes and Lambda integrations.
- Deployed an API using the `$default` stage with auto-deployment.
- Successfully tested an API endpoint from a web browser.
- Gained experience connecting multiple AWS services together into a serverless architecture.

---

#### Problems Encountered

Initially, selecting the correct Lambda integration required using the Lambda function ARN before the function became available for selection within API Gateway.

After configuring the Lambda integration, creating the `GET /` route, and deploying the `$default` stage, the API successfully returned the HTML generated by the Lambda function.

---

#### Cleanup

After verifying everything worked correctly:

- Deleted the Amazon API Gateway HTTP API.
- Verified the API was removed successfully.
- Retained the existing Lambda function for future AWS projects and integrations.

---

### Reflection

This project demonstrated how Amazon API Gateway serves as the front door for serverless applications by routing incoming HTTP requests to backend services such as AWS Lambda. Unlike invoking a Lambda function directly through a Function URL, API Gateway provides structured routing, deployment stages, integrations, and the ability to support multiple endpoints within a single API.

By integrating API Gateway with the Lambda function I created previously, I built my first multi-service AWS architecture. This project reinforced how individual AWS services work together to create scalable cloud applications and provided a strong foundation for future work with monitoring, databases, authentication, and event-driven architectures.

---

### Amazon CloudWatch

#### Objective

Learn how Amazon CloudWatch collects logs, metrics, and performance data from AWS services by monitoring an existing AWS Lambda function, creating a custom dashboard, and troubleshooting application errors.

---

#### Services Used

- Amazon CloudWatch
- AWS Lambda
- CloudWatch Logs
- CloudWatch Metrics
- CloudWatch Dashboards

---

#### What I Built

- Explored the Amazon CloudWatch console.
- Examined automatically generated CloudWatch Log Groups created by AWS Lambda.
- Viewed Lambda execution log streams.
- Created a custom CloudWatch dashboard for monitoring Lambda performance.
- Added widgets displaying Lambda Invocations, Duration, Errors, and Throttles.
- Filtered dashboard metrics to monitor a specific Lambda function.
- Successfully monitored Lambda execution metrics in near real time.

---

#### Concepts Learned

- CloudWatch automatically collects metrics from many AWS services.
- AWS Lambda automatically creates CloudWatch Log Groups for function execution.
- Each Lambda invocation generates log events that can be used for troubleshooting.
- CloudWatch Dashboards provide a centralized view of application health.
- Metrics visualize application performance while Logs provide detailed execution information.
- Errors recorded by Lambda automatically appear as CloudWatch metrics.

---

#### Skills Learned

- Navigated CloudWatch Logs and Metrics.
- Located Lambda Log Groups and Log Streams.
- Created a custom CloudWatch dashboard.
- Configured dashboard widgets to display Lambda metrics.
- Filtered metrics by Lambda Function Name.
- Interpreted Lambda execution metrics including:
  - Invocations
  - Duration
  - Errors
  - Throttles
- Used CloudWatch Logs to investigate runtime failures.

---

#### Troubleshooting Exercise

To better understand CloudWatch's monitoring capabilities, I intentionally introduced a syntax error into my Lambda function by modifying the Python source code.

After deploying the broken code:

- The Lambda Function URL returned an **Internal Server Error**.
- CloudWatch recorded additional Lambda invocations.
- The Errors metric increased on the dashboard.
- CloudWatch Logs captured the runtime failure.
- The log output identified the error as:

```
Runtime.UserCodeSyntaxError
```

The log stream also included execution details such as:

- Request ID
- Duration
- Billed Duration
- Memory Size
- Max Memory Used
- Error Type

This exercise demonstrated how CloudWatch can quickly identify and diagnose application failures in serverless workloads.

---

#### Cleanup

After completing the monitoring exercise:

- Removed the intentionally introduced syntax error.
- Redeployed the Lambda function.
- Verified successful execution.
- Confirmed CloudWatch recorded successful Lambda invocations after the repair.
- Retained the CloudWatch dashboard for future monitoring practice.

---

### Reflection

This project demonstrated that Amazon CloudWatch is much more than a logging service—it is a centralized monitoring platform for AWS resources. I learned how metrics provide a high-level overview of application health while log streams contain the detailed information needed to diagnose problems.

By intentionally introducing a coding error and then using CloudWatch to identify the resulting runtime exception, I gained practical experience with one of the most important workflows used by cloud engineers and software developers. Rather than simply observing monitoring data, I used CloudWatch to investigate a real application failure from the initial error through the diagnostic logs and performance metrics.

This project strengthened my understanding of observability within AWS and showed how CloudWatch supports monitoring, troubleshooting, and maintaining production cloud applications.

---

### Amazon DynamoDB

#### Objective

Learn how to create, configure, and interact with an Amazon DynamoDB NoSQL database by creating a table, performing CRUD (Create, Read, Update, Delete) operations, and integrating DynamoDB with an existing AWS Lambda function to build a dynamic serverless application.

---

#### Services Used

- Amazon DynamoDB
- AWS Lambda
- AWS IAM

---

#### What I Built

- Created a DynamoDB table named `PortfolioVisitors`.
- Configured `visitorId` as the table's partition key.
- Used the default **On-Demand** capacity mode.
- Created multiple items within the table.
- Added custom attributes including:
  - `name`
  - `website`
  - `visitTime`
  - `favoriteLanguage`
- Retrieved items using DynamoDB's Scan operation.
- Updated an existing item by adding a new attribute.
- Deleted an item and verified the remaining data.
- Connected an existing AWS Lambda function to the DynamoDB table using the AWS SDK for Python (`boto3`).
- Configured the Lambda execution role with permissions to access DynamoDB.
- Modified the Lambda function to retrieve data dynamically from DynamoDB instead of using hardcoded values.
- Verified that updating data in DynamoDB immediately changed the webpage generated by Lambda without modifying the application code.

---

#### Concepts Learned

- Amazon DynamoDB is a fully managed NoSQL database service.
- DynamoDB stores data as **items** inside **tables** rather than rows inside relational tables.
- Each item is uniquely identified by its **partition key**.
- Items within the same table can contain different attributes without requiring schema changes.
- DynamoDB uses flexible, schema-less data structures that allow applications to evolve over time.
- On-Demand capacity automatically scales read and write throughput based on application demand.
- AWS Lambda can communicate directly with DynamoDB using the AWS SDK (`boto3`).
- IAM Roles determine which AWS resources a Lambda function is permitted to access.
- Separating application logic from stored data allows applications to update dynamically without requiring code changes or redeployment.

---

#### CRUD Operations Practiced

Created a table:

- Table: `PortfolioVisitors`
- Partition Key: `visitorId`

Created an item:

```text
visitorId: 1
name: Venus
website: Portfolio
visitTime: 2026-08-10
```

Read items:

- Performed Scan operations to retrieve table contents.
- Verified inserted records appeared correctly.
- Retrieved an item from DynamoDB using the Lambda function's `get_item()` operation.

Updated an item:

- Added a new attribute:

```text
favoriteLanguage: Java
```

- Later updated the value to:

```text
favoriteLanguage: Python
```

- Verified the Lambda-generated webpage reflected the updated value immediately.

Deleted an item:

- Removed the second sample record.
- Verified only the remaining item existed within the table.

---

#### Skills Learned

- Created an Amazon DynamoDB table.
- Selected an appropriate partition key.
- Added items using the AWS Management Console.
- Retrieved items using Scan operations.
- Updated existing items by adding new attributes.
- Deleted items from a DynamoDB table.
- Viewed DynamoDB items in both Form View and JSON View.
- Attached DynamoDB permissions to an existing Lambda execution role.
- Used the `boto3` Python SDK to retrieve items from DynamoDB.
- Accessed DynamoDB attributes from Python dictionaries.
- Generated dynamic HTML using values retrieved from the database.
- Verified that updating database records immediately changed the Lambda-generated webpage without modifying or redeploying the application logic.
- Gained experience integrating compute and database services within AWS.

---

#### Problems Encountered

Initially, after creating new items, I expected the results to appear automatically.

I learned that DynamoDB requires running a **Scan** operation to retrieve the latest data stored in the table. After rescanning, the newly created and updated items appeared correctly.

While exploring item editing, I also switched between the **Form View** and **JSON View**, gaining a better understanding of how DynamoDB stores attribute values internally.

When integrating DynamoDB with AWS Lambda, the function initially could not access the table because its execution role did not have the necessary permissions. After attaching the **AmazonDynamoDBFullAccess** policy to the Lambda execution role, the function successfully retrieved items from DynamoDB and displayed the data within the generated webpage.

---

#### Cleanup

After completing the CRUD exercise and Lambda integration:

- Deleted the temporary second sample record.
- Retained the `PortfolioVisitors` table for future AWS projects.
- Retained the updated Lambda function connected to DynamoDB for continued serverless application development.
- Left the IAM permissions in place to support future DynamoDB and Lambda exercises.

---

### Reflection

This project introduced me to Amazon DynamoDB and demonstrated how NoSQL databases differ from traditional relational databases such as MySQL. Unlike Amazon RDS, where tables require predefined schemas and SQL statements are used to manipulate data, DynamoDB stores flexible items that can contain different attributes without modifying the table structure.

By performing the complete set of CRUD operations—Create, Read, Update, and Delete—I gained practical experience working with DynamoDB's data model and management interface. Viewing the same item in both Form View and JSON View also helped me understand how DynamoDB represents attribute values internally.

The most valuable part of this project was integrating DynamoDB with an existing AWS Lambda function. Using the Python `boto3` SDK and IAM permissions, I built a simple serverless application that retrieved live data directly from the database and generated a dynamic webpage. Updating an item in DynamoDB immediately changed the webpage without requiring any modifications to the Lambda code, reinforcing the importance of separating application logic from stored data.

This project strengthened my understanding of how AWS services work together to build cloud-native applications. Combined with my previous experience using Amazon RDS for relational databases, I now have practical experience with both SQL and NoSQL database technologies as well as integrating a managed database into a serverless application architecture.

---

### Serverless Visitor Counter

#### Objective

Build a dynamic visitor counter by integrating Amazon S3, JavaScript, AWS Lambda, and Amazon DynamoDB into a complete serverless web application.

---

#### Services Used

- Amazon S3
- AWS Lambda
- Amazon DynamoDB
- AWS IAM
- JavaScript (Fetch API)

---

#### What I Built

- Created a dedicated visitor counter item within the existing `PortfolioVisitors` DynamoDB table.
- Added a `count` attribute to store the number of portfolio visits.
- Modified an existing AWS Lambda function to retrieve the visitor counter from DynamoDB.
- Used DynamoDB's `update_item()` operation to automatically increment the visitor count each time the function was invoked.
- Changed the Lambda function to return JSON instead of an HTML webpage.
- Enabled Cross-Origin Resource Sharing (CORS) on the Lambda Function URL.
- Updated my portfolio website to retrieve the visitor count using JavaScript's `fetch()` API.
- Displayed the live visitor count dynamically within the website footer.
- Successfully verified that the visitor count updated on the live Amazon S3-hosted portfolio website.

---

#### Concepts Learned

- Modern web applications often separate the frontend from the backend.
- AWS Lambda can function as a lightweight API by returning JSON responses.
- JavaScript's Fetch API allows webpages to retrieve data asynchronously without refreshing the page.
- DynamoDB can be used as persistent storage for application state.
- CORS allows browsers to safely request resources hosted on different domains.
- Returning JSON creates reusable backend services that can support multiple frontend applications.

---

#### Skills Learned

- Returned JSON responses from AWS Lambda.
- Configured HTTP response headers.
- Enabled CORS on a Lambda Function URL.
- Used JavaScript's Fetch API to retrieve remote data.
- Parsed JSON responses using `response.json()`.
- Updated webpage content dynamically using the Document Object Model (DOM).
- Implemented a persistent visitor counter using DynamoDB.

---

#### Problems Encountered

Initially, the visitor counter increased by **two** instead of one each time the webpage loaded.

Using Amazon CloudWatch Logs, I discovered that the browser automatically requested both:

- `/`
- `/favicon.ico`

Because both requests invoked the Lambda function, the visitor counter incremented twice.

After identifying the cause through CloudWatch, I modified the Lambda function to ignore favicon requests, allowing the visitor counter to increase only once per page visit.

---

#### Cleanup

After verifying everything worked correctly:

- Retained the visitor counter within the DynamoDB table.
- Retained the Lambda function.
- Retained the Lambda Function URL.
- Left CORS enabled for continued communication with the portfolio website.

---

### Reflection

This project represented my first complete serverless application that combined a frontend, backend, and database into a single solution. Instead of generating an entire webpage within AWS Lambda, I learned how modern applications separate presentation from data by allowing JavaScript to retrieve JSON from a backend API.

Building the visitor counter demonstrated how Amazon S3, JavaScript, AWS Lambda, IAM, and DynamoDB work together to create an interactive cloud-native application. Troubleshooting the double-increment issue using CloudWatch Logs also reinforced the importance of monitoring and debugging tools within AWS. This project significantly expanded my understanding of full-stack serverless development.

---

### GitHub Actions CI/CD Pipeline

#### Objective

Automate deployment of my portfolio website so that every push to GitHub automatically publishes the latest version to my Amazon S3 static website.

---

#### Services Used

- GitHub
- GitHub Actions
- AWS IAM
- Amazon S3
- AWS CLI

---

#### What I Built

- Created a dedicated IAM user for GitHub Actions deployments.
- Granted the IAM user permission to upload files to my Amazon S3 portfolio bucket.
- Generated AWS Access Keys for automated deployments.
- Stored the credentials securely using GitHub Repository Secrets.
- Created a GitHub Actions workflow (`deploy.yml`).
- Configured the workflow to run automatically whenever changes are pushed to the `main` branch.
- Used the AWS CLI within GitHub Actions to synchronize website files with my Amazon S3 bucket.
- Verified successful automated deployments through GitHub Actions workflow logs.
- Confirmed that changes appeared on the live portfolio website without running any manual deployment commands.

---

#### Concepts Learned

- CI stands for **Continuous Integration**.
- CD stands for **Continuous Deployment** (or Continuous Delivery).
- GitHub Actions automatically executes workflows based on repository events.
- GitHub Repository Secrets securely store sensitive credentials.
- IAM users can be created specifically for automation instead of using personal credentials.
- Automated deployments reduce manual work and improve deployment consistency.

---

#### Skills Learned

- Created GitHub Actions workflow files using YAML.
- Configured GitHub Repository Secrets.
- Authenticated GitHub Actions with AWS using IAM Access Keys.
- Automated Amazon S3 deployments.
- Used the AWS CLI within GitHub Actions workflows.
- Verified workflow execution through GitHub Actions logs.
- Eliminated manual deployment using `aws s3 sync`.

---

#### Problems Encountered

Before implementing GitHub Actions, every portfolio update required manually running AWS CLI deployment commands.

After configuring GitHub Actions, pushing code to GitHub automatically synchronized the updated files with Amazon S3.

The workflow completed successfully. GitHub displayed a warning indicating that Node.js 20 is being deprecated for one of the GitHub Actions used by the workflow, but the deployment completed successfully and required no changes.

---

#### Cleanup

After verifying automated deployment worked correctly:

- Retained the GitHub Actions workflow.
- Retained the IAM deployment user.
- Retained the GitHub Repository Secrets.
- Left automated deployments enabled for future portfolio updates.

---

### Reflection

Implementing CI/CD significantly improved the way I manage my portfolio website. Previously, every website update required manually running AWS CLI commands to synchronize files with Amazon S3. After implementing GitHub Actions, simply committing and pushing changes to GitHub automatically deployed the latest version of the website.

This project introduced me to modern DevOps practices by connecting GitHub, GitHub Actions, AWS IAM, Amazon S3, and the AWS CLI into a fully automated deployment pipeline. It also reinforced the importance of automation, secure credential management, and repeatable deployment processes—skills that are widely used in professional software development and cloud engineering environments.