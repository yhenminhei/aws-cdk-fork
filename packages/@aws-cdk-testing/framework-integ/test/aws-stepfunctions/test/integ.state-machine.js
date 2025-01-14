"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iam = require("aws-cdk-lib/aws-iam");
const cdk = require("aws-cdk-lib");
const sfn = require("aws-cdk-lib/aws-stepfunctions");
/*
 * Stack verification steps:
 *
 * -- aws stepfunctions describe-state-machine --state-machine-arn <stack-output> has a status of `ACTIVE`
 * -- aws iam get-role-policy --role-name <role-name> --policy-name <policy-name> has all actions mapped to respective resources.
 */
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-stepfunctions-integ');
const wait = new sfn.Wait(stack, 'wait time', {
    time: sfn.WaitTime.secondsPath('$.waitSeconds'),
});
const role = new iam.Role(stack, 'Role', {
    assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
});
const stateMachine = new sfn.StateMachine(stack, 'StateMachine', {
    definition: wait,
});
stateMachine.grantRead(role);
stateMachine.grant(role, 'states:SendTaskSuccess');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuc3RhdGUtbWFjaGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLnN0YXRlLW1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFDM0MsbUNBQW1DO0FBQ25DLHFEQUFxRDtBQUNyRDs7Ozs7R0FLRztBQUNILE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUU1RCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUM1QyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0NBQ2hELENBQUMsQ0FBQztBQUVILE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ3ZDLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztDQUM1RCxDQUFDLENBQUM7QUFFSCxNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUMvRCxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFFbkQsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIHNmbiBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3RlcGZ1bmN0aW9ucyc7XG4vKlxuICogU3RhY2sgdmVyaWZpY2F0aW9uIHN0ZXBzOlxuICpcbiAqIC0tIGF3cyBzdGVwZnVuY3Rpb25zIGRlc2NyaWJlLXN0YXRlLW1hY2hpbmUgLS1zdGF0ZS1tYWNoaW5lLWFybiA8c3RhY2stb3V0cHV0PiBoYXMgYSBzdGF0dXMgb2YgYEFDVElWRWBcbiAqIC0tIGF3cyBpYW0gZ2V0LXJvbGUtcG9saWN5IC0tcm9sZS1uYW1lIDxyb2xlLW5hbWU+IC0tcG9saWN5LW5hbWUgPHBvbGljeS1uYW1lPiBoYXMgYWxsIGFjdGlvbnMgbWFwcGVkIHRvIHJlc3BlY3RpdmUgcmVzb3VyY2VzLlxuICovXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2F3cy1zdGVwZnVuY3Rpb25zLWludGVnJyk7XG5cbmNvbnN0IHdhaXQgPSBuZXcgc2ZuLldhaXQoc3RhY2ssICd3YWl0IHRpbWUnLCB7XG4gIHRpbWU6IHNmbi5XYWl0VGltZS5zZWNvbmRzUGF0aCgnJC53YWl0U2Vjb25kcycpLFxufSk7XG5cbmNvbnN0IHJvbGUgPSBuZXcgaWFtLlJvbGUoc3RhY2ssICdSb2xlJywge1xuICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbCgnbGFtYmRhLmFtYXpvbmF3cy5jb20nKSxcbn0pO1xuXG5jb25zdCBzdGF0ZU1hY2hpbmUgPSBuZXcgc2ZuLlN0YXRlTWFjaGluZShzdGFjaywgJ1N0YXRlTWFjaGluZScsIHtcbiAgZGVmaW5pdGlvbjogd2FpdCxcbn0pO1xuXG5zdGF0ZU1hY2hpbmUuZ3JhbnRSZWFkKHJvbGUpO1xuc3RhdGVNYWNoaW5lLmdyYW50KHJvbGUsICdzdGF0ZXM6U2VuZFRhc2tTdWNjZXNzJyk7XG5cbmFwcC5zeW50aCgpO1xuIl19